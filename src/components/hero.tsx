/* eslint-disable @typescript-eslint/no-unused-vars */
import coupleImage from "../assets/couplegif.gif";
import TimeUntil from "./TimeUntil";

const Hero = ({
  setShowConfetti,
}: {
  setShowConfetti: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-[100dvh] max-h-fit  w-full p-4">
      <h1 className="font-cursive z-50 text-3xl md:text-5xl w-3/4 md:w-full">
        Navin & Srijana's Wedding
      </h1>
      <img
        onClick={() => setShowConfetti(true)}
        src={coupleImage}
        alt="couple image"
        className="h-[250px] md:h-[300px] lg:h-[400px] aspect-square duration-1000"
      />
      <h3 className="font-bold text-2xl">Sunday, July 14, 2024</h3>
      <TimeUntil isOnlyDay={false} targetDate={"2024-07-14T05:45:00.000Z"} />
      <a
        href="https://maps.app.goo.gl/auLRR3kQApqfXeVz5"
        target="_blank"
        className="flex gap-2 items-center justify-center z-10"
      >
        <PinIcon className="h-5 w-5 mb-1" />
        <p> Royal Janata Banquet</p>
      </a>
      <div className="flex flex-col gap-1 items-center justify-center mt-4">
        <div className="h-[30px] rounded-lg border-2 w-[20px] justify-center flex p-[5px]">
          <div className="h-[5px] w-[2px] bg-gray-600 rounded-full mouseScrollDownAnimation" />
        </div>
        <small className="text-gray-500">scroll down</small>
      </div>
    </div>
  );
};

export default Hero;

export const PinIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
};
