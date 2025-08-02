"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  className?: string
  background?: ReactNode
  Icon?: React.ComponentType<{ className?: string }>
  description?: string
  href?: string
  cta?: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <motion.div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-white/5 backdrop-blur-sm border border-white/10 p-6",
      "hover:bg-white/10 transition-all duration-300",
      className,
    )}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: true }}
    {...props}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      {Icon && (
        <Icon className="h-12 w-12 origin-left transform-gpu text-white transition-all duration-300 ease-in-out group-hover:scale-75" />
      )}
      <h3 className="text-xl font-semibold text-white">
        {name}
      </h3>
      <p className="max-w-lg text-white/70">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <button className="pointer-events-auto bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/20 transition-colors">
        {cta}
      </button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-white/[.1]" />
  </motion.div>
)

export { BentoCard, BentoGrid }