import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mudo o titulo",
  description: "Meu portifólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      
      <body className={inter.className}>
        <div className="fixed top-0 left-0 right-0 mt-12 mx-20 bg-gray-700 bg-opacity-10 backdrop-blur-sm p-10 hidden md:flex justify-center items-center h-16 z-50">
          <nav className="flex space-x-4">
          <a href="#um" className="text-white text-xl px-12 hover:text-cyan-400 duration-300 "><b>Sobre</b></a>
          <a href="#2" className="text-white text-xl px-12 hover:text-cyan-400 duration-300 "><b>Tecnologias</b></a>
          <a href="#3" className="text-white text-xl px-12 hover:text-cyan-400 duration-300 "><b>Projetos</b></a>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
