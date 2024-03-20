"use client";
import { phone } from "@/public";
import Image from "next/image";
import localFont from "next/font/local";
const Ara = localFont({
  src: "../public/fonts/Ara Hamah Alislam.ttf",
  display: "swap",
});
const WaterMark = ({}) => {
  async function writeClipboardText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error: any) {
      console.error(error.message);
    }
  }
  return (
    <section
      className={`${Ara.className} bg-[#8198DA]/20 text-center   flex items-center flex-col  lg:flex-row-reverse  pt-8 px-1 lg:px-6`}>
      <Image
        src="/footerMobile.svg"
        alt="footer"
        className="w-[44.8125rem]   px-4 mb-8  lg:hidden"
        width={28}
        height={28}
      />
      <div className="flex flex-col container justify-center items-center ">
        <p
          style={{
            color: "var(--1, #2654DE)",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
          className="text-[2rem] md:text-[4rem] text-center lg:text-[4.4rem]">
          اتصل بنا
        </p>
        <div className="lg:my-12 lg:gap-y-12 ">
          <div
            onClick={() => writeClipboardText("+963-997-234-345")}
            className="flex items-center flex-row-reverse  cursor-pointer my-2 gap-x-3 justify-center">
            <p className="cursor-pointer  text-right md:text-4xl text-2xl my-2 lg:text-[3rem] ">
              +963-997-234-345
            </p>
            <Image
              src={phone}
              alt="phone"
              className="w-[1.4375rem] h-[1.5rem] lg:w-[2.1875rem] lg:h-[2.3125rem]"
            />
          </div>
          <div
            onClick={() => writeClipboardText("+963-935-552-062")}
            className="flex items-center flex-row-reverse cursor-pointer my-2  gap-x-3 justify-center">
            <p className="cursor-pointer text-right md:text-4xl  text-2xl my-2 lg:text-[3rem] ">
              +963-935-552-062
            </p>
            <Image
              src={phone}
              alt="phone"
              className="w-[1.4375rem] h-[1.5rem] lg:w-[2.1875rem] lg:h-[2.3125rem]"
            />
          </div>
          <div
            onClick={() => writeClipboardText("+963-956-725-017")}
            className="flex items-center flex-row-reverse  cursor-pointer my-2 gap-x-3 justify-center">
            <p className="cursor-pointer text-right md:text-4xl   text-2xl my-2 lg:text-[3rem] ">
              +963-956-725-017
            </p>
            <Image
              src={phone}
              alt="phone"
              className="w-[1.4375rem] h-[1.5rem] lg:w-[2.1875rem] lg:h-[2.3125rem]"
            />
          </div>
          <div
            onClick={() => writeClipboardText("Realestate@gmail.com")}
            className="flex items-center flex-row-reverse  cursor-pointer my-2 gap-x-3 justify-center">
            <p className="cursor-pointer text-right   md:text-4xl text-2xl my-2 lg:text-[3rem] ">
              Realestate@gmail.com
            </p>
            <Image
              src="/email.svg"
              width={32}
              height={32}
              alt="phone"
              className="w-[1.4375rem] h-[1.5rem] lg:w-[2.1875rem] lg:h-[2.3125rem]"
            />
          </div>
        </div>
      </div>
      <Image
        src="/footer.svg"
        alt="footer"
        className="w-[44.8125rem] container h-[12.1875rem] mx-auto  hidden lg:block"
        width={28}
        height={28}
      />
    </section>
  );
};

export default WaterMark;
