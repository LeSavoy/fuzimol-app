import illustration1 from "../assets/illustration-2.png";
import illustration2 from "../assets/illustration-3.png";
import element from "../assets/element.png";
import arrowDown from "../assets/arrowDown.png";

const Mobile = () => {
  return (
    <div>
      <section
        id="mobile"
        className="mt-52 flex items-center px-48 max-[600px]:px-0 max-[600px]:w-[500px] max-[600px]:gap-0 justify-center gap-44"
      >
        <div>
          <img
            src={illustration1}
            className="max-[600px]:hidden"
            alt="illustration"
          />
        </div>

        <div className="w-96">
          <h4 className="text-4xl font-semibold mb-10">
            Leading healthcare providers
          </h4>
          <hr className="w-14 bg-black h-[3px] border-none rounded-3xl mb-10" />
          <p className="text-lg text-lightGray mb-12">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className="w-52 h-14 border font-bold text-lg border-blue text-blue rounded-[35px]">
            Learn more
          </button>
        </div>
      </section>

      <div className="absolute right-0 pr-4">
        <img src={element}  alt="" />
      </div>

      <section className="mt-56 flex max-[600px]:w-[500px] max-[600px]:gap-0 max-[600px]:pl-14   items-center px-48 justify-center gap-44">
        <div className="w-96">
          <h4 className="text-4xl font-semibold mb-10">
            Download our mobile apps
          </h4>
          <hr className="w-14 bg-black h-[3px] border-none rounded-3xl mb-10" />
          <p className="text-lg text-lightGray mb-12">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <button className="w-52 h-14 border gap-5 flex items-center justify-center font-bold text-lg border-blue text-blue rounded-[35px]">
            Download
            <img src={arrowDown} alt="arrow down" />
          </button>
        </div>

        <div>
          <img src={illustration2} className="max-[600px]:hidden" alt="illustration" />
        </div>
      </section>
    </div>
  );
};

export default Mobile;
