import search from "../assets/search.png";
import pharmacy from "../assets/pharmacy.png";
import consultation from "../assets/consultation.png";
import details from "../assets/details.png";
import emergency from "../assets/emergency.png";
import tracking from "../assets/tracking.png";
import bgEffect from "../assets/bg-effect.png"
import secondElement from "../assets/secondElement.png"

const Services = () => {
  return (
    <section className="h-[1200px]">
      <div className=" flex flex-col items-center gap-10 mt-14">
        <h2 className="text-4xl font-semibold">Our services</h2>
        <hr className="w-14 bg-black h-[3px] border-none rounded-3xl " />
        <p className="text-lg text-lightGray text-center">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment <br /> with our highly
          qualified doctors you can consult with us which type of service is
          suitable for your health
        </p>
      </div>

      <div className="absolute -z-10 mt-20 opacity-60">
        <img src={bgEffect} alt="" />
      </div>

      <div className="absolute -z-10 right-[326px] mt-[395px]">
        <img src={secondElement} alt="" />
      </div>

      <div className="grid grid-rows-2 grid-cols-3 justify-items-center mx-96 mt-24 gap-9">
        <div className="w-[360px] h-[365px] pl-9 pt-12 border rounded-2xl bg-white border-none
                       shadow-[#E7F2FF] shadow-2xl">
          <img src={search} className="mb-10" alt="search" />
          <h4 className="text-3xl font-semibold mb-6 ">Search doctor</h4>
          <p className="text-lg text-lightGray mr-8">
            Choose your doctor from thousands of specialist, general, and
            trusted hospitals
          </p>
        </div>

        <div className="w-[360px] h-[365px] pl-9 pt-12 border rounded-2xl bg-white border-none
                       shadow-[#E7F2FF] shadow-2xl">
          <img src={pharmacy} className="mb-10" alt="" />
          <h4 className="text-3xl font-semibold mb-6">Online pharmacy</h4>
          <p className="text-lg text-lightGray mr-8">Buy  your medicines with our mobile application with a simple delivery system</p>
        </div>

        <div className="w-[360px] h-[365px] pl-9 pt-12 border rounded-2xl bg-white border-none
                       shadow-[#E7F2FF] shadow-2xl">
          <img src={consultation} className="mb-10" alt="" />
          <h4 className="text-3xl font-semibold mb-6">Consultation</h4>
          <p className="text-lg text-lightGray mr-8">Free consultation with our trusted doctors and get the best recomendations</p>
        </div>

        <div className="w-[360px] h-[365px] pl-9 pt-12 border rounded-2xl bg-white border-none
                       shadow-[#E7F2FF] shadow-2xl">
          <img src={details} className="mb-10" alt="" />
          <h4 className="text-3xl font-semibold mb-6">Details info</h4>
          <p className="text-lg text-lightGray mr-8">Free consultation with our trusted doctors and get the best recomendations</p>
        </div>

        <div className="w-[360px] h-[365px] pl-9 pt-12 border rounded-2xl bg-white border-none
                       shadow-[#E7F2FF] shadow-2xl">
          <img src={emergency} className="mb-10" alt="" />
          <h4 className="text-3xl font-semibold mb-6">Emergency care</h4>
          <p className="text-lg text-lightGray mr-8">You can get 24/7 urgent care for yourself or your children and your
          lovely family</p>
        </div>

        <div className="w-[360px] h-[365px] pl-9 pt-12 border rounded-2xl bg-white border-none
                       shadow-[#E7F2FF] shadow-2xl">
          <img src={tracking} className="mb-10" alt="" />
          <h4 className="text-3xl font-semibold mb-6">Tracking</h4>
          <p className="text-lg text-lightGray mr-8">Track and save your medical history and health data </p>
        </div>
      </div>

      <div className="text-center mt-16">
        <button className="w-52 h-14 border font-bold text-lg border-blue text-blue rounded-[35px]">Learn more</button>
      </div>
    </section>
  );
};

export default Services;
