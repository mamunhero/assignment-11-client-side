import NewsLetterfrom from "./NewsLetterfrom";


const NewsLetter = () => {
  return (
    <div className="mt-5 mb-5">
        <div className=" flex justify-center items-center flex-col-reverse md:flex-row h-[450px] bg-cover md:opacity-60" style={{ backgroundImage: 'url(https://i.ibb.co/LCxSBP9/img-80-2-2-798x450-1.jpg)' }}>
        <div className="w-1/2 text-white p-2 md:p-10 flex flex-col justify-center items-cente h-full">
          <p className="text-xl lg:text-3xl">Sign up for our newsletter <br /> 
          to receive our news, deals, <br /> 
           and special offers.</p>
        </div>
        <div className="w-full md:w-1/2">
          <NewsLetterfrom></NewsLetterfrom>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
