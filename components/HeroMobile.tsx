import { down, img1, img2, img3, img4, img5, img6, up } from "@/public";

import Image from "next/image";

const HeroMobile = ({}) => {
  const styles = {
    color: "var(--black, #282828)",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "130%",
  };
  return (
    <section className="lg:hidden relative mb-[850px]">
      <div className=" relative w-full lg:hidden flex  container  justify-center mt-44">
        {/* Top  */}
        <div className="absolute w-40 left-6">
          <Image alt="icons" src={up} />
        </div>
        <div className="absolute left-11 -top-[90px] w-[7.68225rem] h-[7.68731rem]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-full" />
        <Image
          src={img1}
          alt="image"
          className="w-[4.72775rem] h-[5.8565rem] absolute -right-[75px] -top-20"
        />
        <p style={styles} className="absolute -right-16 -top-36">
          أراضي
        </p>
        <div className="absolute w-40 -top-[68px] right-6">
          <Image alt="icons" src={down} className=" " />
        </div>
        <Image
          src={img2}
          alt="image"
          className="w-[4.72775rem] h-[5.8565rem] absolute z-10 -left-[70px] -top-8"
        />
        <p style={styles} className="absolute right-[10px] w-44 top-28">
          اكساء و ديكور داخلي
        </p>
        <div className="absolute right-10 -top-[40px] w-[7.68225rem] h-[7.68731rem]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-full" />

        {/* Second  */}

        <div className="absolute top-[350px] w-40 left-[26px]">
          <Image alt="icons" src={up} />
        </div>
        <Image
          src={img3}
          alt="image"
          className="w-[9.72775rem] h-[7.8565rem] absolute top-[264px] z-10 left-[70px]  "
        />
        <p style={styles} className="absolute left-4 top-[200px] w-44">
          منظومات التدفئة والتكييف
        </p>
        <div className="absolute  left-[45px] top-[268px] w-[7.68225rem] h-[7.68731rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-full" />
        <div className="absolute top-[280px] w-40 right-6">
          <Image alt="icons" src={down} />
        </div>
        <Image
          src={img4}
          alt="image"
          className="w-[8rem] h-[5.8565rem] absolute right-[75px] top-[314px]"
        />
        <p style={styles} className="absolute right-4 top-[440px] w-44">
          منظومات الطاقة البديلة
        </p>
        <div className="absolute  right-11 -z-20 top-[304px] w-[7.68225rem] h-[7.68731rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-full" />

        {/* Last */}
        <div>
          <div className="absolute top-[713px] w-40 left-[26px]">
            <Image alt="icons" src={up} />
          </div>
        </div>
        <Image
          src={img5}
          alt="image"
          className="w-[9.72775rem] h-[7.8565rem] absolute top-[630px] left-[74px]  z-10  "
        />
        <div className="absolute  left-[45px] -z-20 top-[628px] w-[7.68225rem] h-[7.68731rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-full" />
        <p style={styles} className="absolute -right-32 top-[550px] w-44">
          التسهيلات القانونية
        </p>
        <div className="absolute top-[643px] w-40 right-6">
          <Image alt="icons" src={down} />
        </div>
        <Image
          src={img6}
          alt="image"
          className="w-[9.72775rem] h-[7.8565rem] absolute top-[670px] right-[75px]  z-10  "
        />

        <p style={styles} className="absolute  w-44 right-5 top-[810px]">
          تحف فنية <br /> و اكسسوارات
        </p>
        <div className="absolute  right-11 top-[670px] w-[7.68225rem] h-[7.68731rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-full" />
      </div>
    </section>
  );
};

export default HeroMobile;
