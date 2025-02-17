import { useState, useEffect } from "react";
import {
  differenceInSeconds,
  formatDuration,
  intervalToDuration,
} from "date-fns";
type Props = {
  targetDate: string;
  isOnlyDay: boolean;
  title?: string;
  showHeader?: boolean;
  // eventName: string;
};

const negative12hrsinSec = -12 * 3600;

const TimeUntil = ({
  targetDate,
  isOnlyDay,
  title,
}: // showHeader,
// eventName,
Props) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const secondsLeft = differenceInSeconds(targetDate, now);
      console.log(secondsLeft);

      if (secondsLeft <= negative12hrsinSec) {
        setTimeLeft(
          `Thank you for your presence at our ${title ? title : "Event"}.`
        );
        return;
      }
      if (secondsLeft <= 0) {
        setTimeLeft("Hurrey! Its time, see you at our wedding!");
        return;
      }
      // else if()

      const duration = intervalToDuration({ start: now, end: targetDate });
      const formattedDuration = formatDuration(
        isOnlyDay
          ? {
              days: duration.days,
            }
          : duration
      );
      setTimeLeft(formattedDuration);
    };

    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, [isOnlyDay, targetDate, title]);

  return (
    <div>
      {/* {showHeader ? (
        <p className="text-gray-500 font-bold">See you in:</p>
      ) : null} */}
      <p className={`${isOnlyDay ? "" : "border"} text-sm p-2 px-4 rounded-xl`}>
        {title ? `${title}: ` : ""}
        {timeLeft}
      </p>
    </div>
  );
};

export default TimeUntil;
