import profile from "../assets/profile.png";

function InfoCard(props) {
  return (
    <div className="border-2 border-[#EBEFF5] md:p-10 p-4 lg:w-1/2 w-full">
      <p className="text-base font-normal leading-8 text-[#8A91A8] mb-20">
        {props.text}
      </p>
      <div className="flex items-center">
        <img src={profile} alt="profile" className="rounded mr-4" />
        <span>
        <p className="font-bold text-base leading-5">Osemwengie Benjamin</p>
        <p className="text-sm text-[#68718D] font-normal">Product Designer at Digift</p>
        </span>
      </div>
    </div>
  );
}

export default InfoCard;
