import swell from "./client";

export const getProducts = async ({
  page = 1,
  //   sort = "",
  filters = {},
  limit = 4,
}) => {
  return await swell.products.list({
    page,
    limit,
    // sort,
    $filters: filters,
    expand: ["variants", "categories"],
  });
};

export const getProductBySlugOrId = async (slugOrId: string) => {
  return await swell.products.get(slugOrId);
};
