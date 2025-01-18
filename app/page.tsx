import Link from "next/link"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { LinkedinIcon, GithubIcon, XTwitterIcon } from "@/components/icons"

import TypingAnimation from "@/components/typing-animation"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <div className='relative z-10 min-h-screen p-3 sm::p-8 pb-4 font-[family-name:var(--font-geist-mono)]'>
        {/* Header Section */}
        <div className='grid grid-cols-[6px_1fr_6px] sm:grid-cols-[20px_1fr_20px] justify-items-center mt-6 sm:mt-24'>
          <div className='flex flex-col col-start-2 space-y-6'>
            <h1 className='text-3xl font-semibold text-center'>Vitor Viana</h1>
            <div className='flex justify-center'>
              <TypingAnimation />
            </div>
            <div className='sm:max-w-lg'>
              <p className='text-center text-sm font-extralight'>
                I&apos;m a software engineer with a passion for building
                products that improve people&apos;s lives. I&apos;m currently
                working on a stealth startup.
              </p>
            </div>
          </div>
        </div>

        {/* Work Section */}
        <div className='grid grid-cols-[6px_1fr_6px] sm:grid-cols-[20px_1fr_20px] justify-items-center mt-8 sm:mt-16'>
          <div className='w-full sm:max-w-2xl col-start-2'>
            <h2 className='text-xl font-semibold mb-8'>Work</h2>
            <div className='sm:px-6 pb-3'>
              <Link
                href={"/"}
                className='grid grid-cols-1 sm:grid-cols-[100px_1fr_16px] items-start gap-2 sm:gap-12 sm:p-3 group'
              >
                <div className='text-sm font-medium'>
                  Oct 22 - <br className='hidden sm:inline' /> Dec 24
                </div>
                <div className='flex flex-col'>
                  <h3 className='font-semibold'>
                    <span className='underline sm:no-underline underline-offset-2 sm:group-hover:text-blue-400 dark:sm:group-hover:text-blue-300'>
                      Iscicle
                    </span>{" "}
                    - <span className='font-normal'>Founder</span>
                  </h3>
                  <p className='text-sm font-extralight'>
                    Social platform for international students
                  </p>
                </div>
                <div className='hidden sm:flex flex-col h-full items-center justify-center'>
                  <ArrowUpRightIcon className='h-4 w-4 sm:group-hover:stroke-blue-400 dark:sm:group-hover:stroke-blue-300 sm:group-hover:animate-bounce' />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className='grid grid-cols-[6px_1fr_6px] sm:grid-cols-[20px_1fr_20px] justify-items-center mt-10'>
          <div className='w-full sm:max-w-2xl col-start-2 '>
            <h2 className='text-xl font-semibold mb-8'>Projects</h2>
            <div className='pb-8 sm:px-6 sm:pb-3'>
              <Link
                href={"/"}
                className='grid grid-cols-1 sm:grid-cols-[100px_1fr_16px] items-start gap-2 sm:gap-12 sm:p-3 group'
              >
                <div className='text-sm font-medium'>Aug 23</div>
                <div>
                  <h3 className='font-semibold underline sm:no-underline underline-offset-2 sm:group-hover:text-blue-400 dark:sm:group-hover:text-blue-300'>
                    Transfer Tea
                  </h3>
                  <p className='text-sm font-extralight'>
                    Website for college transfer consulting services
                  </p>
                </div>
                <div className='hidden sm:flex flex-col h-full items-center justify-center'>
                  <ArrowUpRightIcon className='h-4 w-4 sm:group-hover:stroke-blue-400 dark:group-hover:stroke-blue-300 sm:group-hover:animate-bounce' />
                </div>
              </Link>
            </div>
            <div className='sm:px-6 sm:pb-3'>
              <Link
                href={"/"}
                className='grid grid-cols-1 sm:grid-cols-[100px_1fr_16px] items-start gap-2 sm:gap-12 sm:p-3 group'
              >
                <div className='text-sm font-medium'>
                  Jan 22 - <br className='hidden sm:inline' />
                  Aug 22
                </div>
                <div>
                  <h3 className='font-semibold underline sm:no-underline underline-offset-2 sm:group-hover:text-blue-400 dark:sm:group-hover:text-blue-300'>
                    Handie
                  </h3>
                  <p className='text-sm font-extralight'>
                    Desktop application for construction management
                  </p>
                </div>
                <div className='hidden sm:flex flex-col h-full items-center justify-center'>
                  <ArrowUpRightIcon className='h-4 w-4 sm:group-hover:stroke-blue-400 dark:group-hover:stroke-blue-300 sm:group-hover:animate-bounce' />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <footer className='flex justify-center items-center gap-4 sm:gap-8 mt-20 sm:mt-24'>
          <a
            href='https://github.com/viana-vitor'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GithubIcon className='w-5 h-5 dark:fill-white' />
          </a>
          <a
            href='https://www.linkedin.com/in/vitor-viana/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedinIcon className='w-5 h-5 dark:fill-white' />
          </a>
          <a
            href='https://x.com/vitoroliviana'
            target='_blank'
            rel='noopener noreferrer'
          >
            <XTwitterIcon className='w-5 h-5 dark:fill-white' />
          </a>
        </footer>
      </div>
    </>
  )
}
