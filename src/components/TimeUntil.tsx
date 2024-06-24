import { useState, useEffect } from "react";
import {
  differenceInSeconds,
  formatDuration,
  intervalToDuration,
} from "date-fns";
type Props = {
  targetDate: string;
  isOnlyDay: boolean;
};

const TimeUntil = ({ targetDate, isOnlyDay }: Props) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const secondsLeft = differenceInSeconds(targetDate, now);

      if (secondsLeft <= 0) {
        setTimeLeft("Hurrey! Its time, see you at our wedding!");
        return;
      }

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
  }, [isOnlyDay, targetDate]);

  return (
    <div>
      {isOnlyDay ? null : timeLeft?.includes("Hurrey") ? null : (
        <p className="text-gray-500">See you in</p>
      )}
      <p className={`${isOnlyDay ? "" : "border"} text-sm p-2 px-4 rounded-xl`}>
        {timeLeft}
      </p>
    </div>
  );
};

export default TimeUntil;
