"use client"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import { User } from "lucide-react"
import { useState, useId, useEffect } from "react"

interface SlideData {
  title: string
  userName: string
  designation: string
}

interface SlideProps {
  slide: SlideData
  index: number
  current: number
  handleSlideClick: (index: number) => void
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const { title } = slide

  return (
    <div className="flex-shrink-0 w-full ">
      <li
        className="flex flex-col items-center justify-center relative text-center w-[70vmin] h-[70vmin] mx-[4vmin] bg-[linear-gradient(to-bottom,_rgba(26,26,26,0)_0%,_rgba(26,26,26,0.54)_54%,_rgba(26,26,26,1)_100%)] text-white hover:bg-[#0147FF] rounded-xl border border-neutral-200 dark:border-neutral-800 cursor-pointer transition-all duration-300 group"
        onClick={() => handleSlideClick(index)}
        style={{
          opacity: current === index ? 1 : 0.7,
          transform: current === index ? "scale(1)" : "scale(0.95)",
        }}
      >
        <article className="p-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-white mb-4">
            {title}
          </h2>
          <p className="text-black group-hover:text-blue-100 text-base md:text-lg leading-relaxed max-w-md mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="flex items-start gap-3 mt-auto self-start">
            <User className="w-5 h-5 text-black group-hover:text-blue-200 mt-0.5" />
            <div className="flex flex-col">
              <span className="text-sm text-black group-hover:text-blue-200 font-medium">
                {slide.userName}
              </span>
              <span className="text-xs text-black group-hover:text-blue-300">
                {slide.designation}
              </span>
            </div>
          </div>
        </article>
      </li>
    </div>
  )
}

interface CarouselControlProps {
  type: string
  title: string
  handleClick: () => void
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
  return (
    <>
    </>
  )
}

interface CarouselProps {
  slides: SlideData[]
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const handlePreviousClick = () => {
    const previous = current - 1
    setCurrent(previous < 0 ? slides.length - 1 : previous)
  }

  const handleNextClick = () => {
    const next = current + 1
    setCurrent(next === slides.length ? 0 : next)
  }

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index)
    }
  }

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000) // 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const id = useId()

  return (
    <div className="relative w-[70vmin] h-[70vmin] mx-auto" aria-labelledby={`carousel-heading-${id}`}>
      <div className="absolute flex top-4 right-4 z-10">
        <CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
        <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
      <ul
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} index={index} current={current} handleSlideClick={handleSlideClick} />
        ))}
      </ul>
    </div>
  )
}
