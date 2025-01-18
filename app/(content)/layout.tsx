export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='prose prose-slate dark:prose-invert mx-auto max-w-3xl mt-16 px-4 sm:px-6 lg:px-8 space-y-6 font-[family-name:var(--font-geist-sans)]'>
      {children}
    </div>
  )
}
