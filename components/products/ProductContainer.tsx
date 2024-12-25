
import ProductsGrid from "./ProductsGrid";
import {LuLayoutGrid, LuList} from 'react-icons/lu';
import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';
import { fetchAllProducts } from "@/utils/actions";
import Link from 'next/link';



async function ProductContainer({layout, search}: {layout:string, search:string;   children: React.ReactNode;}){
    const products = await fetchAllProducts({search})
    const totalProducts = products.length;
    const searchTerm = search ? `&search=${search}`: ''
    

    return <>
    {/* Header */}
    <section>


    </section>


    {/* Products */}
    <div>
     {totalProducts === 0 ? <h5 className="text-2xl mt-16">Sorry, no products matched your search</h5>: layout === 'grid' ? <ProductsGrid products={products}/> : ''}
    </div>
    </>
}


export default ProductContainer;