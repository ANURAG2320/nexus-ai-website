"use client"
import type React from "react"
import { cn } from "@/lib/utils"

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode
  containerClassName?: string
  className?: string
}) => {
  return (
    <section className={cn("mx-auto w-full bg-[#0147FF]  relative rounded-2xl overflow-hidden", containerClassName)}>
      <div
        className="relative  h-full  sm:mx-0 sm:rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
        <div className={cn("tracking-widest h-full px-4 py-10 sm:px-10", className)}>
          <Noise />
          {children}
        </div>
      </div>
    </section>
  )
}

const Noise = () => {
  return (
    <div className="absolute inset-0 w-full h-full  transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"></div>
  )
}
