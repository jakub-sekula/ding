import clsx from "clsx";
import { useEffect, useState } from "react";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind-config";
import AttendantIcon from "./AttendantIcon";

const fullConfig = resolveConfig(JSON.parse(tailwindConfig));
console.log(fullConfig);

export default function App() {
  const [active, setActive] = useState(false);
  function toggle() {
    setActive(!active);
  }

  useEffect(() => {
    if (active) {
      const newAudio = new Audio("/ding.mp3");
      newAudio.play();
    }
  }, [active]);

  return (
    <div className={"w-full h-full flex items-center justify-center relative"}>
      {/* <div
        className={clsx(
          "absolute inset-0 transition-all duration-1000 -z-50",
          active ? "bg-orange-100 animate-pulse-fast" : null
        )}
      /> */}
      <button
        onClick={toggle}
        className={clsx(
          active
            ? "translate-y-[2px] text-amber-100"
            : "text-white",
          " p-4 font-semibold active:translate-y-[2px] px-6 transition-all duration-200 relative rounded-full flex items-center gap-2"
        )}
      >
        <div
          className={clsx(
            active
              ? "from-orange-400 to-orange-500 shadow-orange-glow-light animate-pulse-fast "
              : " from-slate-500 to-slate-600",
            "bg-gradient-to-b absolute inset-0 rounded-full transition-all duration-300 -z-10  "
          )}
        />
        <AttendantIcon
          size={24}
          lineWidth="4"
          color={active ? fullConfig.theme.colors.amber["100"] : "white"}
          className={"transition-all duration-1000 "}
        />
        <span>Call moderator</span>
      </button>
    </div>
  );
}
