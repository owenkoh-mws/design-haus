"use client"

import React, { useCallback, useEffect } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#5e6ad2",
  gradientOpacity = 0.8,
  ...props
}: MagicCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - left)
      mouseY.set(e.clientY - top)
    },
    [mouseX, mouseY],
  )

  const maskImage = useMotionTemplate`radial-gradient(${gradientSize}px at ${mouseX}px ${mouseY}px, white, transparent)`
  const style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        `group relative flex size-full overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/10`,
        className,
      )}
      {...props}
    >
      <div className="relative z-10 flex size-full">{children}</div>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          ...style,
          background: `radial-gradient(${gradientSize}px circle at var(--mouse-x) var(--mouse-y), ${gradientColor}${Math.round(
            gradientOpacity * 255,
          ).toString(16)}, transparent 80%)`,
        }}
      />
    </div>
  )
}