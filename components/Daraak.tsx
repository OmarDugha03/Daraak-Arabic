import { apple, google } from "@/public";
import Image from "next/image";
import localFont from "next/font/local";

const Hacen = localFont({
  src: "../public/fonts/Hacen Promoter.ttf",
  display: "swap",
});
const Ara = localFont({
  src: "../public/fonts/Ara Hamah Alislam.ttf",
  display: "swap",
});
const Darrak = ({}) => {
  return (
    <footer
      dir="rtl"
      className="flex flex-col mt-12 lg:mt-0 relative items-center justify-center">
      <p className="text-[#2654DE] pt-10  text-[4rem] lg:text-[12.55581rem]">
        <sup className=" text-[2rem] right-8 lg:right-16 -top-16  lg:-top-7 relative">
          APK
        </sup>{" "}
        <span
          className={`${Hacen.className} text-[7rem] relative lg:top-10 me-12`}>
          دارك
        </span>
      </p>
      <Image
        src="/underLine.svg"
        width={28}
        height={28}
        className="w-[55%] absolute right-0 top-44 lg:top-80"
        alt="line"
      />
      <p className="text-[2rem] leading-relaxed lg:px-12 lg:container text-center lg:text-right px-4">
        تطبيق الكتروني يقدم لك عروض العقارات المتوفرة في منطقتك بأفضل الأسعار
        بالاضافة الى خدماتنا الاحترافية
      </p>

      <div
        style={{
          background:
            "var(--li, linear-gradient(46deg, #2553DE -8.79%, #2755DE 24.92%, #2F5BDE 43.51%, #3D65DD 57.46%, #5073DC 70.25%, #6986DB 81.87%, #889DDA 92.33%, #ACB8D8 101.63%, #C4CAD7 107.44%))",
        }}
        className="md:w-[36rem] w-[16.5rem] h-[10.3125rem] relative md:h-[16.8125rem] rounded-[2rem] mb-6 mt-20 lg:mb-24 lg:mt-24">
        {/* For Desktop :  */}
        <div className="hidden  md:block">
          {/* Back frame */}
          <svg
            className="absolute -z-20 w-[25.625rem] h-[27.3125rem]  -top-16 left-52 "
            xmlns="http://www.w3.org/2000/svg"
            width="304"
            height="356"
            viewBox="0 0 304 356"
            fill="none">
            <path
              d="M259.33 0.109375H0.180176V6.49937H259.33C280.13 6.49937 297.04 24.3094 297.04 46.1994V309.249C297.04 331.139 280.13 348.939 259.33 348.939H230.87V355.339H259.31C283.63 355.339 303.42 334.659 303.42 309.249V46.2494C303.44 20.7794 283.65 0.109375 259.33 0.109375Z"
              fill="#282828"
            />
          </svg>
          {/* Front Frame  */}
          <svg
            className="absolute z-20 w-[25.8125rem] h-[32.875rem] -top-16 right-52"
            xmlns="http://www.w3.org/2000/svg"
            width="307"
            height="422"
            viewBox="0 0 307 422"
            fill="none">
            <path
              d="M306.12 348.939H158.65L84.14 407.839V348.939H44.81C24.02 348.939 7.09996 331.139 7.09996 309.249V46.2494C7.09996 24.3594 24.02 6.54937 44.81 6.54937H75.42V0.109375H44.81C20.49 0.109375 0.709961 20.7794 0.709961 46.1994V309.249C0.709961 334.659 20.49 355.339 44.81 355.339H77.75V421.049L160.87 355.339H306.12V348.939Z"
              fill="#282828"
            />
          </svg>
          {/* Up Quotes */}
          <svg
            className="absolute left-24 w-[4.625rem] h-[3.625rem] -top-16 "
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="45"
            viewBox="0 0 58 45"
            fill="none">
            <path
              d="M15.3501 22.32H23.4301V44.64H0.870117V24.45L12.7801 0H23.4101L15.3501 22.32ZM49.3501 22.32H57.4301V44.64H34.8701V24.45L46.8701 0H57.5001L49.3501 22.32Z"
              fill="#282828"
            />
          </svg>
          {/* Down Quotes */}
          <svg
            className="absolute left-96 -bottom-24  w-[4.625rem] h-[3.625rem]  rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="45"
            viewBox="0 0 58 45"
            fill="none">
            <path
              d="M15.3501 22.32H23.4301V44.64H0.870117V24.45L12.7801 0H23.4101L15.3501 22.32ZM49.3501 22.32H57.4301V44.64H34.8701V24.45L46.8701 0H57.5001L49.3501 22.32Z"
              fill="#282828"
            />
          </svg>
          <p
            className={`${Hacen.className} text-4xl md:text-[4rem] text-white text-center mt-16 md:mt-28`}>
            دارك راحة الشراء
          </p>
        </div>

        {/* For Mobile :  */}
        <div className="md:hidden ">
          {/* Back frame */}
          <svg
            className="absolute -z-20 w-[11.375rem] h-[13.5625rem]  -top-6 -right-4 "
            xmlns="http://www.w3.org/2000/svg"
            width="304"
            height="356"
            viewBox="0 0 304 356"
            fill="none">
            <path
              d="M259.33 0.109375H0.180176V6.49937H259.33C280.13 6.49937 297.04 24.3094 297.04 46.1994V309.249C297.04 331.139 280.13 348.939 259.33 348.939H230.87V355.339H259.31C283.63 355.339 303.42 334.659 303.42 309.249V46.2494C303.44 20.7794 283.65 0.109375 259.33 0.109375Z"
              fill="#282828"
            />
          </svg>
          {/* Front Frame  */}
          <svg
            className="absolute z-20 w-[11.5625rem] h-[16.25rem] -top-[26px] right-24"
            xmlns="http://www.w3.org/2000/svg"
            width="307"
            height="356"
            viewBox="0 0 307 422"
            fill="none">
            <path
              d="M306.12 348.939H158.65L84.14 407.839V348.939H44.81C24.02 348.939 7.09996 331.139 7.09996 309.249V46.2494C7.09996 24.3594 24.02 6.54937 44.81 6.54937H75.42V0.109375H44.81C20.49 0.109375 0.709961 20.7794 0.709961 46.1994V309.249C0.709961 334.659 20.49 355.339 44.81 355.339H77.75V421.049L160.87 355.339H306.12V348.939Z"
              fill="#282828"
            />
          </svg>
          {/* Up Quotes */}
          <svg
            className="absolute left-[40px] -top-7 w-[1.98381rem] h-[1.56381rem] "
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="45"
            viewBox="0 0 58 45"
            fill="none">
            <path
              d="M15.3501 22.32H23.4301V44.64H0.870117V24.45L12.7801 0H23.4101L15.3501 22.32ZM49.3501 22.32H57.4301V44.64H34.8701V24.45L46.8701 0H57.5001L49.3501 22.32Z"
              fill="#282828"
            />
          </svg>
          {/* Down Quotes */}
          <svg
            className="absolute right-[45px] -bottom-8  w-[1.98381rem] h-[1.56381rem] rotate-180 "
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="45"
            viewBox="0 0 58 45"
            fill="none">
            <path
              d="M15.3501 22.32H23.4301V44.64H0.870117V24.45L12.7801 0H23.4101L15.3501 22.32ZM49.3501 22.32H57.4301V44.64H34.8701V24.45L46.8701 0H57.5001L49.3501 22.32Z"
              fill="#282828"
            />
          </svg>
          <p
            className={`${Hacen.className} text-4xl md:text-[4rem] text-white text-center mt-16 md:mt-28`}>
            دارك راحة الشراء
          </p>
        </div>
      </div>
      {/* Download */}
      <div className="flex text-center items-center justify-center lg:mt-52 md:mt-64 lg:mb-44 md:mb-24 mt-28 mb-16  relative ">
        <div
          style={{
            borderRadius: "1.125rem",
            background:
              "var(--li, linear-gradient(46deg, #2553DE -8.79%, #2755DE 24.92%, #2F5BDE 43.51%, #3D65DD 57.46%, #5073DC 70.25%, #6986DB 81.87%, #889DDA 92.33%, #ACB8D8 101.63%, #C4CAD7 107.44%))",
          }}
          className="lg:w-[70.25063rem]  md:w-[44rem]  s:w-[21.99806rem] ls:w-[24.99806rem] xs:h-[9.81713rem] w-[18.99806rem] h-[7.81713rem] lg:h-[18.39519rem] rotate-[7.939deg] absolute z-10"
        />
        <div
          className="lg:w-[70.25063rem] md:w-[44rem] s:w-[21.99806rem] ls:w-[24.99806rem] xs:h-[9.81713rem] w-[18.99806rem] h-[7.81713rem] lg:h-[18.39519rem]   absolute z-20"
          style={{
            borderRadius: "1.125rem",
            background:
              "linear-gradient(120deg, #FFF 10.95%, rgba(255, 255, 255, 0.77) 92.05%)",
            boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.20)",
            backdropFilter: "blur(10px)",
          }}
        />
        <div className=" relative mt-20 z-30">
          <h4
            className={`${Ara.className} absolute w-full lg:-top-40 left-0 -top-16 font-normal leading-none text-[1.25rem]  lg:text-[4rem] bg-gradient-to-l  lg:mt-12  from-[#2553de] via-[#3d65dd]  to-[#acb8d8]  inline-block text-transparent bg-clip-text`}>
            حمل تطبيقنا الان
            <p
              style={{
                background:
                  "var(--li, linear-gradient(46deg, #2553DE -8.79%, #2755DE 24.92%, #2F5BDE 43.51%, #3D65DD 57.46%, #5073DC 70.25%, #6986DB 81.87%, #889DDA 92.33%, #ACB8D8 101.63%, #C4CAD7 107.44%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className={`${Hacen.className} mt-2 text-[1.25rem] lg:mt-4  lg:text-[2.25rem] l font-normal`}>
              Download our application
            </p>
          </h4>
          <div className="flex lg:mt-4 items-center justify-center gap-x-4 lg:gap-x-12">
            <Image
              src={apple}
              alt="Download"
              className=" w-[7.44319rem] lg:w-[20.51138rem] "
            />
            <Image
              src={google}
              alt="Download"
              className=" w-[7.44319rem] lg:w-[20.51138rem] "
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Darrak;
