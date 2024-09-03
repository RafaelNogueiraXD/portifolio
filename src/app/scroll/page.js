import Image from 'next/image';
import SectionOne from './components/section-1';
import Section2 from './components/section-2';
const Home = () => {
  return (
    <div>
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background-1.png')" }}>
   
        <div id="um" className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
         <SectionOne />
        </div>
      </section>
      <section id="2" className="h-screen flex justify-center items-center section2-bg">
        {/* <h2 className="text-2xl md:text-4xl">Segunda Seção</h2> */}
        <Section2 />
      </section>
      <section id="3" className="h-screen flex justify-center items-center bg-gray-400">
        <h2 className="text-2xl md:text-4xl">Terceira Seção</h2>
      </section>
    </div>
  );
};

export default Home;
