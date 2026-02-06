"use client"

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel
} from "@/components/ui/carousel"

export default function CarouselWithAutoplay({ children, delay = 3000, ...props }) {
  return (
    <Carousel plugins={[Autoplay({ delay })]} {...props}>
      {children}
    </Carousel>
  )
}