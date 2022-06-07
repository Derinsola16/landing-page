import logo from "../assets/smallLogo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as IconIG } from "../assets/IG.svg";
import { ReactComponent as IconFB } from "../assets/FB.svg";
import { ReactComponent as Icontwi } from "../assets/twi.svg";
import { ReactComponent as Iconlinked } from "../assets/linked.svg";
import { ReactComponent as Iconpoly } from "../assets/poly.svg";
import { ReactComponent as Iconright } from "../assets/right.svg";

function Footer() {
  return (
    <div className="mt-10 lg:px-24 pb-12 px-4">
      <div className="border-t border-b border-[#F5F7FA] mb-16">
        <div className="mt-16 mb-16 flex flex-col md:flex-row justify-between ">
          <div className="grow mb-4">
            <Link to="/" className="flex items-center">
              <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <i className="border-l border-[#F5F7FA] py-3 ml-7"></i>
            </Link>
            <p className="text-[#000429] font-normal text-sm">
              Creating Happiness One Giftcard at a Time.
            </p>
            <div className="flex mt-6">
              <IconIG className="mr-2" />
              <IconFB className="mr-2" />
              <Icontwi className="mr-2" />
              <Iconlinked />
            </div>
          </div>

          <div className="grow mb-4">
            <p className="text-[#000429] text-sm font-bold mb-2">
              Contact us
            </p>
            <p className="text-sm text-[#8A91A8] font-normal">
              hello@digiftng.com
            </p>

            <p className="text-[#000429] text-sm font-bold mb-2 mt-4">Office</p>
            <p className="text-sm text-[#8A91A8] font-normal">
              226, Awolowo road, Ikoyi, Lagos State, Nigeria
            </p>
            <div className="mt-6 flex">
              <p className="flex items-center text-sm text-[#8A91A8] font-normal mr-4">
                Our privacy policy <Iconright className="ml-2 hidden md:block" />
              </p>
              <p className="flex items-center text-sm text-[#8A91A8] font-normal">
                Terms and Condition <Iconright className="ml-2 hidden md:block" />
              </p>
            </div>
          </div>

          <div className="flex justify-between grow">
            <div>
              <p className="font-semibold text-sm text-[#000429] mb-6">
                Company
              </p>
              <p className="text-sm text-[#8A91A8] font-normal mb-6">Careers</p>
              <p className="text-sm text-[#8A91A8] font-normal">FAQ</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-[#000429] mb-6">
                Products
              </p>
              <p className="text-sm text-[#8A91A8] font-normal mb-6">
                Personal
              </p>
              <p className="text-sm text-[#8A91A8] font-normal mb-6">
                Business
              </p>
              <p className="text-sm text-[#8A91A8] font-normal">Vendor</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-[#000429] mb-6">
                Contact
              </p>
              <p className="text-sm text-[#8A91A8] font-normal mb-6">
                Instagram
              </p>
              <p className="text-sm text-[#8A91A8] font-normal mb-6">Twitter</p>
              <p className="text-sm text-[#8A91A8] font-normal mb-6">
                LinkedIn
              </p>
              <p className="text-sm text-[#8A91A8] font-normal">Facebook</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Iconpoly className="mr-6 flex-shrink-0 hidden lg:block" />
        <p className="text-[#8A91A8] font-normal text-sm">
          The website www.digiftng.com is owned and operated by Blinksky Nigeria
          Limited, a company duly registered under the Laws of the Federal
          Republic of Nigeria with RC Number: 1656204. Trademark to all logos of
          Giftcards are owned by their respective brands and Blinksky Nigeria
          Limited doesn’t claim ownership of these trademarks. All Giftcards
          dominated in USD are provided in conjunction with BlinkSky Inc. Users
          must have valid US account and in some cases a valid US address before
          purchasing.
        </p>
      </div>
      <p className="text-[#8A91A8] font-normal text-sm mt-8">
        Copyright © 2022 Blinksky Nigeria Limited
      </p>
    </div>
  );
}

export default Footer;
