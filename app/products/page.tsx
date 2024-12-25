import ProductContainer from "@/components/products/ProductContainer";

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string ;  };
}) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  console.log(searchParams);

  return (
    <ProductContainer layout={layout} search={search}>
      Product Page
    </ProductContainer>
  );
}
