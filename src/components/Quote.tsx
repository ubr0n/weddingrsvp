import { WaveSvg } from "./InvMessage";
import TimeUntil from "./TimeUntil";
import { PinIcon } from "./hero";

const Quote = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-3/4">
        <h1 className="font-cursive text-center text-3xl md:text-4xl">
          Two hearts, one love, joined together in a journey of a lifetime.
          <br /> We joyfully invite you to celebrate the beginning of our
          forever.
        </h1>
      </div>
      <WaveSvg color="#fefdda" isStart={true} />
      <div className="bg-[#fefdda]  w-full p-5 flex flex-col items-center  gap-2 pb-20">
        {/* <p className="text-lg">See you in:</p> */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <TimeUntil
            isOnlyDay={false}
            targetDate={"2024-11-23T05:45:00.000Z"}
            title="Bihey"
            showHeader={true}
          />
          <TimeUntil
            showHeader={false}
            isOnlyDay={false}
            targetDate={"2024-11-25T05:45:00.000Z"}
            title="Reception"
          />
        </div>
        <a
          href="https://www.google.com/maps/place/Parijat+Party+Event+Pvt+Ltd/@27.7502614,85.3155947,999m/data=!3m1!1e3!4m6!3m5!1s0x39eb19de31a467eb:0x83d7379f779593e5!8m2!3d27.7500129!4d85.3178783!16s%2Fg%2F11r_n297r_?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="flex gap-2 items-center justify-center z-10"
        >
          <PinIcon className="h-5 w-5 mb-1" />
          <p>Parijat Party Event Pvt.</p>
        </a>
        <p>Baniyataar, Kathmandu</p>
      </div>
    </div>
  );
};

export default Quote;
