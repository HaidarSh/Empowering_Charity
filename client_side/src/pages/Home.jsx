import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context";
import { CustomButtom, UseIntersectionObserver } from "../components";
import CharityPhotosStyle from "../components/HomeComponents/CharityPhotosStyle";

export default function Home() {
  const { address, connect, disconnect } = useStateContext();

  const title = "Empowering Charity";
  const text_one =
    "Join us on a journey to build a brighter future for communities around the world. Empowering Charity leverages cutting-edge blockchain technology to ensure transparency and trust in every donation, empowering donors to see the real impact of their generosity.";
  const text_two =
    "Your generosity brings hope, lighting the path to a brighter future for those in need.";
  const text_three = "Empower Gaza's Young Hearts";
  const text_four =
    "With your generous donation, we can empower the children of Gaza, providing them with the education, healthcare, and opportunities they need to thrive.";
  const text_five =
    "At Empowering Charity, we believe that every act of kindness has the potential to transform lives. Our mission is to connect generous hearts with meaningful causes, creating a network of support that brings hope, dignity, and opportunities to those who need it most.";
  const text_six =
    "Your donation helps protect our planet and ensure a healthier, sustainable future for generations to come.";
  const text_seven =
    "Join us in making a lasting impact on our environment. Donate today!";
  const donateNowButtom = "Donate Now!";

  const titles = title.split("");
  const words_one = text_one.split(" ");
  const words_two = text_two.split(" ");
  const words_three = text_three.split(" ");
  const words_four = text_four.split(" ");
  const words_five = text_five.split(" ");
  const words_six = text_six.split(" ");
  const words_seven = text_seven.split(" ");
  const words_eight = donateNowButtom.split(" ");

  const [titleRef, isTitleVisible] = UseIntersectionObserver({
    threshold: 0.1,
  });
  const [textOneRef, isTextOneVisible] = UseIntersectionObserver({
    threshold: 0.1,
  });
  const [textTwoRef, isTextTwoVisible] = UseIntersectionObserver({
    threshold: 0.1,
  });
  const [textThreeRef, isTextThreeVisible] = UseIntersectionObserver({
    threshold: 0.1,
  });
  const [textFourRef, isTextFourVisible] = UseIntersectionObserver({
    threshold: 0.1,
  });
  const [textFiveRef, isTextFiveVisible] = UseIntersectionObserver({
    threshold: 0.1,
  });
  const [textSixRef, isTextSixVisible] = UseIntersectionObserver({
    threshold: 0.1,
  });
  const [textSevenRef, isTextSevenVisible] = UseIntersectionObserver({
    threshold: 0.1,
  });
  const [donateNowButtomRef, isdonateNowButtomVisible] =
    UseIntersectionObserver({
      threshold: 0.1,
    });

  return (
    <div className="min-h-screen flex flex-col">
      <div className="home-bar sticky flex flex-row w-full bg-[var(--home-bg-color)] h-[80px] rounded-[10px] justify-between items-center px-[20px]">
        <div className="text-4xl font-bold text-[var(--text-color)] flex justify-start items-center">
          <div className="mt-10" ref={titleRef}>
            <p className="text-xl mb-10 font-epilogue">
              {titles.map((letter, index) => (
                <span
                  key={index}
                  className={`fade-in ${
                    isTitleVisible ? "visible" : "invisible"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="flex flex-row ml-auto">
          <CustomButtom
            btnType="button"
            title={address ? "Disconnect the wallet" : "Connect to wallet"}
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

      <div className="mt-10" ref={textOneRef}>
        <p className="text-xl text-[var(--text-color)] mb-10 font-epilogue">
          {words_one.map((word, index) => (
            <span
              key={index}
              className={`fade-in ${
                isTextOneVisible ? "visible" : "invisible"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>
      </div>

      <div className="flex cursor-pointer justify-center mt-10">
        <img
          src="/src/Charities_photos/image_big_1.png"
          className="home-bigimage object-contain w-1/2 h-1/2 rounded-[20px]"
          alt="Charity"
        />
      </div>

      <div className="flex flex-col mt-[20px] gap-[26px]">
        <div className="flex flex-col justify-start">
          <div className="mt-10 mb-10" ref={textTwoRef}>
            <p className="text-xl text-[var(--text-color)] font-epilogue">
              {words_two.map((word, index) => (
                <span
                  key={index}
                  className={`fade-in ${
                    isTextTwoVisible ? "visible" : "invisible"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-row gap-6">
            <CharityPhotosStyle imageSRC="/src/Charities_photos/first-1.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Charities_photos/first-2.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Charities_photos/first-3.jpeg" />
          </div>
        </div>
        <hr className="border-t-2 border-[#3498db]" />
        <div ref={textThreeRef}>
          <div className="mt-10">
            <p className="text-xl text-[var(--text-color)] mb-10 font-epilogue font-semibold">
              {words_three.map((word, index) => (
                <span
                  key={index}
                  className={`fade-in ${
                    isTextThreeVisible ? "visible" : "invisible"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </p>
          </div>
          <div className="mt-10" ref={textFourRef}>
            <p className="text-xl text-[var(--text-color)] mb-10 font-epilogue">
              {words_four.map((word, index) => (
                <span
                  key={index}
                  className={`fade-in ${
                    isTextFourVisible ? "visible" : "invisible"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <CharityPhotosStyle imageSRC="/src/Charities_photos/second-1.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Charities_photos/second-2.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Charities_photos/second-3.jpeg" />

            <CharityPhotosStyle imageSRC="/src/Charities_photos/second-4.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Charities_photos/second-5.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Charities_photos/second-6.jpeg" />
          </div>
        </div>
        <hr className="border-t-2 border-[#3498db]" />
        <div
          className="flex flex-col cursor-pointer items-center"
          ref={textFiveRef}
        >
          <div className="mt-10">
            <p className="text-xl text-[var(--text-color)] mb-10 font-epilogue">
              {words_five.map((word, index) => (
                <span
                  key={index}
                  className={`fade-in ${
                    isTextFiveVisible ? "visible" : "invisible"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </p>
          </div>
          <h1 className="text-xl bg-[var(--text-color)] mb-10"></h1>
          <img
            src="/src/Charities_photos/image_big_2.png"
            className="home-bigimage object-contain w-1/2 h-1/2 rounded-[20px]"
            alt="Charity"
          />
        </div>

        <div ref={textSixRef}>
          <div className="mt-10">
            <p className="text-xl text-[var(--text-color)] mb-10 font-epilogue">
              {words_six.map((word, index) => (
                <span
                  key={index}
                  className={`fade-in ${
                    isTextSixVisible ? "visible" : "invisible"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </p>
          </div>
          <h1 className="text-xl text-[var(--text-color)] mb-10"></h1>
          <div className="flex flex-wrap gap-6">
            <CharityPhotosStyle imageSRC="/src/Charities_photos/third-1.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Charities_photos/third-2.jpeg" />
            <CharityPhotosStyle imageSRC="/src/Charities_photos/third-3.jpeg" />
          </div>
        </div>

        <hr className="border-t-2 border-[#3498db]" />

        <div className="flex flex-col items-center" ref={textSevenRef}>
          <div className="mt-10">
            <p className="text-xl text-[var(--text-color)] mb-10 font-epilogue">
              {words_seven.map((word, index) => (
                <span
                  key={index}
                  className={`fade-in ${
                    isTextSevenVisible ? "visible" : "invisible"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </p>
          </div>
          <Link to="/View_Active_Charity">
            <div className="custom-buttom bg-[#3498db] px-4 py-3 rounded-[10px] text-2xl flex justify-center items-center">
              <h1
                className="font-epilogue font-semibold text-[25px] text-[var(--custombuttom-text-color)]"
                ref={donateNowButtomRef}
              >
                {words_eight.map((word, index) => (
                  <span
                    key={index}
                    className={`fade-in ${
                      isTextSevenVisible ? "visible" : "invisible"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {word}&nbsp;
                  </span>
                ))}
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
