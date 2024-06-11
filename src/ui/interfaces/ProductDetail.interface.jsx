import { Link } from "react-router-dom";
import { useCartProvider } from "../../context/Cart.context";

export const ProductDetail = ({ setModalState, current }) => {
  const { actions } = useCartProvider();

  return (
    <div className="p-[1rem] h-[30rem] w-[100vw] md:w-[50rem] lg:w-[50rem]">
      <section className="flex">
        <p className="flex-1 text-3xl font-bold">{current.name}</p>
        <button onClick={() => setModalState(false)}>X</button>
      </section>
      <section className="mt-[1rem] flex space-x-4">
      <div className="h-[24.5rem] min-w-[50%] bg-cover flex justify-center items-center bg-center rounded-lg shadow-md hidden md:block lg:block " style={{ backgroundImage: `url(https://i.imgur.com/${current.image}.jpg)` }}></div>
        <div className="flex flex-col w-full">
          {current.products.map((flavor) => {
            return (
              <div key={flavor.description} className="my-1 w-full py-2 border-b border-gray-300 flex">
                <div className="flex-1 flex w-full">
                  <p className="px-2 font-semibold">{flavor.description}</p>
                  <span>-</span>
                  <p className="px-2 font-semibold">$ {flavor.price}</p>
                </div>
                <div className="flex space-x-4">
                  {/* Borra producto / resta count */}
                  <button className="text-red-700 font-bold" onClick={() => actions.removeProduct(flavor)}>-</button>
                  {/* obtiene producto especifico y muestra su count actual */}
                  <span>{actions.getSpecificProduct(flavor.id) ? actions.getSpecificProduct(flavor.id).count : 0}</span>
                  {/* Agrega producto / aumenta count */}
                  <button className="text-green-700 font-bold" onClick={() => actions.addProduct(flavor)}>+</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="flex justify-center space-x-7 pt-4">
        <button onClick={() => setModalState(false)} className="bg-green-700 rounded-md p-2 border-black shadow-lg hover:bg-green-400" >Continuar compra</button>
        <Link to={"/cart"}><button className="bg-blue-400 rounded-md p-2 border-black shadow-lg hover:bg-blue-600">Finalizar compra</button></Link>
      </div>
    </div>
  );
};
