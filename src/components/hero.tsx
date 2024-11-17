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
        Santosh & Niharika's Wedding
      </h1>
      <img
        onClick={() => setShowConfetti(true)}
        src={coupleImage}
        alt="couple image"
        className="h-[250px] md:h-[290px] lg:h-[370px] aspect-square duration-1000"
      />
      <h3 className="font-bold text-2xl">Marriage: Mangshir 08, 2081</h3>
      <h3 className="font-bold text-2xl">Reception: Mangshir 10, 2081</h3>
      <TimeUntil
        isOnlyDay={false}
        targetDate={"2024-11-23T05:45:00.000Z"}
        title="Marriage"
        showHeader={true}
      />
      <TimeUntil
        showHeader={false}
        isOnlyDay={false}
        targetDate={"2024-11-25T05:45:00.000Z"}
        title="Reception"
      />
      <a
        href="https://www.google.com/maps/place/Parijat+Party+Event+Pvt+Ltd/@27.7502614,85.3155947,999m/data=!3m1!1e3!4m6!3m5!1s0x39eb19de31a467eb:0x83d7379f779593e5!8m2!3d27.7500129!4d85.3178783!16s%2Fg%2F11r_n297r_?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        className="flex gap-2 items-center justify-center z-10"
      >
        <PinIcon className="h-5 w-5 mb-1" />
        <p>Parijat Party Event Pvt.</p>
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
