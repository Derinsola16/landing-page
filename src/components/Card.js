import logo from "../assets/amzlogo.svg";
import { ReactComponent as IconInfo } from "../assets/info.svg";
import { ReactComponent as IconArrow } from "../assets/arrow.svg";

const Card = () => {
  return (
    <div className="bg-white border-2 boder-[#EBEFF5] p-5 rounded-lg w-[310px]">
      <div className="rounded-full bg-[#F5F5F5] text-[#6F6F80] px-5 py-2 font-semibold mb-6 w-28">
        Gift Card
      </div>
      <div className="border-b border-[#F5F7FA]">
        <div className="flex items-center mb-4">
          <img src={logo} alt="logo" className="rounded object-cover mr-2" />
          <p className="font-semibold text-base text-[#000429]">
            Amazon Gift Card
          </p>
        </div>
        <p className="font-normal text-[#8A91A8] text-xs leading-6 tracking-[-0.02em] mb-5">
          Amazon Gift Card is a global fashion destination for 20-somethings,
          selling all the freshest styles complemented by exclusive content....
        </p>
      </div>
      <p className="text-[#8A91A8] text-xs flex items-center mt-4 font-normal">
        <IconInfo className="mr-2" />
        This card has a fee of $ 0.99
      </p>
      <button className="mt-6 w-full text-center inline-flex items-center text-white bg-[#0069E0] font-medium rounded px-16 py-2.5 focus:outline-none">
        Purchase card <IconArrow className="ml-4" stroke="#ffffff" />
      </button>
    </div>
  );
};

export default Card;
