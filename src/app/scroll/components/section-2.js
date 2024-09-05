import Image from 'next/image';
import Carousel from './carrossel';
export default function Section2 (){
    return (
<div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10 lg:gap-40 justify-center items-center h-4/6 mt-5 w-full lg:w-4/6 content-center p-4 lg:p-10">
    <div className="lg:w-[344px] lg:h-[418px] md:w-[244px] md:h-[218px] w-full h-auto">
          <Image src="/images/person.jpg" className="shadow-animation border border-cyan-400 rounded-[31px] bg-transparent bg-red-400 shadow-lg" width={344} height={418} />     
    </div>
    <div className="grid grid-rows-3 border-l-2 border-cyan-400 h-full w-full col-span-2 p-4 lg:p-10 ml-0 lg:ml-10">
      <div className="row-span-2">Sou desenvolvedor web com domínio em HTML, CSS, JavaScript, React, python entre outras tecnologias. Crio interfaces dinâmicas e responsivas, sempre buscando a melhor experiência para o usuário, além de criar o API’S com tecnologias de ponta.</div>
      <div></div>
    </div>
   
  </div>

    )

}