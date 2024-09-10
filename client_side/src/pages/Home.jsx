import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context";
import { CustomButtom } from "../components";
import CharityPhotosStyleSix from "../components/HomeComponents/CharityPhotosStyleSix";
import CharityPhotosStyleThree from "../components/HomeComponents/CharityPhotosStyleThree";
import {
  coverphoto,
  first,
  second,
  third,
  fourth,
  fifth,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
} from "../assets";

export default function Home() {
  const { address, connect, disconnect } = useStateContext();

  return (
    <div className="flex flex-col container-custom-width">
      <div className="home-bar flex flex-row w-full bg-[var(--home-bg-color)] h-[80px] rounded-[10px] justify-between items-center pr-[5px] pl-[15px]">
        <div className="font-bold text-[var(--text-color-white)] flex justify-center items-center">
          <div className="mt-10 lg:mt-5">
            <p className="responsive-text-title mb-10 lg:mb-6 font-epilogue">
              Empowering Charity
            </p>
          </div>
        </div>
        <div className="flex flex-row ml-auto lg:w-auto">
          <CustomButtom
            btnType="button"
            title={address ? "Disconnect wallet" : "Connect wallet"}
            styles={address ? "bg-[#ed732d]" : "bg-[#eda479]"}
            handleClick={() => {
              if (address) disconnect();
              else connect();
            }}
          />
        </div>
      </div>
      <div className="mt-5 home-firstbox flex justify-between gap-2">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center">
            <p className="responsive-text-firstparagraph-text-1 text-[var(--text-color)] flex justify-center font-epilogue">
              ever wonder which nonprofit oragnizations
            </p>
            <p className="responsive-text-firstparagraph text-[var(--text-color)] font-epilogue uppercase">
              Charity
            </p>
            <p className="responsive-text-firstparagraph-text-2 text-[var(--text-color)] font-epilogue">
              We Need Your Help to Be There for Those Who Need it Most
            </p>
          </div>
          <div className="home-firstbox-secondcontainer mt-10 flex justify-center">
            <button>
              <Link to="/Empowering_Charity/View_Active_Charity">
                <div className="custom-buttom custom-buttom-donate bg-[#A18167] rounded-[10px] px-4 py-3 text-2xl flex justify-center items-center">
                  <h1 className="custom-buttom-responsive-text font-epilogue font-semibold text-[25px] text-[var(--text-color-white)]">
                    Donate Now !
                  </h1>
                </div>
              </Link>
            </button>
          </div>
        </div>
        <div>
          <img
            src={coverphoto}
            className="image-cover rounded-[5px]"
            alt="coverphoto"
          />
        </div>
      </div>

      <div className="flex cursor-pointer justify-center mt-10 lg:mt-10"></div>

      <hr className="border-t-2 border-[#A18167]" />

      <div className="flex flex-col mt-[20px] gap-[26px]">
        <div className="flex flex-col justify-start">
          <div className="mt-10 mb-10 flex justify-center items-center">
            <p className="responsive-text text-center text-xl text-[var(--text-color)] font-epilogue">
              Your generosity brings hope, lighting the path to a brighter
              future for those in need.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <div className="charityphoto charityphoto-medium flex w-full md:w-1/2 lg:w-1/2 xl:w-1/3 items-center justify-center">
            <CharityPhotosStyleThree imageSRC={first} alt="first" />
          </div>
          <div className="charityphoto charityphoto-medium flex w-full md:w-1/2 lg:w-1/2 xl:w-1/3 items-center justify-center">
            <CharityPhotosStyleThree imageSRC={second} alt="second" />
          </div>
          <div className="charityphoto charityphoto-medium flex w-full md:w-1/2 lg:w-1/2 xl:w-1/3 items-center justify-center">
            <CharityPhotosStyleThree imageSRC={third} alt="third" />
          </div>
        </div>

        <hr className="border-t-2 border-[#A18167]" />
        <div>
          <div className="mt-10 flex justify-center items-center">
            <p className="responsive-text-title text-center text-[var(--text-color)] mb-10 font-epilogue font-semibold">
              Empower Gaza's Young Hearts
            </p>
          </div>
          <div>
            <p className="responsive-text text-center text-xl text-[var(--text-color)] mb-10 font-epilogue flex justify-center items-center">
              With your generous donation, we can empower the children of Gaza,
              providing them with the education, healthcare, and opportunities
              they need to thrive.
            </p>
          </div>

          <div className="photo-grid flex justify-center items-center">
            <div className="photo-item flex justify-center items-center">
              <CharityPhotosStyleSix imageSRC={fourth} alt="fourth" />
            </div>
            <div className="photo-item flex justify-center items-center">
              <CharityPhotosStyleSix imageSRC={fifth} alt="fifth" />
            </div>
            <div className="photo-item flex justify-center items-center">
              <CharityPhotosStyleSix imageSRC={six} alt="six" />
            </div>
            <div className="photo-item flex justify-center items-center">
              <CharityPhotosStyleSix imageSRC={seven} alt="seven" />
            </div>
            <div className="photo-item flex justify-center items-center">
              <CharityPhotosStyleSix imageSRC={eight} alt="eight" />
            </div>
            <div className="photo-item flex justify-center items-center">
              <CharityPhotosStyleSix imageSRC={nine} alt="nine" />
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-[#A18167]" />
        <div className="mt-10 flex justify-center items-center">
          <p className="responsive-text text-center text-xl text-[var(--text-color)] mb-10 font-epilogue">
            At Empowering Charity, we believe that every act of kindness has the
            potential to transform lives. Our mission is to connect generous
            hearts with meaningful causes, creating a network of support that
            brings hope, dignity, and opportunities to those who need it most.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <div className="charityphoto charityphoto-medium flex w-full md:w-1/2 lg:w-1/2 xl:w-1/3 items-center justify-center">
            <CharityPhotosStyleThree imageSRC={ten} alt="ten" />
          </div>
          <div className="charityphoto charityphoto-medium flex w-full md:w-1/2 lg:w-1/2 xl:w-1/3 items-center justify-center">
            <CharityPhotosStyleThree imageSRC={eleven} alt="eleven" />
          </div>
        </div>

        <hr className="border-t-2 border-[#A18167]" />
        <div>
          <div className="mt-10 flex justify-center items-center">
            <p className="responsive-text text-center text-xl text-[var(--text-color)] mb-10 font-epilogue">
              Your donation helps protect our planet and ensure a healthier,
              sustainable future for generations to come.
            </p>
          </div>
          <h1 className="text-xl text-[var(--text-color)] mb-10"></h1>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="charityphoto charityphoto-medium flex w-full md:w-1/2 lg:w-1/2 xl:w-1/3 items-center justify-center">
              <CharityPhotosStyleThree imageSRC={twelve} alt="twelve" />
            </div>
            <div className="charityphoto charityphoto-medium flex w-full md:w-1/2 lg:w-1/2 xl:w-1/3 items-center justify-center">
              <CharityPhotosStyleThree imageSRC={thirteen} alt="thirteen" />
            </div>
            <div className="charityphoto charityphoto-medium flex w-full md:w-1/2 lg:w-1/2 xl:w-1/3 items-center justify-center">
              <CharityPhotosStyleThree imageSRC={fourteen} alt="fourteen" />
            </div>
          </div>
        </div>

        <hr className="border-t-2 border-[#A18167]" />

        <div className="flex flex-col items-center">
          <div className="mt-10">
            <p className="responsive-text text-center text-xl text-[var(--text-color)] mb-10 font-epilogue">
              Join us in making a lasting impact on our environment. Donate
              today!
            </p>
          </div>
          <Link to="/Empowering_Charity/View_Active_Charity">
            <div className="custom-buttom custom-buttom-donate bg-[#A18167] rounded-[10px] px-4 py-3 text-2xl flex justify-center items-center">
              <h1 className="custom-buttom-responsive-text font-epilogue font-semibold text-[25px] text-[var(--text-color-white)]">
                Donate Now !
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
