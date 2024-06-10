import { PhoneIcon } from "lucide-react";
import { useCartProvider } from "../../context/Cart.context";
import { useState, useEffect } from "react";

export const Cart = () => {
  const { state } = useCartProvider();
  const [message, setMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Transferencia");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientDate, setClientDate] = useState("Domingo");

  useEffect(() => {
    const mensaje = [`Buenas! Te comunicaste con Pietro Pastas, a la brevedad serás atendido.`,
      ...state.cart_data.map((product) => `

      Detalle del pedido:
      - ${product.name} - ${product.description} - ${product.price} c/u x ${product.count}`),
      "--------------------------------------------",
      `Total: $${state.cart_total_price}`,
      "--------------------------------------------",
      `Nombre: ${clientName}`,
      `Dirección: ${clientAddress}`,
      `Forma de pago: ${paymentMethod}`,
      `Día de entrega: ${clientDate}`,
    ].join("\n");
    setMessage(encodeURIComponent(mensaje));
  }, [state.cart_data, state.cart_total_price, paymentMethod, clientName, clientAddress, clientDate]);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleNameChange = (event) => {
    setClientName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setClientAddress(event.target.value);
  };

  const handleDateChange = (event) => {
    setClientDate(event.target.value);
  };

  return (
    <div className="h-[calc(100vh-200px)] flex flex-col items-center justify-center font-semibold">
      <div className="flex flex-col w-full max-w-md p-4 space-y-4 rounded-lg border shadow-md">
        <h1 className="text-2xl font-bold text-center">Pedido</h1>
        <div className="space-y-2">
          {state.cart_data.map((product) => (
            <div key={product.id}>
              {product.name} - {product.description} - {product.price} c/u x {product.count}
            </div>
          ))}
          <div>
            <h2>Total: ${state.cart_total_price}</h2>
          </div>
          <div className="space-y-4">
            <input type="text" name="Name" id="client_name" placeholder="Nombre" onChange={handleNameChange} className="p-2 border rounded-md" />
            <input type="text" name="Address" id="address" placeholder="Dirección" onChange={handleAddressChange} className="p-2 border rounded-md" />
            <div className="flex justify-between">
              <h2>Método de pago:</h2>
              <div>
                <input type="radio" name="paymentMethod" id="radioCash" value="Efectivo" onChange={handlePaymentChange} className="mr-1" />
                <label htmlFor="radioCash">Efectivo</label>
              </div>
              <div>
                <input type="radio" name="paymentMethod" id="radioTransfer" value="Transferencia" onChange={handlePaymentChange} className="mr-1" defaultChecked />
                <label htmlFor="radioTransfer">Transferencia</label>
              </div>
            </div>
            <div className="flex justify-between">
              <h2>Día de entrega:</h2>
              <div>
                <input type="radio" name="orderDate" id="radioSaturday" value="Sábado" onChange={handleDateChange} className="mr-1" />
                <label htmlFor="radioSaturday">Sábado</label>
              </div>
              <div>
                <input type="radio" name="orderDate" id="radioSunday" value="Domingo" onChange={handleDateChange} className="mr-1" defaultChecked />
                <label htmlFor="radioSunday">Domingo</label>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-4 ">
            <a
              href={`https://api.whatsapp.com/send?phone=+5493364575296&text=${message}`}
              rel="noreferrer"
              target="_blank"
              className="text-center "
            >
              <button className="flex items-center justify-center p-2  text-black hover:text-green-500 rounded-md">
                <PhoneIcon className="w-5 mr-2" /> Hacer pedido
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
