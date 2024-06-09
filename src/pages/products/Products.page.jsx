import { useEffect, useState } from "react";

import { productsAdapter } from "../../adapter/products.adapter";
import { ProductDetail } from "../../ui/interfaces/ProductDetail.interface";
import { SHEET_API } from "../../services/sheet.service";
import { Dialog } from "../../ui/dialog/Dialog.ui";
import { Card } from "../../ui/interfaces/Card.interface";
import { ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [view_modal, setViewModal] = useState(false);
  const [current_product, setCurrentProduct] = useState(null);

  useEffect(() => {
    SHEET_API.GET_PRODUCTS().then((data) => setProducts(productsAdapter(data.map((item) => ({ ...item, price: Number(item.price) })))));
  }, []);

  return (
    <div className="p-8">
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div
            key={product.name}
            onClick={() => {
              setCurrentProduct(product);
              setViewModal(true);
            }}
            className="cursor-pointer"
          >
            <Card data={product} />
          </div>
        ))}
      </div>
      {view_modal && <Dialog component={<ProductDetail setModalState={setViewModal} current={current_product} />} />}
      {!view_modal && <Link to={"/cart"}> <div className="fixed bottom-4 right-4">
  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md">
  <ShoppingCart />
  </button>
</div></Link>}

    </div>

  );
};
