import React from "react";
import { useStateContext } from "../context";
import { CustomButtom } from "../components";
import CharityPhotos from "../components/HomeComponents/CharityPhotos";
import "../index.css";

export default function Home() {
  const { address, connect, disconnect } = useStateContext();
  const title = "Empowering  Charity";
  const titles = title.split("");

  const text_one =
    "Join us on a journey to build a brighter future for communities around the world. Empowering Charity leverages cutting-edge blockchain technology to ensure transparency and trust in every donation, empowering donors to see the real impact of their generosity.";
  const words = text_one.split(" ");

  return (
    <div className="min-h-screen flex flex-col ">
      <div className="home-bar sticky flex flex-row w-full bg-[var(--home-bg-color)] h-[80px] rounded-[10px] justify-between items-center px-[20px]">
        <div className="text-4xl font-bold text-[var(--text-color)] flex justify-start items-center">
          <div className="mt-10">
            <p className="text-xl mb-10 font-epilogue">
              {titles.map((word, index) => (
                <span
                  key={index}
                  className="fade-in"
                  style={{
                    animation: `fadeIn 0.5s ease ${index * 0.1}s forwards`,
                  }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="flex flex-row ml-auto">
          <CustomButtom
            btnType="button"
            title={address ? "Disconnect the wallet" : "Connect to Wallet"}
            styles={
              address ? "bg-[#e74c3c] px-6 py-3" : "bg-[#3498db] px-6 py-3"
            }
            handleClick={() => {
              if (address) disconnect();
              else connect();
            }}
          />
        </div>
      </div>

      <div className="mt-10">
        <p className="text-xl text-[var(--text-color)] mb-10 font-epilogue">
          {words.map((word, index) => (
            <span
              key={index}
              className="fade-in"
              style={{ animation: `fadeIn 0.5s ease ${index * 0.1}s forwards` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>
      </div>

      <div className="flex cursor-pointer justify-center">
        <img
          src="/src/Charities_photos/image_big_1.png"
          className="object-contain w-1/2 h-1/2 rounded-[20px]"
        />
      </div>

      <main className="w-full flex flex-col items-start p-6">
        <CharityPhotos />
      </main>
    </div>
  );
}
