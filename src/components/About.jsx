import arrowRight from "../assets/smallArrowRight.png";
import article1 from "../assets/article1.png";
import article2 from "../assets/article2.png";
import article3 from "../assets/article3.png";
import bgArticle from "../assets/bg-article.png";

const About = () => {
  return (
    <section className="mt-56 mb-52">
      <div className="flex justify-center items-center flex-col">
        <h4 className="text-4xl font-semibold ">
          Check out our latest article
        </h4>
        <hr className="w-14 bg-black h-[2px] mt-10 border-none rounded-3xl mb-20" />
      </div>

      <div className="flex justify-center gap-9 mb-[72px]">
        <div className="w-[350px] h-[512px] shadow-[#E7F2FF] shadow-2xl r rounded-2xl ">
          <img src={article1} className="rounded-t-2xl" alt="" />
          <h5 className="text-xl font-bold mt-6 mb-6 ml-8 mr-16">
            Disease detection, check up in the laboratory
          </h5>
          <p className="text-lightGray mb-10 ml-8 mr-16">
            In this case, the role of the health laboratory is very important to
            do a disease detection...
          </p>
          <div className="flex items-center gap-4 ml-8 mr-16">
            <a href="" className="text-blue font-semibold">
              Read more
            </a>
            <img src={arrowRight} alt="" />
          </div>
        </div>

        <div className="w-[350px] h-[512px] shadow-[#EDF5FF] shadow-2xl rounded-2xl ">
          <img src={article2} className="rounded-t-2xl" alt="" />
          <h5 className="text-xl font-bold mt-6 mb-6 ml-8 mr-16">
            Herbal medicines that are safe for consumption
          </h5>
          <p className="text-lightGray mb-10 ml-8 mr-16">
            Herbal medicine is very widely used at this time because of its very
            good for your health...
          </p>
          <div className="flex items-center gap-4 ml-8 mr-16">
            <a href="" className="text-blue font-semibold">
              Read more
            </a>
            <img src={arrowRight} alt="" />
          </div>
        </div>

        <div className="w-[350px] h-[512px] shadow-[#E7F2FF] shadow-2xl r rounded-2xl ">
          <img src={article3} className="rounded-t-2xl" alt="" />
          <h5 className="text-xl font-bold mt-6 mb-6 ml-8 mr-16">
            Natural care for healthy facial skin
          </h5>
          <p className="text-lightGray mb-10 ml-8 mr-16">
            A healthy lifestyle should start from now and also for your skin
            health. There are some...
          </p>
          <div className="flex items-center gap-4 ml-8 mr-16">
            <a href="" className="text-blue font-semibold">
              Read more
            </a>
            <img src={arrowRight} alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="w-52 h-14 border font-bold text-lg border-blue text-blue rounded-[35px]">
          View all
        </button>
      </div>

      <div className="absolute -z-10 right-0 top-[4800px] opacity-60">
        <img src={bgArticle} alt="" />
      </div>
    </section>
  );
};

export default About;
