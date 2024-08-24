import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context";
import { CustomButtom } from "../components";
import CharityPhotosStyle from "../components/HomeComponents/CharityPhotosStyle";

export default function Home() {
  const { address, connect, disconnect } = useStateContext();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="home-bar sticky flex flex-row w-full bg-[var(--home-bg-color)] h-[80px] rounded-[10px] justify-between items-center pr-[5px] pl-[15px] ">
        <div className="font-bold text-[var(--text-color)] flex justify-center items-center">
          <div className="mt-10 sm:mt-5">
            <p className="responsive-text-title mb-10 sm:mb-6 font-epilogue">
              Empowering Charity
            </p>
          </div>
        </div>

        <div className="flex flex-row ml-auto sm:w-auto">
          <CustomButtom
            btnType="button"
            title={address ? "Disconnect wallet" : "Connect wallet"}
            styles={address ? "bg-[#e74c3c]" : "bg-[#3498db]"}
            handleClick={() => {
              if (address) disconnect();
              else connect();
            }}
          />
        </div>
      </div>

      <div className="mt-10">
        <p className="responsive-text text-xl text-[var(--text-color)] mb-10 font-epilogue">
          Join us on a journey to build a brighter future for communities around
          the world. Empowering Charity leverages cutting-edge blockchain
          technology to ensure transparency and trust in every donation,
          empowering donors to see the real impact of their generosity.
        </p>
      </div>

      <div className="flex cursor-pointer justify-center mt-10 sm:mt-10">
        <img
          src="/src/Home_Page_Photos/image_big_1.png"
          className="home-bigimage object-contain sm:w-1/2 sm:h-1/2 rounded-[20px]"
          alt="Charity"
        />
      </div>

      <div className="flex flex-col mt-[20px] gap-[26px]">
        <div className="flex flex-col justify-start">
          <div className="mt-10 mb-10">
            <p className="responsive-text text-xl text-[var(--text-color)] font-epilogue">
              Your generosity brings hope, lighting the path to a brighter
              future for those in need.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <CharityPhotosStyle imageSRC="/src/Home_Page_Photos/first-1.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Home_Page_Photos/first-2.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Home_Page_Photos/first-3.jpeg" />
          </div>
        </div>
        <hr className="border-t-2 border-[#3498db]" />
        <div>
          <div className="mt-10 flex ">
            <p className="responsive-text-title-inner text-[var(--text-color)] mb-10 font-epilogue font-semibold">
              Empower Gaza's Young Hearts
            </p>
          </div>
          <div className="">
            <p className="responsive-text text-xl text-[var(--text-color)] mb-10 font-epilogue">
              With your generous donation, we can empower the children of Gaza,
              providing them with the education, healthcare, and opportunities
              they need to thrive.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <CharityPhotosStyle imageSRC="/src/Home_Page_Photos/second-1.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Home_Page_Photos/second-2.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Home_Page_Photos/second-3.jpeg" />

            <CharityPhotosStyle imageSRC="/src/Home_Page_Photos/second-4.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Home_Page_Photos/second-5.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Home_Page_Photos/second-6.jpeg" />
          </div>
        </div>
        <hr className="border-t-2 border-[#3498db]" />
        <div className="flex flex-col cursor-pointer items-center">
          <div className="mt-10">
            <p className="responsive-text text-xl text-[var(--text-color)] mb-10 font-epilogue">
              At Empowering Charity, we believe that every act of kindness has
              the potential to transform lives. Our mission is to connect
              generous hearts with meaningful causes, creating a network of
              support that brings hope, dignity, and opportunities to those who
              need it most.
            </p>
          </div>
          <h1 className="text-xl bg-[var(--text-color)] mb-10"></h1>
          <img
            src="/src/Home_Page_Photos/image_big_2.png"
            className="home-bigimage object-contain w-[80%] h-[80%] sm:w-1/2 sm:h-1/2 rounded-[20px]"
            alt="Charity"
          />
        </div>

        <div>
          <div className="mt-10">
            <p className="responsive-text text-xl text-[var(--text-color)] mb-10 font-epilogue">
              Your donation helps protect our planet and ensure a healthier,
              sustainable future for generations to come.
            </p>
          </div>
          <h1 className="text-xl text-[var(--text-color)] mb-10"></h1>
          <div className="flex flex-wrap gap-6">
            <CharityPhotosStyle imageSRC="/src/Home_Page_Photos/third-1.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Home_Page_Photos/third-2.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Home_Page_Photos/third-3.jpeg" />
          </div>
        </div>

        <hr className="border-t-2 border-[#3498db]" />

        <div className="flex flex-col items-center">
          <div className="mt-10">
            <p className="responsive-text text-xl text-[var(--text-color)] mb-10 font-epilogue">
              Join us in making a lasting impact on our environment. Donate
              today!
            </p>
          </div>
          <Link to="/View_Active_Charity">
            <div className="custom-buttom bg-[#3498db] px-4 py-3 rounded-[10px] text-2xl flex justify-center items-center">
              <h1 className="custom-buttom-responsive-text font-epilogue font-semibold text-[25px] text-[var(--custombuttom-text-color)]">
                Donate Now!
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
