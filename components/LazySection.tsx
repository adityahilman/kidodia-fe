"use client"

import { useInView } from "react-intersection-observer"
import { ReactNode } from "react"
import clsx from "clsx"

type Props = {
  children: ReactNode
  fallback?: ReactNode
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right"
}

export default function LazySection({
  children,
  fallback,
  animation = "fade-up",
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-50px",
    threshold: 0.15,
  })

  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-800 ease-out will-change-transform",
        inView
          ? "opacity-100 translate-x-0 translate-y-0"
          : animation === "fade-up"
          ? "opacity-0 translate-y-20"
          : animation === "fade-in"
          ? "opacity-0"
          : animation === "slide-right"
          ? "opacity-0 -translate-x-6"
          : animation === "slide-left"
          ? "opacity-0 translate-x-6"
          : ""
      )}
    >
      {children}
    </div>
  )
}
