import testimonialBg from "../assets/testimonials.png";
import testimonialPhoto from "../assets/testimonial-photo.png";
import circle1 from "../assets/circles.png"
import circle2 from "../assets/circles2.png"
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'

const Testominials = () => {
  return (
    <div>
      <div className="flex justify-center mt-64">
        <img className="relative" src={testimonialBg} alt="" />

        <div className="absolute flex flex-col items-center">
          <h4 className="text-4xl font-semibold text-white mt-16">
            What our customer are saying
          </h4>
          <hr className="w-14 bg-white h-[2px] border-none rounded-3xl mb-10 mt-9" />
        </div>

        <div className="absolute left-[340px] -z-10 mt-64">
          <img src={circle1} alt="" />
        </div>

        <div className="absolute right-[340px] -mt-4">
          <img src={circle2} alt="" />
        </div>

        
        <div className="absolute flex gap-28 mt-56">
          <div className="flex">
            <img src={testimonialPhoto} className="mr-7" alt="" />
            <div className="flex flex-col justify-center">
              <span className="text-2xl text-white font-semibold">Edward Newgate</span>
              <span className="text-white text-lg font-light">Founder Circle</span>
            </div>
          </div>

          <div className="max-w-[420px]">
            <p className="text-white text-lg font-light text-pretty"> 
              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 items-center gap-24">
        <img src={arrowLeft} className="cursor-pointer" alt="arrow left" />
        <div className="flex gap-4">
        <span className="w-[10px] h-[10px] bg-blue rounded-full"></span>
        <span className="w-[10px] h-[10px] bg-[#CEE1FB] rounded-full"></span>
        <span className="w-[10px] h-[10px] bg-[#CEE1FB] rounded-full"></span>
        <span className="w-[10px] h-[10px] bg-[#CEE1FB] rounded-full"></span>
        </div>
        
        <img src={arrowRight} className="cursor-pointer" alt="arrow right" />
      </div>
    </div>
  );
};

export default Testominials;
