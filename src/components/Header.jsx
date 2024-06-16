import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import illustration from "../assets/illustration-1.png"
import element from "../assets/element.png"

const Header = () => {
  return (
    <section className="overflow-hidden">
      <nav className="flex px-48 mt-20 w-screen font-mulish">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-blue flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
          <span className="font-bold text-2xl">Fuzimol</span>
        </div>

        <div className="w-full">
          <ul className="flex justify-end gap-10 text-lightGray text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold text-black" : ""
              }
            >
              Home
            </NavLink>
            <NavLink to="/services">Find a doctor</NavLink>
            <NavLink to="/apps">Apps</NavLink>
            <NavLink to="/testimonials">Testimonials</NavLink>
            <NavLink to="/aboutUs">About us</NavLink>
          </ul>
        </div>
      </nav>

      <div className="mt-14 ml-2">
        <img src={element} alt="" />
      </div>

      <section>
        <main className="flex px-48 h-[888px] items-center justify-between">
          <div className="w-[442px]">
            <h1 className="text-5xl font-bold mb-6">Virtual healthcare for you</h1>
            <p className="text-lightGray text-lg mb-12">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <button className="w-48 h-12 bg-blue rounded-[35px] text-white font-semibold">Consult today</button>
          </div>

          <div>
            <img src={illustration} alt="" />
          </div>
        </main>
      </section>
    </section>
  );
};

export default Header;
