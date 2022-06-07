import logo from "../assets/logo.svg";
import { ReactComponent as IconMenu } from "../assets/started.svg";
import { ReactComponent as IconSearch } from "../assets/search.svg";
import { ReactComponent as IconArrow } from "../assets/arrow.svg";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded z-50 sticky top-0">
        <div className="flex flex-wrap justify-between px-4 items-center mx-auto">
          <Link to="/home" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <i className="border-l border-[#F5F7FA] py-3 ml-7"></i>
          </Link>

          <div className="flex items-center md:order-2">
            <i className="border-l border-[#F5F7FA] py-3 mr-7 md:block hidden"></i>
            <p className="text-[#8A91A8] font-normal text-sm mr-7">Login</p>
            <button
              type="button"
              className="text-white md:flex hidden items-center bg-[#0078FF] hover:bg-blue-800 focus:ring-2 focus:outline-none font-medium rounded text-sm p-2 pl-4 text-center mr-3 md:mr-0 "
            >
              Get started
              <IconMenu className="ml-4" />
            </button>
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 md:space-x-8 ">
            <div>
              <button
                id="dropdownRightButton"
                data-dropdown-toggle="dropdownRight"
                data-dropdown-placement="right"
                className="mr-8 mb-3 md:mb-0 text-[#8A91A8CC]/80  font-normal text-sm text-center inline-flex items-center"
                type="button"
              >
                Personal
                <IconArrow stroke="#8A91A8CC" className="ml-1" />
              </button>
              <button
                id="dropdownRightButton"
                data-dropdown-toggle="dropdownRight"
                data-dropdown-placement="right"
                className="mb-3 md:mb-0 text-[#8A91A8CC]/80  font-normal text-sm text-center inline-flex items-center"
                type="button"
              >
                Business
                <IconArrow stroke="#8A91A8CC" className="ml-1" />
              </button>
            </div>

            <div>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <IconSearch />
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block p-2 pl-8 w-96 text-[#8A91A8] bg-[#F3F4F7] rounded sm:text-sm focus:ring-0 focus:outline-none"
                  placeholder="Find cards anywhere"
                />
              </div>
            </div>

            <label
              for="large-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                disab
                id="large-toggle"
                className="sr-only peer"
              />

              <div className="w-20 h-10 bg-[#F3F4F7] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-9 after:w-9"></div>
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
