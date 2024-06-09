export const productsAdapter = (products) => {
  return products.reduce((acc, curr) => {
    if (!acc.some((item) => item.name === curr.name)) {
      return [
        ...acc,
        { products: products.filter((item) => item.name === curr.name), image: curr.image.split("/")[curr.image.split("/").length - 1], name: curr.name },
      ];
    }
    return acc;
  }, []);
};
