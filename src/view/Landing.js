import background from "../assets/background.png";
import card from "../assets/card.png";
import amazon from "../assets/amazon.png";
import line from "../assets/line.svg";
import line2 from "../assets/line2.svg";
import Card from "../components/Card";
import InfoCard from "../components/InfoCard";

const Landing = () => {
  const items = [
    "Ecommerce",
    "Popular",
    "Airtime & Electricity",
    "Gaming",
    "Electronics",
    "Clothes and Fashion",
    "Jewelry & Watches",
    "Home and furnitures",
    "Sports & Entertainment",
  ];
  const num = 6;
  const image = {
    backgroundImage: `url(${background})`,
    height: "682px",
    marginTop: "65px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const downImage = {
    backgroundImage: `url(${background})`,
    height: "460px",
    marginTop: "65px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxShadow: "0px 12px 0px #5CA5FF;",
  };
  const shadow = {
    boxShadow: "4px 4px 0px #5CA5FF",
  };
  return (
    <>
      <div className="lg:px-16">
        <div className="relative">
          <div
            style={image}
            className="bg-[#0179ff]/100 md:rounded-3xl rounded-md"
          ></div>
          <img
            src={amazon}
            alt="img"
            className="absolute bottom-44 md:bottom-3 left-0"
          />
          <img
            src={card}
            alt="img"
            className="absolute bottom-0 md:bottom-3 right-0"
          />
          <div className="absolute top-20 md:top-[45%] md:left-[50%] md:-translate-x-60 md:-translate-y-40">
            <p className="font-extrabold text-center leading-tight lg:text-6xl md:text-3xl text-xl text-white">
              Eliminate bank restrictions with our unique gift cards.
            </p>
            <p className="text-sm text-center mx-auto mt-5 text-white w-72">
              Shop on Amazon, ASOS, 1800 flowers, Whilst paying for utilities
              and even more.
            </p>
            <button
              style={shadow}
              className="rounded font-semibold text-sm mx-auto mt-5 flex bg-white text-[#0069E0] p-4 shadow-[#5CA5FF]"
            >
              Start Shopping
            </button>
          </div>
          <img
            src={line}
            alt="img"
            className="absolute hidden xl:block md:top-36 md:left-[29rem]"
          />
          <img
            src={line2}
            alt="img"
            className="absolute hidden xl:block md:top-40 md:right-[17.5rem]"
          />
        </div>
      </div>

      <div className="mt-16 lg:px-16 px-4">
        <p className="font-bold text-base">Latest Arrivals</p>
        <div className="flex flex-co mt-12">
          <div className="bg-[#F5F7FA] p-8 rounded-lg w-72 h-5/6 mr-5">
            <div className="flex justify-between">
              <p className="font-bold">Filters</p>
              <p className="text-[#0069E0] font-semibold">Reset</p>
            </div>
            <p className="font-bold mt-10">Categories</p>
            {items.map((item) => (
              <div class="flex items-center mb-2 p-1 mt-6">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4"
                />
                <label
                  for="default-checkbox"
                  class="ml-4 text-sm font-semibold text-[#8A91A8]"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
          <div className="bg-[#F5F7FA] p-4 rounded grid gap-2 grid-cols-3 overflow-x-scroll">
            {[...Array(num)].map((item) => (
              <div key={item} className="">
                <div className="mb-4 p-4 ">
                  <Card />
                  <Card />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:px-16 px-4 mt-16">
        <p className="font-bold w-full text-center md:text-5xl text-xl lg:w-1/2 md:mx-auto mb-10">
          “Hear what happy customers are saying about Digift”
        </p>

        <div className="md:flex flex-col lg:flex-row grid md:gap-6 gap-2 w-full">
          <InfoCard
            className="grow"
            text="“Digift stood out from the crowd with an impressive team and even more
        impressive mission: harnessing the power of giftcards enterprises to
        support people who are restricted by banks in Nigeria.”"
          />
          <InfoCard text="“Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria. Digift stood out from the crowd with an impressive team and even more impressive mission ”" />
          <InfoCard
            text="“Digift stood out from the crowd with an impressive team and even more
            impressive mission: harnessing the power of giftcards enterprises to
            support people who are restricted by banks in Nigeria.”"
          />
        </div>
      </div>

      <div className="md:px-16 px-4 mt-16">
        <div className="relative">
          <div
            style={downImage}
            className="rounded-3xl bg-[#0073F5]"
          ></div>
          <div className="absolute top-20 md:top-[45%] md:right-[60%] md:translate-x-32 md:-translate-y-20">
            <p className="font-bold text-left leading-tight lg:text-6xl md:text-3xl text-xl text-white">
              Create happiness from buying a gift card today.
            </p>
          </div>
          <img
            src={line}
            alt="img"
            className="absolute hidden xl:block md:bottom-[9rem] md:left-[28rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
