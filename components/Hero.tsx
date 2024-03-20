"use client";

import { img1, img2, img3, img4, img5, img6 } from "@/public";

import Image from "next/image";
import localFont from "next/font/local";
import HeroMobile from "./HeroMobile";

const Hacen = localFont({
  src: "../public/fonts/Hacen Promoter.ttf",
  display: "swap",
});
const Hero = ({}) => {
  const styles = {
    color: "var(--black, #282828)",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "130%",
  };
  return (
    <div
      id="home"
      dir="rtl"
      className="text-center flex flex-col relative items-center pt-12 ">
      <h1
        style={{
          color: "#2654DE",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "var(--1, #2654DE)",
          fontSize: "8.75rem",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
        }}
        className={`${Hacen.className} mb-0`}>
        دارك
      </h1>

      <p
        style={{
          color: "var(--black, #282828)",
          fontSize: "2.5rem",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
        }}
        className="lg:mt-3 ">
        من نحن ؟
      </p>
      <Image
        src="/underLine.svg"
        width={28}
        height={28}
        className="w-[53%] absolute right-0 top-[340px]"
        alt="line"
      />
      <p
        style={{
          color: "#000",
          fontSize: "2rem",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
        className={" my-4 lg:mb-12 text-center lg:text-right px-3"}>
        مجموعة شركاء نعمل ضمن سوق العقارات على تأمين العقارات وما يتصل بها
      </p>

      <div className=" relative w-full hidden lg:flex  container  justify-center mt-44">
        {/* Image One */}
        <div className="absolute right-24 -top-28 w-[9.68225rem] h-[9.68731rem]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-full" />
        <Image
          src={img1}
          alt="image"
          className="w-[4.72775rem] h-[5.8565rem] absolute right-[130px] -top-20"
        />
        <p style={styles} className="absolute right-36 -top-40">
          أراضي
        </p>
        <div className="absolute right-[300px] -top-12 w-[9.68225rem] h-[9.68731rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-full" />
        <Image
          src={img2}
          alt="image"
          className="w-[4.72775rem] h-[5.8565rem] absolute right-[340px] -top-4"
        />
        <p style={styles} className="absolute right-[310px] top-36">
          اكساء <br />و ديكور داخلي
        </p>
        <div className="absolute right-[500px] -top-28 w-[9.68225rem] h-[9.68731rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-full" />
        <Image
          src={img3}
          alt="image"
          className="w-[4.72775rem] h-[5.8565rem] absolute right-[540px] -top-20"
        />
        <p style={styles} className="absolute right-[505px] -top-48">
          منظومات <br />
          التدفئة والتكييف
        </p>
        <div className="absolute right-[700px] -top-12 w-[9.68225rem] h-[9.68731rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-full" />
        <Image
          src={img4}
          alt="image"
          className="w-[8.72775rem] h-[6.8565rem] absolute right-[710px] -top-6"
        />
        <p style={styles} className="absolute right-[700px] top-36">
          منظومات <br /> الطاقة البديلة
        </p>
        <div className="absolute right-[910px] -top-28 w-[9.68225rem] h-[9.68731rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-full" />
        <Image
          src={img5}
          alt="image"
          className="w-[8rem] h-[5.8565rem] absolute right-[920px] -top-20"
        />
        <p style={styles} className="absolute right-[930px] -top-48">
          التسهيلات <br />
          القانونية
        </p>
        <div className="absolute right-[1110px] -top-12 w-[9.68225rem] h-[9.68731rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-full" />
        <Image
          src={img6}
          alt="image"
          className="w-[4.72775rem] h-[5.8565rem] absolute right-[1150px] -top-4"
        />

        <p style={styles} className="absolute right-[1130px] top-36">
          تحف فنية <br /> و اكسسوارات
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="225"
          height="90"
          viewBox="0 0 225 90"
          fill="none"
          className="absolute right-16">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.84375 0.117188C12.5894 51.1896 58.3103 89.2747 112.922 89.2747C167.533 89.2747 213.254 51.1896 225 0.117188H201.545C190.379 38.4977 154.962 66.5445 112.997 66.5445C71.0325 66.5445 35.6152 38.4977 24.4488 0.117188H0.84375Z"
            fill="url(#paint0_linear_388_90)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_388_90"
              x1="-20.1397"
              y1="96.5905"
              x2="52.7712"
              y2="-83.1487"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#2553DE" />
              <stop offset="0.29" stopColor="#2755DE" />
              <stop offset="0.45" stopColor="#2F5BDE" />
              <stop offset="0.57" stopColor="#3D65DD" />
              <stop offset="0.68" stopColor="#5073DC" />
              <stop offset="0.78" stopColor="#6986DB" />
              <stop offset="0.87" stopColor="#889DDA" />
              <stop offset="0.95" stopColor="#ACB8D8" />
              <stop offset="1" stopColor="#C4CAD7" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="225"
          height="90"
          viewBox="0 0 225 90"
          fill="none"
          className="absolute right-[265px] -top-24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M224.368 89.1574C212.617 38.0852 166.872 0.000132303 112.232 0.000127526C57.5915 0.000122749 11.8466 38.0851 0.0947113 89.1574L23.5617 89.1574C34.7339 50.7769 70.1698 22.7302 112.156 22.7302C154.143 22.7302 189.579 50.7769 200.751 89.1574L224.368 89.1574Z"
            fill="url(#paint0_linear_388_75)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_388_75"
              x1="245.363"
              y1="-7.31611"
              x2="172.479"
              y2="172.45"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#2553DE" />
              <stop offset="0.29" stopColor="#2755DE" />
              <stop offset="0.45" stopColor="#2F5BDE" />
              <stop offset="0.57" stopColor="#3D65DD" />
              <stop offset="0.68" stopColor="#5073DC" />
              <stop offset="0.78" stopColor="#6986DB" />
              <stop offset="0.87" stopColor="#889DDA" />
              <stop offset="0.95" stopColor="#ACB8D8" />
              <stop offset="1" stopColor="#C4CAD7" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="225"
          height="90"
          viewBox="0 0 225 90"
          fill="none"
          className="absolute right-[470px]">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.84375 0.117188C12.5894 51.1896 58.3103 89.2747 112.922 89.2747C167.533 89.2747 213.254 51.1896 225 0.117188H201.545C190.379 38.4977 154.962 66.5445 112.997 66.5445C71.0325 66.5445 35.6152 38.4977 24.4488 0.117188H0.84375Z"
            fill="url(#paint0_linear_388_90)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_388_90"
              x1="-20.1397"
              y1="96.5905"
              x2="52.7712"
              y2="-83.1487"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#2553DE" />
              <stop offset="0.29" stopColor="#2755DE" />
              <stop offset="0.45" stopColor="#2F5BDE" />
              <stop offset="0.57" stopColor="#3D65DD" />
              <stop offset="0.68" stopColor="#5073DC" />
              <stop offset="0.78" stopColor="#6986DB" />
              <stop offset="0.87" stopColor="#889DDA" />
              <stop offset="0.95" stopColor="#ACB8D8" />
              <stop offset="1" stopColor="#C4CAD7" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="225"
          height="90"
          viewBox="0 0 225 90"
          fill="none"
          className="absolute right-[670px] -top-24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M224.368 89.1574C212.617 38.0852 166.872 0.000132303 112.232 0.000127526C57.5915 0.000122749 11.8466 38.0851 0.0947113 89.1574L23.5617 89.1574C34.7339 50.7769 70.1698 22.7302 112.156 22.7302C154.143 22.7302 189.579 50.7769 200.751 89.1574L224.368 89.1574Z"
            fill="url(#paint0_linear_388_75)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_388_75"
              x1="245.363"
              y1="-7.31611"
              x2="172.479"
              y2="172.45"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#2553DE" />
              <stop offset="0.29" stopColor="#2755DE" />
              <stop offset="0.45" stopColor="#2F5BDE" />
              <stop offset="0.57" stopColor="#3D65DD" />
              <stop offset="0.68" stopColor="#5073DC" />
              <stop offset="0.78" stopColor="#6986DB" />
              <stop offset="0.87" stopColor="#889DDA" />
              <stop offset="0.95" stopColor="#ACB8D8" />
              <stop offset="1" stopColor="#C4CAD7" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="225"
          height="90"
          viewBox="0 0 225 90"
          fill="none"
          className="absolute right-[875px]">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.84375 0.117188C12.5894 51.1896 58.3103 89.2747 112.922 89.2747C167.533 89.2747 213.254 51.1896 225 0.117188H201.545C190.379 38.4977 154.962 66.5445 112.997 66.5445C71.0325 66.5445 35.6152 38.4977 24.4488 0.117188H0.84375Z"
            fill="url(#paint0_linear_388_90)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_388_90"
              x1="-20.1397"
              y1="96.5905"
              x2="52.7712"
              y2="-83.1487"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#2553DE" />
              <stop offset="0.29" stopColor="#2755DE" />
              <stop offset="0.45" stopColor="#2F5BDE" />
              <stop offset="0.57" stopColor="#3D65DD" />
              <stop offset="0.68" stopColor="#5073DC" />
              <stop offset="0.78" stopColor="#6986DB" />
              <stop offset="0.87" stopColor="#889DDA" />
              <stop offset="0.95" stopColor="#ACB8D8" />
              <stop offset="1" stopColor="#C4CAD7" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="225"
          height="90"
          viewBox="0 0 225 90"
          fill="none"
          className="absolute right-[1075px] -top-24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M224.368 89.1574C212.617 38.0852 166.872 0.000132303 112.232 0.000127526C57.5915 0.000122749 11.8466 38.0851 0.0947113 89.1574L23.5617 89.1574C34.7339 50.7769 70.1698 22.7302 112.156 22.7302C154.143 22.7302 189.579 50.7769 200.751 89.1574L224.368 89.1574Z"
            fill="url(#paint0_linear_388_75)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_388_75"
              x1="245.363"
              y1="-7.31611"
              x2="172.479"
              y2="172.45"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#2553DE" />
              <stop offset="0.29" stopColor="#2755DE" />
              <stop offset="0.45" stopColor="#2F5BDE" />
              <stop offset="0.57" stopColor="#3D65DD" />
              <stop offset="0.68" stopColor="#5073DC" />
              <stop offset="0.78" stopColor="#6986DB" />
              <stop offset="0.87" stopColor="#889DDA" />
              <stop offset="0.95" stopColor="#ACB8D8" />
              <stop offset="1" stopColor="#C4CAD7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <HeroMobile />
    </div>
  );
};

export default Hero;
