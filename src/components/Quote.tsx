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
        <p className="text-lg">See you in:</p>
        <div className="flex flex-col gap-2 items-center justify-center">
          <TimeUntil
            isOnlyDay={false}
            targetDate={"2025-02-21T05:45:00.000Z"}
            title="Marriage"
            showHeader={true}
          />
          <a
            href="https://maps.app.goo.gl/6XEBJ5i5i64u6HpJ8"
            target="_blank"
            className="flex gap-2 items-center justify-center z-10"
          >
            <PinIcon className="h-5 w-5 mb-1" />
            <p>Marriage: CAPITAL 0781 Hotel Chris</p>
          </a>
          <br />
          <TimeUntil
            showHeader={false}
            isOnlyDay={false}
            targetDate={"2025-02-22T05:45:00.000Z"}
            title="Reception"
          />
          <a
            href="https://maps.app.goo.gl/AuKPytDXarGV19mT9"
            target="_blank"
            className="flex gap-2 items-center justify-center z-10"
          >
            <PinIcon className="h-5 w-5 mb-1" />
            <p>Reception: Hotel the Narayani</p>
          </a>
        </div>

        {/* <p>Lali Guransh Chowk Bus Stop, Mahendra Hwy, Gaindakot 33000, Nepal</p> */}
      </div>
    </div>
  );
};

export default Quote;
