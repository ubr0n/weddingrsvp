/* eslint-disable @typescript-eslint/no-unused-vars */
import coupleImage from "../assets/couple.png";
import TimeUntil from "./TimeUntil";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="font-cursive text-3xl" style={{ fontWeight: 600 }}>
        Navin & Srijana Wedding
      </h1>
      <div className="heroCoupleImage h-[300px] aspect-square md:h-[400px] lg:h-[500px] object-cover duration-1000">
        <img src={coupleImage} alt="couple image" className="" />
      </div>
      <h3 className="font-bold text-2xl">July 20, 2024</h3>
      <TimeUntil targetDate={"2024-07-20T00:00:00.000Z"} />
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="h-[30px] rounded-lg border-2 w-[20px] justify-center flex p-[5px]">
          <div className="h-[5px] w-[2px] bg-gray-600 rounded-full mouseScrollDownAnimation" />
        </div>
        <small className="text-gray-500">scroll down</small>
      </div>
    </div>
  );
};

export default Hero;
