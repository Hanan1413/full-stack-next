import Hero from "@/components/home/Hreo";
import FeaturedProducts from "@/components/global/FeaturedProducts";
import {Suspense } from 'react';
import LoadingContainer from "@/components/global/LoadingContainer";


export default function Home() {
  return (
   <div>
    
   <Hero />
   <Suspense fallback={<LoadingContainer />} >
   <FeaturedProducts />
   </Suspense>


   </div>
  );
}
