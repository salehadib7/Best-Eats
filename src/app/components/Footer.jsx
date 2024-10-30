import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#000000] pt-14  tracking-wide">
      <div className="flex justify-center items-center">
        <div className=" w-[95%] pb-10 flex justify-between items-center  border-gray-500 border-b-[1px]">
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 text-orange-500'>
          Best <span className='font-bold text-white'>Eats</span>
        </h1>

          <div className="text-right text-gray-300 text-xs md:text-base">
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p>Open : 09:00 Am - 01:00 PM</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-[95%] mx-auto text-gray-300 py-5">
        <div className="flex items-center justify-center gap-2 p-2">
            <h4>Built by <span className="font-medium">Saleh Adib</span> </h4>
            <h4> · Powered by Next JS</h4>
        </div>
        <div className="flex items-center justify-center gap-8 cursor-pointer">
            <h4>Facebook</h4>
            <h4>Gmail</h4>
            <h4>Youtube</h4>
            <h4>Twitter</h4>
            <h4>Github</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
