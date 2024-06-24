/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import floral from "./assets/floral.png";
import AudioPlayer from "./components/audio";
import Hero from "./components/hero";
import audiofile from "./assets/audiotrimmed.mp3";
import Confetti from "./components/Cnnfetti";
import Invitation from "./components/Invitation";

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  const [invitationOpened, setInvitationOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div className="">
      <img
        src={floral}
        alt=""
        className="fixed -top-2 right-0 w-[200px] aspect-square md:w-[30%]"
      />
      <img
        src={floral}
        alt=""
        className="fixed -bottom-2 left-0 aspect-square rotate-180 w-[200px] md:w-[30%]"
      />
      {!invitationOpened ? (
        <Invitation
          setInvitationOpened={setInvitationOpened}
          setShowConfetti={setShowConfetti}
        />
      ) : (
        <>
          <Hero />
          {/* {showConfetti ? ( */}
          <Confetti trigger={showConfetti} loopCount={2} />
          {/* ) : null} */}
          <AudioPlayer audioFile={audiofile} />
        </>
      )}
    </div>
  );
}

export default App;
