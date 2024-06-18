import footerBg from "../assets/footerBg.png";
import blueLogo from "../assets/blueLogo.png";

const Footer = () => {
return (
<footer className="text-white">

php
Copiar código
  <img src={footerBg} className="w-full max-[600px]:h-[600px] absolute" alt="" />

  <div className="relative flex max-[600px]:px-14 px-48 gap-40 ">
    <div className=" ">
      <div className="flex gap-3 items-center mt-28">
        <div className="w-10 h-10 mb-5 rounded-full bg-white flex items-center justify-center">
          <img src={blueLogo} alt="" />
        </div>
        <span className="font-bold  text-2xl mb-5">Trafalgar</span>
      </div>

      <p className="max-w-[350px] mb-9">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
      for everyone</p>

      <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
    </div>

    <div className="mt-28 gap-6 flex flex-col ">
      <p className="mb-2 font-bold text-lg">Company</p>
      <p className="cursor-pointer">About</p>
      <p className="cursor-pointer">Testimonials</p>
      <p className="cursor-pointer">Find a doctor</p>
      <p className="cursor-pointer">Apps</p>
    </div>

    <div className="mt-28 gap-6 flex flex-col">
      <p className="mb-2 font-bold text-lg">Region</p>
      <p className="cursor-pointer">Indonesia</p>
      <p className="cursor-pointer">Singapure</p>
      <p className="cursor-pointer">Hongkong</p>
      <p className="cursor-pointer">Canada</p>
    </div>

    <div className="mt-28 gap-6 flex flex-col">
      <p className="mb-2 font-bold text-lg">Help</p>
      <p className="cursor-pointer">Help center</p>
      <p className="cursor-pointer">Contact support</p>
      <p className="cursor-pointer">Instrucitons</p>
      <p className="cursor-pointer">How it works</p>
    </div>

  </div>
</footer>
);
};

export default Footer;