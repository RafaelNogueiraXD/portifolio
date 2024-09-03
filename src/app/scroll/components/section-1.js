
import Image from 'next/image';
const SectionOne = () => {
    return (
      <div className="block justify-center items-center h-full w-4/6 content-center">
        <div className="flex flex-col border-2 border-cyan-400 rounded-3xl bg-gray-800 bg-opacity-45 p-8 flex space-x-10 mt-10 justify-center items-center">
          <div className="m-2 p-6 text-5xl  font-f">Bem vindo!</div>
          <div className="m-2 p-6 text-2xl  font-f text-center">Olá, sou Rafael Nogueira, um programador full stack de 22 anos, domino tanto o front-end quanto o back-end. Com uma paixão por tecnologia e inovação, Eu crio soluções eficientes e elegantes, sempre buscando aprimorar minhas habilidades e entregar projetos de alta qualidade.</div>
          <div className="flex m-2 p-4 ">
            <a href="#2">
                <Image src="/images/arrowDown.png" className="border-2 border-cyan-400 rounded-xl p-2 animate-bounce hover:bg-cyan-400 hover:bg-opacity-45 duration-300" alt="More" width={67} height={62} />
            </a>
            {/* <p className="translate-x--1 transform hover:translate-x-8 duration-700 overflow-x-hidden"> Ver mais </p> */}
          </div>

          {/* arrowDown.png */}
        </div>
      </div>
    );
  };
  
  export default SectionOne;