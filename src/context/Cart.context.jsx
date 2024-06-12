import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart_data, setCartData] = useState([]);
  const [cart_total_price, setCartTotalPrice] = useState(0);

  const addProduct = (product) => {
    // busca si hay producto, si hay le suma 1 al count
    if (cart_data.find((item) => item.id === product.id)) {
      return setCartData(cart_data.map((item) => (item.id === product.id ? { ...item, count: item.count + 1 } : item)));
    }

    // si no hay lo crea y setea el count en 1
    setCartData([...cart_data, { ...product, count: 1 }]);
  };

  const removeProduct = (product) => {
    // busca si hay producto, si hay le resta 1 al count
    if (cart_data.find((item) => item.id === product.id && item.count > 1)) {
      return setCartData(cart_data.map((item) => (item.id === product.id ? { ...item, count: item.count - 1 } : item)));
    }

    // si no hay lo elimina
    setCartData(cart_data.filter((item) => item.id !== product.id));
  };

    // limpia el carrito
  const clearCart = () => {
    setCartData([])
    setCartTotalPrice(0)
  }

  // busca un producto en el carrito por id
  const getSpecificProduct = (id) => {
    return cart_data.find((item) => item.id === id);
  };

  const state = {
    cart_data,
    cart_total_price,
  };

  const actions = {
    addProduct,
    removeProduct,
    getSpecificProduct,
    clearCart
  };

  useEffect(() => {
    // suma todo los prices de los productos en el carrito
    setCartTotalPrice(cart_data.reduce((acc, item) => acc + item.price * item.count, 0));
  }, [cart_data]);

  return <CartContext.Provider value={{ state, actions }}>{children}</CartContext.Provider>;
};

export const useCartProvider = () => {
  const { state, actions } = useContext(CartContext);

  return { state, actions };
};
