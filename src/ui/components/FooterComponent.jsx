import { AiOutlineWhatsApp } from 'react-icons/ai';


export const Footer = () => {
    return (
        <footer className="bg-[#edf2f4] h-[250px] flex justify-around relative">

            <ul className="bg-red-300 w-44  flex items-center justify-center flex-col bg-black/40  text-center">
                <h2 className="relative bottom-10 uppercase font-semibold">Contacto</h2>
                <li className='w-full '>
                    <span className='flex self-center'><AiOutlineWhatsApp/>313 463 9661</span>
                </li>
                <li>Escribenos</li>
            </ul>

            <ul className="bg-white w-44">
                <h2>quienes somos</h2>
                <li></li>
                <li></li>
            </ul>

            <ul className="bg-white w-44">
                <h2>ayuda</h2>
                <li>numero</li>
                <li></li>
                <li></li>
            </ul>

            <ul className="bg-white w-44">
                <h2>siguenos</h2>
                <li>numero</li>
                <li></li>
                <li></li>
            </ul>

            <div className="bg-[#2b2d42] absolute bottom-0 flex w-full justify-around px-2 text-xs h-11 items-center shadow-2xl text-white">

                <img src="" alt="logo" className=" w-44"  />


                <ul className="flex gap-4">
                    <li>Términos y Condiciones</li>
                    <span>|</span>
                    <li>Política de Privacidad</li>
                    <span>|</span>
                    <li>Superintendencia de Industria y Comercio</li>
                </ul>

                <h3>2023 Hideshi S.A.S</h3>
            </div>



        </footer>
    );
};

