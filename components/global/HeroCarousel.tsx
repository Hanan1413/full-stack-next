
import hero1 from '@/public/images/hero1.jpg';
import hero2 from '@/public/images/hero2.jpg';
import hero3 from '@/public/images/hero3.jpg';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious, CarouselItem } from '../ui/carousel';
import {Card, CardContent} from '../ui/card';
import Image from 'next/image';


const carouselImages = [hero1, hero2, hero3];

const HeroCarousel = () => {
  return (
    <div className='hidden lg:block'>
      <Carousel >
        <CarouselContent>
         {carouselImages.map((image, index) =>{
          return <CarouselItem key={index}>
             <Card>
              <CardContent>
                <Image  src={image} alt="hero" className='w-full h-[24rem]  object-cover'/>
                </CardContent>


             </Card>
          </CarouselItem>
         })}
        </CarouselContent>
         <CarouselPrevious />
          <CarouselNext />
           
      </Carousel>
      
    </div>
  )
}

export default HeroCarousel;