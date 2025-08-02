// Cart Store - Design Haus
// Shopping cart state management

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Cart, CartItem, Product, ProductOptions } from '@/types'

interface CartState {
  cart: Cart | null
  isLoading: boolean
  error: string | null
}

interface CartActions {
  addItem: (product: Product, quantity: number, options?: ProductOptions) => void
  removeItem: (itemId: string) => void
  updateItemQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  applyCoupon: (couponCode: string) => Promise<void>
  removeCoupon: () => void
  calculateTotals: () => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

type CartStore = CartState & CartActions

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // State
      cart: null,
      isLoading: false,
      error: null,

      // Actions
      addItem: (product: Product, quantity: number, options: ProductOptions = {}) => {
        const currentCart = get().cart
        const newItem: CartItem = {
          id: `${product.id}-${Date.now()}`,
          productId: product.id,
          product,
          quantity,
          price: product.price,
          total: product.price * quantity,
          options
        }

        if (!currentCart) {
          // Create new cart
          const newCart: Cart = {
            id: `cart-${Date.now()}`,
            userId: '', // Will be set when user logs in
            items: [newItem],
            total: newItem.total,
            subtotal: newItem.total,
            shipping: 0,
            tax: 0,
            discount: 0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
          set({ cart: newCart })
        } else {
          // Check if item with same product and options already exists
          const existingItemIndex = currentCart.items.findIndex(
            item => 
              item.productId === product.id && 
              JSON.stringify(item.options) === JSON.stringify(options)
          )

          let updatedItems: CartItem[]
          
          if (existingItemIndex >= 0) {
            // Update existing item quantity
            updatedItems = currentCart.items.map((item, index) => 
              index === existingItemIndex 
                ? { 
                    ...item, 
                    quantity: item.quantity + quantity,
                    total: (item.quantity + quantity) * item.price
                  }
                : item
            )
          } else {
            // Add new item
            updatedItems = [...currentCart.items, newItem]
          }

          const updatedCart: Cart = {
            ...currentCart,
            items: updatedItems,
            updatedAt: new Date().toISOString()
          }

          set({ cart: updatedCart })
          get().calculateTotals()
        }
      },

      removeItem: (itemId: string) => {
        const currentCart = get().cart
        if (!currentCart) return

        const updatedItems = currentCart.items.filter(item => item.id !== itemId)
        const updatedCart: Cart = {
          ...currentCart,
          items: updatedItems,
          updatedAt: new Date().toISOString()
        }

        set({ cart: updatedCart })
        get().calculateTotals()
      },

      updateItemQuantity: (itemId: string, quantity: number) => {
        const currentCart = get().cart
        if (!currentCart) return

        if (quantity <= 0) {
          get().removeItem(itemId)
          return
        }

        const updatedItems = currentCart.items.map(item =>
          item.id === itemId
            ? { ...item, quantity, total: quantity * item.price }
            : item
        )

        const updatedCart: Cart = {
          ...currentCart,
          items: updatedItems,
          updatedAt: new Date().toISOString()
        }

        set({ cart: updatedCart })
        get().calculateTotals()
      },

      clearCart: () => {
        set({ cart: null, error: null })
      },

      applyCoupon: async (couponCode: string) => {
        const currentCart = get().cart
        if (!currentCart) return

        set({ isLoading: true, error: null })

        try {
          // TODO: Implement actual coupon validation API call
          // const response = await cartService.applyCoupon(couponCode)
          // const discount = response.data.discount

          // Mock implementation for now
          const discount = couponCode === 'SAVE10' ? currentCart.subtotal * 0.1 : 0

          if (discount > 0) {
            const updatedCart: Cart = {
              ...currentCart,
              couponCode,
              discount,
              updatedAt: new Date().toISOString()
            }

            set({ cart: updatedCart, isLoading: false })
            get().calculateTotals()
          } else {
            set({ 
              error: '유효하지 않은 쿠폰 코드입니다.',
              isLoading: false 
            })
          }
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : '쿠폰 적용에 실패했습니다.',
            isLoading: false
          })
        }
      },

      removeCoupon: () => {
        const currentCart = get().cart
        if (!currentCart) return

        const updatedCart: Cart = {
          ...currentCart,
          couponCode: undefined,
          discount: 0,
          updatedAt: new Date().toISOString()
        }

        set({ cart: updatedCart })
        get().calculateTotals()
      },

      calculateTotals: () => {
        const currentCart = get().cart
        if (!currentCart) return

        const subtotal = currentCart.items.reduce((sum, item) => sum + item.total, 0)
        const shipping = subtotal > 50000 ? 0 : 3000 // Free shipping over 50,000원
        const tax = subtotal * 0.1 // 10% tax
        const total = subtotal + shipping + tax - (currentCart.discount || 0)

        const updatedCart: Cart = {
          ...currentCart,
          subtotal,
          shipping,
          tax,
          total: Math.max(0, total), // Ensure total is not negative
          updatedAt: new Date().toISOString()
        }

        set({ cart: updatedCart })
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading })
      },

      setError: (error: string | null) => {
        set({ error })
      }
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({ cart: state.cart })
    }
  )
)

// Selectors for easier state access
export const cartSelectors = {
  cart: (state: CartStore) => state.cart,
  items: (state: CartStore) => state.cart?.items || [],
  itemCount: (state: CartStore) => 
    state.cart?.items.reduce((count, item) => count + item.quantity, 0) || 0,
  subtotal: (state: CartStore) => state.cart?.subtotal || 0,
  total: (state: CartStore) => state.cart?.total || 0,
  shipping: (state: CartStore) => state.cart?.shipping || 0,
  tax: (state: CartStore) => state.cart?.tax || 0,
  discount: (state: CartStore) => state.cart?.discount || 0,
  couponCode: (state: CartStore) => state.cart?.couponCode,
  isEmpty: (state: CartStore) => !state.cart || state.cart.items.length === 0,
  isLoading: (state: CartStore) => state.isLoading,
  error: (state: CartStore) => state.error
}

// Helper hooks
export const useCart = () => {
  const store = useCartStore()
  return {
    cart: store.cart,
    items: cartSelectors.items(store),
    itemCount: cartSelectors.itemCount(store),
    subtotal: cartSelectors.subtotal(store),
    total: cartSelectors.total(store),
    shipping: cartSelectors.shipping(store),
    tax: cartSelectors.tax(store),
    discount: cartSelectors.discount(store),
    couponCode: cartSelectors.couponCode(store),
    isEmpty: cartSelectors.isEmpty(store),
    isLoading: store.isLoading,
    error: store.error,
    addItem: store.addItem,
    removeItem: store.removeItem,
    updateItemQuantity: store.updateItemQuantity,
    clearCart: store.clearCart,
    applyCoupon: store.applyCoupon,
    removeCoupon: store.removeCoupon
  }
}

export const useCartItems = () => useCartStore(cartSelectors.items)
export const useCartItemCount = () => useCartStore(cartSelectors.itemCount)
export const useCartTotal = () => useCartStore(cartSelectors.total)
export const useCartIsEmpty = () => useCartStore(cartSelectors.isEmpty)