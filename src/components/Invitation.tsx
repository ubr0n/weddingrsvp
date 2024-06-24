import React from "react";
import coupleImage from "../assets/nepalicouple.png";
type Props = {
  setInvitationOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setShowConfetti: React.Dispatch<React.SetStateAction<boolean>>;
};

const Invitation = ({ setInvitationOpened, setShowConfetti }: Props) => {
  const handleButtonClick = () => {
    setInvitationOpened(true);
    setTimeout(() => setShowConfetti(true), 1000); // Reset confetti after 5 seconds
  };
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h1 className="text-3xl">The Wedding of</h1>
      <img
        src={coupleImage}
        alt="couple image"
        className="aspect-square h-[250px] md:h-[500px] transition-all duration-1000 ease-in-out rounded-full"
      />
      <h1 className="text-4xl">Navin and Srijana</h1>
      <h2 className="font-bold text-xl">July 20, 2024</h2>
      <button
        onClick={handleButtonClick}
        className="text-[#24765d] bg-[#d1f8e2] border-none outline-none rounded-[20px] flex gap-2 justify-center font-bold "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
          />
        </svg>
        <p className="mt-1">Open Invitation</p>
      </button>
    </div>
  );
};

export default Invitation;
