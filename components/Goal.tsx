import Image from "next/image";
import localFont from "next/font/local";

const Hacen = localFont({
  src: "../public/fonts/Hacen Promoter.ttf",
  display: "swap",
});
const Goal = ({}) => {
  return (
    <section
      id="goal"
      dir="rtl"
      className="flex  relative items-center flex-col lg:mt-52  justify-center ">
      <p
        className="mt-24"
        style={{
          color: "var(--black, #282828)",
          fontSize: "2.5rem",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
        }}>
        أهدافنا
      </p>
      <Image
        src="/underLine.svg"
        width={28}
        height={28}
        className="w-[55%] absolute right-0 top-40"
        alt="line"
      />
      <p className="lg:text-[2rem] leading-[50px] text-center lg:text-right  text-[1.6rem] mt-5 px-2 lg:px-12 lg:container ">
        تقديم جميع خدماتنا بأفضل الأسعار عن طريق أفضل الطواقم الهندسية و
        القانونية و الاستشارية الموجودة في السوق السورية. <br />
        ومن أدوات تسويقنا الالكتروني تطبيق &nbsp;
        <span className="text-[#2654DE]  relative text-3xl">
          <sup className="-top-6 lg:-top-8 text-[1rem] lg:text-[1.5rem] relative">
            APK
          </sup>
          <span className={`${Hacen.className} font-semibold lg:text-[3rem]`}>
            دارك
          </span>
        </span>
      </p>
    </section>
  );
};

export default Goal;
