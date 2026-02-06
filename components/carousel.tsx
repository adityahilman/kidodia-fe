"use client"

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel
} from "@/components/ui/carousel"
import { ReactNode } from "react"

export default function CarouselWithAutoplay(
  { children, 
    delay = 3000, 
    ...props }: 
  { children: ReactNode, 
    delay?: number,
    [key: string]: any 
  }) {
  return (
    <Carousel plugins={[Autoplay({ delay })]} {...props}>
      {children}
    </Carousel>
  )
}