import Image from 'next/image'
import { Button } from './ui/button'
// import NextLogo from './NextLogo'
// import SupabaseLogo from './SupabaseLogo'

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex flex-col items-center justify-center gap-8">
        <Image
          src="/logo.png"
          alt="Control room logo"
          width={200}
          height={200}
          className="rounded-2xl	"
        />
        <span className="h-6 rotate-45 border-l" />
      </div>
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <div className="mx-auto max-w-xl text-center text-3xl !leading-tight lg:text-4xl">
        Control all business metrics,
        <div className="font-bold underline">under one view.</div>
        <Button size="lg" variant="secondary" className="mt-6">
          <a
            href="/login"
            // className="font-bold hover:underline"
            rel="noreferrer"
          >
            Try it for free!
          </a>
        </Button>
      </div>
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </div>
  )
}
