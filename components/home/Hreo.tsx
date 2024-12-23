import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "../global/HeroCarousel";

const Hreo = () => {
  return (
    <section  className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'> Change shop experience with us </h1>
          <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, 
            eaque saepe vero odit repellendus labore fugit harum voluptates maiores nam.
          </p>
          <Button asChild size="lg" className='mt-10'>
            <Link href='/products'>
          Products
            </Link>

          </Button>
          </div>

          <HeroCarousel />
    </section>
  )
}

export default Hreo
