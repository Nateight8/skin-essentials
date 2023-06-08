import Hero from "./components/Hero";
import Products from "./components/Products";
import { getProducts } from "@/lib/swell/products";

// interface Props {
//   Product: [];
// }

export default async function Home() {
  const { results: products } = await getProducts({ page: 1 });

  return (
    <>
      <main>
        <Hero />

        <Products products={products} />
      </main>
    </>
  );
}
