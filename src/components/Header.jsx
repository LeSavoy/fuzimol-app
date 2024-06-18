import { useEffect } from 'react';
import logo from "../assets/logo.png";
import illustration from "../assets/illustration-1.png";
import element from "../assets/element.png";


const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      let nav = document.getElementById('nav');
      nav.classList.toggle("scrollNav", window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpar o evento de scroll quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="overflow-hidden" id="home">
      <nav className="flex px-48 max-[600px]:pl-10 mt-14 w-screen font-mulish fixed z-10" id="nav">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-blue flex items-center justify-center">
            <img src={logo} alt="logo" />
          </div>
          <span className="font-bold text-2xl ">Trafalgar</span>
        </div>

        <div className="w-full max-[600px]:hidden">
          <ul className="flex justify-end gap-10 text-lightGray text-lg">
            <a href="#" className="hover:text-black">Home </a>
            <a href="#find" className="hover:text-black">Find a doctor</a>
            <a href="#mobile" className="hover:text-black">Apps</a>
            <a href="#testimonials" className="hover:text-black">Testimonials</a>
            <a hidden="#about" className="hover:text-black">About us</a>
          </ul>
        </div>
      </nav>

      <div className="mt-14 max-[600px]:mt-0 ml-2">
        <img src={element} alt="element" />
      </div>

      <section>
        <main className="flex px-48  h-[888px] max-[600px]:pl-10 items-center justify-between">
          <div className="w-[442px]">
            <h1 className="text-5xl font-bold mb-6 max-[600px]:w-[350px] ">Virtual healthcare for you</h1>
            <p className="text-lightGray text-lg mb-12">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <button className="w-48 h-12 bg-blue rounded-[35px] text-white font-semibold">Consult today</button>
          </div>

          <div>
            <img src={illustration} alt="illustration" />
          </div>
        </main>
      </section>
    </section>
  );
};

export default Header;
