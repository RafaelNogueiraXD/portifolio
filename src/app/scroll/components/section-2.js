export default function Section2 (){
    return (
        <div className="grid grid-cols-3 gap-40 justify-center items-center h-4/6 mt-5 w-4/6 content-center p-10">
        <div className="w-[344px] h-[418px] border border-cyan-400 rounded-[31px] bg-transparent"></div>
        <div className="grid grid-rows-3 border-l-2 border-cyan-400 h-full w-full col-span-2 p-10">
          <div className="row-span-2">Texto</div>
          <div>parte 2</div>
        </div>
      </div>
    )

}