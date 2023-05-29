import SocialItem from "@/components/socia-item"
import { TypographyH2 } from "@/components/ui/TypographyH2"
import Card from '@/components/card'

export default function IndexPage() {

  return (
  <>
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        <span  className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text ">
          Keqing</span><br className="hidden sm:inline" />
          An interesting developer
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Hey, I am Keqing, I am currently working at <a href="https://www.thoughtworks.com/en-au" target="_blank" rel="noreferrer">Thoughtworks</a> as a Software Engineer. Currently focus on Front-end and skilled in 
          <span className="underline text-green-400 px-2 hover:scale-110 hover:bg-gray-200 hover:rounded-full rounded cursor-pointer">Vue</span>,
          <span className="underline text-blue-200 px-2 hover:scale-110 hover:bg-gray-200 hover:rounded-full rounded cursor-pointer">React</span>,
          <span className="underline text-blue-400 px-2 hover:scale-110 hover:bg-gray-200 hover:rounded-full rounded cursor-pointer">TypeScript</span>
          . I am also interested in 
          <span className="underline text-orange-400 px-2 hover:scale-110 hover:bg-gray-200 hover:rounded-full rounded cursor-pointer">Rust</span> and 
          <span className="underline text-blue-300 px-2 hover:scale-110 hover:bg-gray-200 hover:rounded-full rounded cursor-pointer">Go</span> too.
        </p>
      </div>
    </section>
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <TypographyH2 title={"Contact:"} />
        < SocialItem />
      </div>
    </section>
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <TypographyH2 title={"Project:"} />
        <Card />
      </div>
    </section>
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <TypographyH2 title={"To be done:"} />
        <li>i18n support</li>
        <li>Animation and transition</li>
        <li>Performance Optimize</li>
      </div>
    </section>
  </> 
  )
}
