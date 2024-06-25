import React, { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
interface ConfettiProps {
  trigger: boolean;
  data: any;
}

const Confetti: React.FC<ConfettiProps> = ({ trigger, data }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (trigger) {
      lottieRef.current?.goToAndPlay(0, true);
    } else {
      lottieRef.current?.stop();
    }
  }, [trigger]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
      <Lottie
        lottieRef={lottieRef}
        animationData={data}
        loop={true}
        autoplay={false}
        className="h-screen w-screen"
      />
    </div>
  );
};

export default Confetti;
