import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router.jsx";

import "./index.css";
import { CartProvider } from "./context/Cart.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={Router} />
    </CartProvider>
  </React.StrictMode>
);
