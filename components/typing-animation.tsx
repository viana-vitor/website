"use client"
import { useState, useEffect, useCallback } from "react"

const WORDS = ["Founder", "Engineer"]

const TypingAnimation = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const animateText = useCallback(() => {
    const currentWord = WORDS[currentWordIndex]
    const typingSpeed = 150
    const deletingSpeed = 100
    const pauseDuration = 1500

    if (!isDeleting && displayText === currentWord) {
      // Word is complete, start deleting after pause
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === "") {
      // Finished deleting, move to next word
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % WORDS.length)
      return
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          // Delete last character
          setDisplayText((current) => current.slice(0, -1))
        } else {
          // Add next character
          setDisplayText((current) => currentWord.slice(0, current.length + 1))
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    )
    return () => clearTimeout(timeout)
  }, [currentWordIndex, displayText, isDeleting])
  useEffect(() => {
    const cleanup = animateText()
    return cleanup
  }, [animateText])

  return (
    <div className='h-10'>
      <span className='inline-flex text-2xl '>
        <span>{displayText}</span>
        <span className='animate-pulse text-gray-700 -ml-1'>|</span>
      </span>
    </div>
  )
}

export default TypingAnimation
