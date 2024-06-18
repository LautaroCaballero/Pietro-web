import { InstagramIcon, PhoneIcon } from "lucide-react";

import AboutUsPhoto from "../../assets/AboutUsPhoto.jpg";

export const AboutUs = () => {
  return (
    <div className="m-auto mt-10 max-w-[90%] md:max-w-[70%] p-6 rounded-lg border shadow-md flex flex-col xl:flex-row xl:space-x-6">
      <img src={AboutUsPhoto} alt="" className="w-full md:w-[35rem] md:h-[35rem] h-auto" />
      <div className="text-black text-lg md:text-xl text-justify space-y-6 md:py-0">
        <p>
          Nosotros somos Javier y Nicolás, las mentes y manos detrás de Pietro Pastas. Nuestro nombre proviene de Pietro, el primer Caballero que llegó al país
          y trajo consigo todas las recetas y secretos detrás de nuestras elaboraciones.
        </p>
        <p>
          Somos más que una fábrica de pastas; somos una familia. Valoramos la conexión con nuestras raíces y trabajamos con los productos de mayor calidad y
          frescura posible para brindarles una experiencia única de sabor.
        </p>
        <div className="lg:pt-16">
          <p>Podes contactarnos de la siguiente manera: </p>
          <div>
            <a href={`https://api.whatsapp.com/send?phone=+5493364575296&text=Buenas! Tengo una consulta.`}
              rel="noreferrer"
              target="_blank"
              className="text-center ">
            <button className="flex items-center justify-center p-2  text-black hover:text-green-500 rounded-md">
                <PhoneIcon className="w-5 mr-2" /> Nuestro WhatsApp!
              </button>
            </a>
          </div>
          <a href="https://www.instagram.com/pietropastasitalianas/" target="_blank">
          <button className="flex items-center justify-center p-2  text-black hover:text-blue-300 rounded-md">
                <InstagramIcon className="w-5 mr-2" /> Nuestro Instagram!
              </button>
          </a>
        </div>
      </div>

    </div>
  );
};
