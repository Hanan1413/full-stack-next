import { fetchFeaturedProducts } from '@/utils/actions'
import React from 'react'
import EmptyList from './EmptyList';
import SectionTitle from './SectionTitle';
import ProductsGrid from '../products/ProductsGrid';




async function  FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />
  return (
    <div>
      <SectionTitle text='featured products' />
      <ProductsGrid products={products}/>
    </div>
  )
}

export default FeaturedProducts
