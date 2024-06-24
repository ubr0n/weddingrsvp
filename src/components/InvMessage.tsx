import bride from "../assets/bride.png";
import groom from "../assets/groom.png";
import useIsVisible from "../hooks/useVisible";

const InvMessage = () => {
  const jodi = [
    {
      name: "Navin Pandey",
      img: groom,
      subtitle: "Son of",
      parent: "Keshav Raj Pandey & Prem Kumari Pandey",
    },
    {
      name: "Srijana Sitaula",
      img: bride,
      subtitle: "Daughter of",
      parent: "Krishna Prasad Sitaula & Radha Sitaula",
    },
  ];
  return (
    <div className="flex flex-col">
      <WaveSvg color="#eea5ac" isStart={true} />
      <div className="bg-[#eea5ac] flex-1 p-2 -my-1">
        <h1 className="font-cursive">Invitation</h1>
        <p>
          Together, with love in our hearts and dreams in our eyes, we invite
          you to join us as we begin our forever. <br /> Your presence will make
          our day truly special.
        </p>
        <div className="pt-16 flex flex-col gap-8">
          {jodi.map((props, index) => (
            <BrideGroom key={index} {...props} index={index} />
          ))}
        </div>
      </div>
      <WaveSvg color="#eea5ac" isStart={false} />
    </div>
  );
};

export default InvMessage;
const BrideGroom = ({
  img,
  name,
  index,
  subtitle,
  parent,
}: {
  img: string;
  name: string;
  index: number;
  subtitle: string;
  parent: string;
}) => {
  const [ref, isVisible] = useIsVisible<HTMLDivElement>({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="flex flex-col items-center justify-center gap-2">
      <img
        src={img}
        alt="groom img"
        className={`h-[200px] aspect-square rounded-full jodiAnimation${
          isVisible ? index + 1 : ""
        }`}
      />
      <ParentNames name={name} subtitle={subtitle} parent={parent} />
    </div>
  );
};
const ParentNames = ({
  subtitle,
  parent,
  name,
}: {
  subtitle: string;
  parent: string;
  name: string;
}) => {
  const [ref, isVisible] = useIsVisible<HTMLDivElement>({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  return (
    <div className="">
      <h1 className="font-bold text-4xl font-cursive">{name}</h1>

      <div ref={ref} className={isVisible ? "textFadeAnimation" : ""}>
        <p>{subtitle}</p>
        <p>{parent}</p>
      </div>
    </div>
  );
};
export const WaveSvg = ({
  color,
  isStart,
}: {
  color: string;
  isStart: boolean;
}) => {
  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      stroke={color}
      style={{
        color: color,
        transform: `rotate(${isStart ? "180deg" : "0deg"})`,
      }}
      className="z-1"
    >
      <path
        fill="currentColor"
        fill-opacity="1"
        d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,165.3C560,160,640,128,720,128C800,128,880,160,960,186.7C1040,213,1120,235,1200,218.7C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      ></path>
    </svg>
  );
};
