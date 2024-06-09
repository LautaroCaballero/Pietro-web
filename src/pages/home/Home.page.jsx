import Canelon from '../../assets/Canelones.jpg';

export const Home = () => {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-36">
      <div className="py-10 md:py-16 lg:py-20 flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center w-80 h-80 md:w-80 md:h-80 lg:w-[30rem] lg:h-[30rem]">
          <img src={Canelon} className="w-full h-full rounded-full shadow-xl shadow-slate-700 object-cover" alt="Canelon" />
        </div>
        <div className="mt-10 lg:mt-0 text-center lg:text-left flex flex-col items-center lg:items-start text-gray-800">
          <p className="text-2xl md:text-4xl lg:text-4xl fadeInText">Receta de familia Italiana</p>
          <p className="text-4xl md:text-6xl lg:text-6xl fadeInTextTwo">Hecha con el corazón.</p>
        </div>
      </div>
    </div>
  );
};
