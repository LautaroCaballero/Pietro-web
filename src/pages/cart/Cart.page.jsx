import { PhoneIcon, Trash2 } from "lucide-react";
import { useCartProvider } from "../../context/Cart.context";
import { useState, useEffect } from "react";
import { SquarePlus, SquareMinus, BookImage } from "lucide-react";
import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown";

export const Cart = () => {
  const { state } = useCartProvider();
  const [message, setMessage] = useState("");
  // const [paymentMethod, setPaymentMethod] = useState("Transferencia");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Transferencia");
  const [selectedDay, setSelectedDay] = useState("");

  useEffect(() => {
    if (state.cart_data.length > 0 && clientName && clientAddress) {
      const mensaje = [
        `Buenas! Te comunicaste con Pietro Pastas, a la brevedad serás atendido.`,
        `Detalle del pedido:`,
        ...state.cart_data.map(
          (product) => `
        - ${product.name} - ${product.description} - ${product.price} c/u x ${product.count}`
        ),
        "--------------------------------------------",
        `Total: $${state.cart_total_price}`,
        "--------------------------------------------",
        `Nombre: ${clientName}`,
        `Dirección: ${clientAddress}`,
        `Forma de pago: ${selectedPaymentMethod}`,
        `Día de entrega: ${selectedDay}`,
      ].join("\n");
      setMessage(encodeURIComponent(mensaje));
    }
  }, [state.cart_data, state.cart_total_price, selectedPaymentMethod, clientName, clientAddress, selectedDay]);

  // const handlePaymentChange = (event) => {
  //   setPaymentMethod(event.target.value);
  // };

  const handleNameChange = (event) => {
    setClientName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setClientAddress(event.target.value);
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const { actions } = useCartProvider();

  const isOrderInvalid = state.cart_data.length === 0 || !clientName || !clientAddress || selectedDay === "" || selectedPaymentMethod === "";

  return (
    <div className="h-[calc(100vh-200px)] flex flex-col items-center justify-center font-semibold">
      <div className="flex flex-col w-full max-w-md p-4 space-y-4 rounded-lg border shadow-md">
        <h1 className="text-2xl font-bold text-center">Pedido</h1>
        <div className="space-y-2">
          {state.cart_data.length === 0 ? (
            <div className="text-center text-red-500">El carrito está vacío</div>
          ) : (
            <>
              {state.cart_data.map((product) => (
                <div key={product.id} className="my-1 w-full py-2 border-b border-gray-300 flex">
                  <div className="w-full">
                    <p className="px-2 font-bold">
                      {product.name} - {product.description}
                    </p>
                    <p className="px-2 text-gray-800">${product.price} c/u</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-red-700 font-bold" onClick={() => actions.removeProduct(product)}>
                      <SquareMinus />
                    </button>
                    <span>{product.count}</span>
                    <button className="text-green-700 font-bold" onClick={() => actions.addProduct(product)}>
                      <SquarePlus />
                    </button>
                  </div>
                </div>
              ))}
              <div className="my-1 w-full py-2 border-b border-gray-300">
                <h2 className="px-2 font-bold">Total: ${state.cart_total_price}</h2>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  name="Name"
                  id="client_name"
                  placeholder="Nombre"
                  onChange={handleNameChange}
                  className={`p-2 border rounded-md ${!clientName ? "border-red-500" : ""}`}
                  required
                />
                <input
                  type="text"
                  name="Address"
                  id="address"
                  placeholder="Dirección"
                  onChange={handleAddressChange}
                  className={`p-2 border rounded-md ${!clientAddress ? "border-red-500" : ""}`}
                  required
                />
                <Dropdown
                  text="Seleccione método de pago"
                  options={["Efectivo", "Transferencia"]}
                  selectedOption={selectedPaymentMethod}
                  onOptionChange={handlePaymentMethodChange}
                />
                <Dropdown text="Seleccione un día" options={["Viernes", "Sábado", "Domingo"]} selectedOption={selectedDay} onOptionChange={handleDayChange} />
              </div>
            </>
          )}
          <div className="flex justify-center pt-4">
            <a
              href={isOrderInvalid ? "#" : `https://api.whatsapp.com/send?phone=+5493364575296&text=${message}`}
              rel="noreferrer"
              target="_blank"
              className="text-center"
            >
              <button
                className={`flex items-center justify-center p-2 text-black rounded-md ${
                  isOrderInvalid ? "cursor-not-allowed opacity-50" : "hover:text-green-500"
                }`}
                disabled={isOrderInvalid}
              >
                <PhoneIcon className="w-5 mr-2" /> Hacer pedido
              </button>
            </a>
            {state.cart_data.length !== 0 ? (
              <button className={`flex items-center justify-center p-2 text-black rounded-md`} onClick={() => actions.clearCart()}>
                <Trash2 className="w-5 mr-2" /> Borrar carrito
              </button>
            ) : (
              <Link to="/products"><button className={`flex items-center justify-center p-2 text-black rounded-md`} onClick={() => actions.clearCart()}>
                <BookImage className="w-5 mr-2" /> Ir al catalogo
              </button></Link>

            )}
          </div>
        </div>
      </div>
    </div>
  );
};
