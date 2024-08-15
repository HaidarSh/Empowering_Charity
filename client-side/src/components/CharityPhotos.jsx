import React from "react";
import CharityPhotosStyle from "./CharityPhotosStyle";
import { Link } from "react-router-dom";
import "../index.css";

export default function CharityPhotos() {
  const text_two =
    "Your generosity brings hope, lighting the path to a brighter future for those in need.";
  const words_two = text_two.split(" ");
  const text_three = "Empower Gaza's Young Hearts";
  const words_three = text_three.split(" ");
  const text_four =
    "With your generous donation, we can empower the children of Gaza, providing them with the education, healthcare, and opportunities they need to thrive.";
  const words_four = text_four.split(" ");
  const text_five =
    "At Empowering Charity, we believe that every act of kindness has the potential to transform lives. Our mission is to connect generous hearts with meaningful causes, creating a network of support that brings hope, dignity, and opportunities to those who need it most.";
  const words_five = text_five.split(" ");
  const text_six =
    "Your donation helps protect our planet and ensure a healthier, sustainable future for generations to come.";
  const words_six = text_six.split(" ");
  const text_seven =
    "Join us in making a lasting impact on our environment. Donate today!";
  const words_seven = text_seven.split(" ");

  return (
    <div className="flex flex-col mt-[20px] gap-[26px]">
      <div className="flex flex-col justify-start">
        <div className="mt-10 mb-10">
          <p className="text-xl text-[var(--text-color)] font-epilogue">
            {words_two.map((word, index) => (
              <span
                key={index}
                className="fade-in"
                style={{ animation: `fadeIn 1s ease ${index * 0.2}s forwards` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </p>
        </div>

        <div className="flex flex-row gap-6 ">
          <CharityPhotosStyle imageSRC="/Charities_photos/first-1.jpeg" />
          <CharityPhotosStyle imageSRC="/Charities_photos/first-2.jpeg" />
          <CharityPhotosStyle imageSRC="/Charities_photos/first-3.jpeg" />
        </div>
      </div>
      <hr className="border-t-2 border-[#3498db]" />
      <div>
        <div className="mt-10">
          <p className="text-xl text-[var(--text-color)] mb-10 font-epilogue font-semibold">
            {words_three.map((word, index) => (
              <span
                key={index}
                className="fade-in"
                style={{
                  animation: `fadeIn 1.5s ease ${index * 0.3}s forwards`,
                }}
              >
                {word}&nbsp;
              </span>
            ))}
          </p>
        </div>
        <div className="mt-10">
          <p className="text-xl text-[var(--text-color)] mb-10 font-epilogue">
            {words_four.map((word, index) => (
              <span
                key={index}
                className="fade-in"
                style={{ animation: `fadeIn 2s ease ${index * 0.2}s forwards` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          <CharityPhotosStyle imageSRC="/Charities_photos/second-1.jpeg" />
          <CharityPhotosStyle imageSRC="/Charities_photos/second-2.jpeg" />
          <CharityPhotosStyle imageSRC="/Charities_photos/second-3.jpeg" />

          <CharityPhotosStyle imageSRC="/Charities_photos/second-4.jpeg" />
          <CharityPhotosStyle imageSRC="/Charities_photos/second-5.jpeg" />
          <CharityPhotosStyle imageSRC="/Charities_photos/second-6.jpeg" />
        </div>
      </div>
      <hr className="border-t-2 border-[#3498db]" />
      <div className=" flex flex-col cursor-pointer items-center">
        <div className="mt-10">
          <p className="text-xl text-[var(--text-color)] mb-10 font-epilogue">
            {words_five.map((word, index) => (
              <span
                key={index}
                className="fade-in"
                style={{
                  animation: `fadeIn 1.5s ease ${index * 0.2}s forwards`,
                }}
              >
                {word}&nbsp;
              </span>
            ))}
          </p>
        </div>
        <h1 className="text-xl bg-[var(--text-color)] mb-10"></h1>
        <img
          src="../../Charities_photos/image_big_2.png"
          className="object-contain w-1/2 h-1/2 rounded-[20px]"
        />
      </div>

      <div>
        <div className="mt-10">
          <p className="text-xl text-[var(--text-color)] mb-10 font-epilogue">
            {words_six.map((word, index) => (
              <span
                key={index}
                className="fade-in"
                style={{ animation: `fadeIn 2s ease ${index * 0.5}s forwards` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </p>
        </div>
        <h1 className="text-xl text-[var(--text-color)] mb-10"></h1>
        <div className="flex flex-wrap gap-6">
          <CharityPhotosStyle imageSRC="/Charities_photos/third-1.jpeg" />
          <CharityPhotosStyle imageSRC="/Charities_photos/third-2.jpeg" />
          <CharityPhotosStyle imageSRC="/Charities_photos/third-3.jpeg" />
        </div>
      </div>

      <hr className="border-t-2 border-[#3498db]" />

      <div className="flex flex-col items-center">
        <div className="mt-10">
          <p className="text-xl text-[var(--text-color)] mb-10 font-epilogue">
            {words_seven.map((word, index) => (
              <span
                key={index}
                className="fade-in"
                style={{ animation: `fadeIn 2s ease ${index * 0.8}s forwards` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </p>
        </div>
        <Link to="/ViewActiveCharity">
          <div className="bg-[#3498db] px-6 py-3 rounded-[10px] text-2xl font-semibold text-[var(--text-color)] flex justify-center items-center">
            Donate Now!
          </div>
        </Link>
      </div>
    </div>
  );
}
