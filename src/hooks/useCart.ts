'use client'

import { useState, useCallback, useEffect } from 'react'
import { Product, CartItem, ProductOptions } from '@/types'

interface CartState {
  items: CartItem[]
  total: number
  subtotal: number
  itemCount: number
}

interface CartActions {
  addItem: (product: Product, quantity?: number, options?: ProductOptions) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  getItemQuantity: (productId: string) => number
  isInCart: (productId: string) => boolean
}

interface UseCartReturn extends CartState, CartActions {
  isLoading: boolean
}

// 로컬 스토리지 키
const CART_STORAGE_KEY = 'design-haus-cart'

// 초기 장바구니 상태
const initialCartState: CartState = {
  items: [],
  total: 0,
  subtotal: 0,
  itemCount: 0
}

export function useCart(): UseCartReturn {
  const [cart, setCart] = useState<CartState>(initialCartState)
  const [isLoading, setIsLoading] = useState(true)

  // 로컬 스토리지에서 장바구니 데이터 로드
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart)
        setCart(parsedCart)
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // 장바구니 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
      } catch (error) {
        console.error('Error saving cart to localStorage:', error)
      }
    }
  }, [cart, isLoading])

  // 합계 계산 함수
  const calculateTotals = useCallback((items: CartItem[]) => {
    const subtotal = items.reduce((sum, item) => sum + item.total, 0)
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    
    return {
      subtotal,
      total: subtotal, // 추후 배송비, 세금 등을 추가할 수 있음
      itemCount
    }
  }, [])

  // 상품을 장바구니에 추가
  const addItem = useCallback((product: Product, quantity = 1, options: ProductOptions = {}) => {
    setCart(prevCart => {
      // 동일한 상품과 옵션이 이미 있는지 확인
      const existingItemIndex = prevCart.items.findIndex(
        item => item.productId === product.id && 
        JSON.stringify(item.options) === JSON.stringify(options)
      )

      let updatedItems: CartItem[]

      if (existingItemIndex > -1) {
        // 기존 아이템의 수량 업데이트
        updatedItems = [...prevCart.items]
        const existingItem = updatedItems[existingItemIndex]
        const newQuantity = existingItem.quantity + quantity
        
        updatedItems[existingItemIndex] = {
          ...existingItem,
          quantity: newQuantity,
          total: product.price * newQuantity
        }
      } else {
        // 새 아이템 추가
        const newItem: CartItem = {
          id: `${product.id}-${Date.now()}`,
          productId: product.id,
          product,
          quantity,
          price: product.price,
          total: product.price * quantity,
          options
        }
        updatedItems = [...prevCart.items, newItem]
      }

      const totals = calculateTotals(updatedItems)

      return {
        items: updatedItems,
        ...totals
      }
    })
  }, [calculateTotals])

  // 상품을 장바구니에서 제거
  const removeItem = useCallback((itemId: string) => {
    setCart(prevCart => {
      const updatedItems = prevCart.items.filter(item => item.id !== itemId)
      const totals = calculateTotals(updatedItems)

      return {
        items: updatedItems,
        ...totals
      }
    })
  }, [calculateTotals])

  // 상품 수량 업데이트
  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId)
      return
    }

    setCart(prevCart => {
      const updatedItems = prevCart.items.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity,
            total: item.price * quantity
          }
        }
        return item
      })

      const totals = calculateTotals(updatedItems)

      return {
        items: updatedItems,
        ...totals
      }
    })
  }, [calculateTotals, removeItem])

  // 장바구니 비우기
  const clearCart = useCallback(() => {
    setCart(initialCartState)
  }, [])

  // 특정 상품의 수량 조회
  const getItemQuantity = useCallback((productId: string) => {
    return cart.items
      .filter(item => item.productId === productId)
      .reduce((sum, item) => sum + item.quantity, 0)
  }, [cart.items])

  // 상품이 장바구니에 있는지 확인
  const isInCart = useCallback((productId: string) => {
    return cart.items.some(item => item.productId === productId)
  }, [cart.items])

  return {
    ...cart,
    isLoading,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItemQuantity,
    isInCart
  }
}