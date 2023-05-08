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
        {/* <section className="bg-slate-100 h-screen w-full"></section> */}

        <Products products={products} />
      </main>
    </>
  );
}
