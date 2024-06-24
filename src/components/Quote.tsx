import { WaveSvg } from "./InvMessage";
import TimeUntil from "./TimeUntil";

const Quote = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-3/4">
        <h1 className="font-cursive text-center text-4xl">
          Two hearts, one love, joined together in a journey of a lifetime. We
          joyfully invite you to celebrate the beginning of our forever.
        </h1>
      </div>
      <WaveSvg color="#fefdda" isStart={true} />
      <div className="bg-[#fefdda]  w-full p-10 flex flex-col items-center  gap-2">
        <p className="text-lg">See you in:</p>
        <div className="border border-red-300 p-10 h-16 w-16 flex items-center justify-center rounded-full">
          <TimeUntil isOnlyDay={true} targetDate={"2024-07-14T05:45:00.000Z"} />
        </div>
      </div>
    </div>
  );
};

export default Quote;
