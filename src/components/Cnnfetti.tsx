import React, { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../assets/confetti.json";
interface ConfettiProps {
  trigger: boolean;
  loopCount: number;
}

const Confetti: React.FC<ConfettiProps> = ({ trigger, loopCount }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (trigger) {
      lottieRef.current?.goToAndPlay(0, true);
    } else {
      lottieRef.current?.stop();
    }
  }, [trigger]);

  useEffect(() => {
    if (lottieRef.current) {
      (lottieRef.current as any).loop = loopCount;
    }
  }, [loopCount]);
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        className="h-screen w-screen"
      />
    </div>
  );
};

export default Confetti;
