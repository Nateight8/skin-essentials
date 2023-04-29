import Product from "./Product";
import { getProductBySlugOrId } from "@/lib/swell/products";

const Details = async ({ params }: any) => {
  const product = await getProductBySlugOrId(params.slug);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <Product product={product} />
    </main>
  );
};

export default Details;
