import dashboard from "../assets/dashboard.png";
import background from "../assets/background.png";
import image from "../assets/image.png";
import code from "../assets/code.png";
import { ReactComponent as Iconstar } from "../assets/star.svg";
import { ReactComponent as Iconsmallstar } from "../assets/smallstar.svg";
import { ReactComponent as Iconcurve } from "../assets/curve.svg";
import { ReactComponent as Iconcurve2 } from "../assets/curve2.svg";
import { ReactComponent as Iconright } from "../assets/right.svg";
import { ReactComponent as Iconwhite } from "../assets/white.svg";

function Home() {
  const bgimage = {
    backgroundImage: `url(${background})`,
    height: "682px",
    marginTop: "65px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="py-10">
      <div className="lg:px-20 px-5 flex items-center justify-between flex-col lg:flex-row">
        <p className="font-bold md:text-6xl text-3xl leading-tight xl:w-2/4 w-full">
          Expand the giftcard industry,{" "}
          <span className="text-[#0179FF]">one card</span>
          <br />
          <span className="flex">
            at a time! <Iconstar className="md:flex-shrink-0 ml-4 mt-2" />
          </span>
        </p>

        <div className="mt-3 lg:mt-0">
          <img src={dashboard} alt="dashboard" className="relative object-cover " />
          <Iconcurve className="absolute hidden xl:block lg:right-[44.5%] lg:top-[29%]" />
          <Iconcurve2 className="absolute hidden xl:block lg:right-[4.3%] lg:top-[27.5%]" />
        </div>
      </div>

      <div className="md:px-8">
        <div className="relative">
          <div
            style={bgimage}
            className="bg-[#0179ff]/100 md:rounded-3xl rounded-md"
          ></div>
          <div className="absolute top-44 md:top-80 md:left-[27rem] lg:top-[45%] lg:left-[50%] md:-translate-x-72 md:-translate-y-40">
            <p className="font-semibold text-sm text-white items-center mx-auto justify-center mb-8 flex">
              <Iconsmallstar className="mr-2" />
              Digift helps businesses
            </p>
            <p className="font-extrabold text-center leading-tight lg:text-6xl md:text-3xl text-xl text-white">
              Why do fast-growing merchant and vendor choose us?
            </p>
            <p className="text-sm font-semibold text-center mx-auto mt-8 text-white md:w-[26rem]">
              Whether you’re a business looking to sell your own gift cards, a
              company looking for bulk gift card solution, digift is for you.
            </p>
            <button className="rounded font-semibold text-sm mx-auto mt-10 flex underline underline-offset-8 text-white ">
              Create an account today
            </button>
          </div>
        </div>
      </div>

      <div className="lg:p-16 p-5 flex flex-col lg:grid grid-cols-2 gap-6">
        {/* flex flex-col md:flex-row gap-6 */}
        <div className="relative">
          <div className="rounded-lg bg-[#C3DDFF] w-full h-[500px] md:h-[628px]"></div>
          <div className="absolute top-20 md:left-10 md:w-[50%] xl:left-8 xl:w-[66%] w-full px-4">
            <p className="font-bold lg:text-5xl text-3xl md:text-4xl">
              Designed for today’s
              <span className="text-[#0179FF]"> ambitious</span> businesses.
            </p>
            <p className="font-semibold text-xs md:text-sm xl:w-[97%] mt-4">
              We give merchants the ability to sell digital Gift Cards for their
              business quickly, intuitively and affordably.
            </p>
          </div>
          <img
            src={image}
            alt="pic"
            className="absolute bottom-0 md:left-[9rem] xl:left-[4rem] lg:hidden xl:block object-cover"
          />
        </div>
        <div className="relative">
          <div className="rounded-lg bg-[#C3DDFF] w-full h-[500px] md:h-[628px]"></div>
          <div className="absolute top-20 md:left-10 md:w-[50%] xl:left-8 xl:w-[66%] w-full px-4">
            <p className="font-bold lg:text-5xl text-3xl md:text-4xl">
              Features that <span className="text-[#0179FF]"> empower</span>{" "}
              your business
            </p>
            <p className="font-semibold text-xs md:text-sm xl:w-[97%] mt-4">
              Automate your sales and marketing so you can focus on other areas
              of your business.
            </p>
          </div>
          <img
            src={image}
            alt="pic"
            className="absolute bottom-0 md:left-[9rem] xl:left-[4rem] lg:hidden xl:block object-cover"
          />
        </div>
      </div>

      <div className="lg:px-36 py-16 p-5 flex flex-col lg:flex-row">
        <div>
          <p className="font-bold text-4xl lg:w-[45%] leading-tight">
            Our API is built to be as{" "}
            <span className="text-[#0179FF]"> lightweight</span> and efficient
            as possible.
          </p>
          <p className="text-xs text-[#8A91A8] mt-6 font-semibold">
            We offer client and server libraries in everything from our API
          </p>

          <div className="flex mt-6 mb-6">
            <button
              type="button"
              className="text-white flex items-center bg-[#0078FF] hover:bg-blue-800 focus:ring-2 focus:outline-none font-medium rounded text-sm p-2 text-center mr-4"
            >
              Get started
              <Iconwhite className="ml-4 text-white" />
            </button>
            <button
              type="button"
              className="text-[#8A91A8] flex items-center bg-white border border-[#8A91A8]/10 focus:ring-2 focus:outline-none font-medium rounded text-sm p-2 text-center mr-3 md:mr-0 "
            >
              Sign In
              <Iconright className="ml-4" />
            </button>
          </div>
        </div>
        <img src={code} alt="code" className="object-cover lg:h-96" />
      </div>
    </div>
  );
}

export default Home;
