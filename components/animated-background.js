"use client"
import React, { useEffect, useRef, useState } from "react"

  class PathSegment {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.age = 0
      this.maxAge = 100
    }

    getOpacity() {
      return 1
    }
  }

  class Line {
  constructor(canvas, startX, startY, offset = 0, isDarkMode) {
    this.canvas = canvas
    this.x = startX
    this.y = startY
    this.offset = offset
    this.speed = 0.5
    this.vx = this.speed
    this.vy = 0
    this.segments = [new PathSegment(this.x, this.y)]
    this.turnCounter = Math.random() * 600 + 400
    this.lightModeColor = 'rgba(100, 149, 237, 0.6)'
    this.darkModeColor = 'rgba(70, 130, 180, 0.6)'
    this.isDarkMode = isDarkMode
  }

  isInContentZone(x, y) {
    const centerX = this.canvas.width / 2
    const centerY = this.canvas.height / 2
    const safeWidth = this.canvas.width * 0.6
    const safeHeight = this.canvas.height * 0.7

    return (
      x > centerX - safeWidth / 2 &&
      x < centerX + safeWidth / 2 &&
      y > centerY - safeHeight / 2 &&
      y < centerY + safeHeight / 2
    )
  }

  update() {
    this.segments.forEach((segment) => segment.age++)
    this.segments = this.segments.filter(
      (segment) => segment.age < segment.maxAge
    )

    const nextX = this.x + this.vx
    const nextY = this.y + this.vy

    if (this.isInContentZone(nextX, nextY)) {
      if (this.vx !== 0) {
        this.vx = 0
        this.vy = this.y > this.canvas.height / 2 ? this.speed : -this.speed
      } else {
        this.vy = 0
        this.vx = this.x > this.canvas.width / 2 ? this.speed : -this.speed
      }
      this.turnCounter = Math.random() * 600 + 400
    } else {
      this.x = nextX
      this.y = nextY
      this.segments.push(new PathSegment(this.x, this.y))

      this.turnCounter--
      if (this.turnCounter <= 0) {
        if (this.vx !== 0) {
          this.vx = 0
          this.vy = Math.random() < 0.5 ? -this.speed : this.speed
        } else {
          this.vy = 0
          this.vx = Math.random() < 0.5 ? -this.speed : this.speed
        }
        this.turnCounter = Math.random() * 300 + 200
      }
    }

    if (
      this.x < -100 ||
      this.x > this.canvas.width + 100 ||
      this.y < -100 ||
      this.y > this.canvas.height + 100
    ) {
      this.reset()
    }
  }

  reset() {
    const edge = Math.floor(Math.random() * 4)
    const edgeOffset = 100

    switch (edge) {
      case 0:
        this.x = Math.random() * this.canvas.width
        this.y = -edgeOffset
        this.vx = 0
        this.vy = this.speed
        break
      case 1:
        this.x = this.canvas.width + edgeOffset
        this.y = Math.random() * this.canvas.height
        this.vx = -this.speed
        this.vy = 0
        break
      case 2:
        this.x = Math.random() * this.canvas.width
        this.y = this.canvas.height + edgeOffset
        this.vx = 0
        this.vy = -this.speed
        break
      case 3:
        this.x = -edgeOffset
        this.y = Math.random() * this.canvas.height
        this.vx = this.speed
        this.vy = 0
        break
    }

    this.segments = [new PathSegment(this.x, this.y)]
  }

  draw(ctx) {
    if (this.segments.length < 2) return

    for (let i = 1; i < this.segments.length; i++) {
      const prev = this.segments[i - 1]
      const curr = this.segments[i]

      ctx.beginPath()
      ctx.moveTo(prev.x, prev.y + this.offset)
      ctx.lineTo(curr.x, curr.y + this.offset)
      ctx.strokeStyle = this.isDarkMode ? this.darkModeColor : this.lightModeColor
      ctx.lineWidth = 2
      ctx.stroke()
    }
  }
}

class LineGroup {
  constructor(canvas, count = 3, isDarkMode) {
    this.lines = Array.from({ length: count }, (_, i) => {
      const edge = Math.floor(Math.random() * 4)
      let startX, startY

      switch (edge) {
        case 0:
          startX = Math.random() * canvas.width
          startY = 0
          break
        case 1:
          startX = canvas.width
          startY = Math.random() * canvas.height
          break
        case 2:
          startX = Math.random() * canvas.width
          startY = canvas.height
          break
        case 3:
          startX = 0
          startY = Math.random() * canvas.height
          break
      }

      return new Line(canvas, startX, startY, i * 25, isDarkMode)
    })
  }

  update() {
    this.lines.forEach((line) => line.update())
  }

  draw(ctx) {
    this.lines.forEach((line) => line.draw(ctx))
  }
}


const AnimatedBackground = () => {
  const canvasRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId
    let groups = []

    const checkDarkMode = () => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(isDark)
      
      const htmlElement = document.documentElement
      const hasDarkClass = htmlElement.classList.contains('dark')
      if (hasDarkClass) setIsDarkMode(true)
    }

    const updateDimensions = () => {
      const width = document.documentElement.clientWidth
      const height = document.documentElement.clientHeight

      setDimensions({ width, height })

      if (canvas) {
        canvas.width = width
        canvas.height = height
        
        groups = [
          new LineGroup(canvas),
          new LineGroup(canvas),
          new LineGroup(canvas),
          new LineGroup(canvas),
        ]
      }
    }

    const animate = () => {
      ctx.fillStyle = isDarkMode 
        ? "rgba(0, 0, 0, 0.02)"
        : "rgba(255, 255, 255, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      groups.forEach((group) => {
        group.update()
        group.draw(ctx)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    checkDarkMode()
    updateDimensions()

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    darkModeMediaQuery.addEventListener('change', checkDarkMode)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode()
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    let resizeTimeout
    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
      
      resizeTimeout = setTimeout(() => {
        const newWidth = document.documentElement.clientWidth
        if (newWidth !== dimensions.width) {
          updateDimensions()
        }
      }, 250)
    }

    window.addEventListener("resize", handleResize)

    animate()

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      window.removeEventListener("resize", handleResize)
      darkModeMediaQuery.removeEventListener('change', checkDarkMode)
      observer.disconnect()
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
    }
  }, [dimensions.width, isDarkMode])

  return (
    <div className="hidden sm:inline fixed inset-0 overflow-hidden w-full h-screen pointer-events-none -z-10 bg-transparent">
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full select-none bg-transparent"
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
        }}
      />
    </div>
  )
}

export default AnimatedBackground