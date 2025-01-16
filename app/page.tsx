import TypingAnimation from "@/components/typing-animation"

export default function Home() {
  return (
    <div className='min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-mono)]'>
      {/* Header Section */}
      <div className='grid grid-cols-[20px_1fr_20px] justify-items-center mt-24'>
        <div className='flex flex-col col-start-2 space-y-6'>
          <h1 className='text-3xl font-semibold text-center'>Vitor Viana</h1>
          <div className='flex justify-center'>
            <TypingAnimation />
          </div>
          <div className='max-w-lg'>
            <p className='text-center text-sm font-extralight'>
              I&apos;m a software engineer with a passion for building products
              that improve people&apos;s lives. I&apos;m currently working on a
              stealth startup.
            </p>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div className='grid grid-cols-[20px_1fr_20px] justify-items-center mt-16'>
        <div className='w-full max-w-2xl col-start-2'>
          <h2 className='text-xl font-semibold mb-8'>Work</h2>
          <div className='px-6 pb-6'>
            <div className='grid grid-cols-[120px_1fr] items-start gap-16'>
              <div className='text-sm font-medium'>
                Oct 22 - <br />
                Dec 24
              </div>
              <div>
                <h3 className='font-semibold'>
                  Iscicle - <span className='font-normal'>Founder</span>
                </h3>
                <p className='text-sm font-extralight'>
                  Social platform for international students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className='grid grid-cols-[20px_1fr_20px] justify-items-center mt-10'>
        <div className='w-full max-w-2xl col-start-2'>
          <h2 className='text-xl font-semibold mb-8'>Projects</h2>
          <div className='p-6'>
            <div className='grid grid-cols-[120px_1fr] items-start gap-16'>
              <div className='text-sm font-medium'>Aug 23</div>
              <div>
                <h3 className='font-semibold'>Transfer Tea</h3>
                <p className='text-sm font-extralight'>
                  Website for college transfer consulting services
                </p>
              </div>
            </div>
          </div>
          <div className='p-6'>
            <div className='grid grid-cols-[120px_1fr] items-start gap-16'>
              <div className='text-sm font-medium'>
                Jan 22 - <br />
                Aug 22
              </div>
              <div>
                <h3 className='font-semibold'>Handie</h3>
                <p className='text-sm font-extralight'>
                  Desktop application for construction management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
