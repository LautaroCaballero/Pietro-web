import { createBrowserRouter } from "react-router-dom";
import { Products } from "./pages/products/Products.page";
import { Layout } from "./ui/Layout.ui";
import { Home } from "./pages/home/Home.page";
import { Cart } from "./pages/cart/Cart.page";
import { AboutUs } from "./pages/AboutUs/AboutUs.page";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Products />,
        path: "/products",
      },
      {
        element: <AboutUs />,
        path: "/AboutUs",
      },
      {
        element: <Cart />,
        path: "/cart",
      },
    ],
  },
]);
