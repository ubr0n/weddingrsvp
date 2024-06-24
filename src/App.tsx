/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import floral from "./assets/floral.png";
import AudioPlayer from "./components/audio";
import Hero from "./components/hero";
import audiofile from "./assets/audiotrimmed.mp3";
import Confetti from "./components/Cnnfetti";
import Invitation from "./components/Invitation";
import InvMessage from "./components/InvMessage";
import Quote from "./components/Quote";
import animationData from "./assets/confetti.json";

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  const [invitationOpened, setInvitationOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <>
      <img
        src={floral}
        alt=""
        className="fixed z-10 -top-2 right-0 w-[200px] aspect-square md:w-[30%] max-w-[450px]"
      />
      <img
        src={floral}
        alt=""
        className="fixed z-10 -bottom-2 left-0 aspect-square rotate-180 w-[200px] md:w-[30%] max-w-[450px]"
      />
      {!invitationOpened ? (
        <Invitation
          setInvitationOpened={setInvitationOpened}
          setShowConfetti={setShowConfetti}
        />
      ) : (
        <>
          <Hero />
          <Confetti trigger={showConfetti} loopCount={2} data={animationData} />
          <AudioPlayer audioFile={audiofile} />
          <InvMessage />
          <Quote />
        </>
      )}
    </>
  );
}

export default App;
