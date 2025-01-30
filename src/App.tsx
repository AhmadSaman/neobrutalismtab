import { useEffect, useState } from "react";
import { useThemeStore } from "@/theme";
import { cn } from "@/lib/utils";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { Button } from "./components/ui/button";

function getRandomTheme() {
  const colors = [
    "pastel-orange",
    "light-gold",
    "",
    "light-gold",
    "bittersweet",
    "kiwi-green",
    "purple-mimosa",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function getRandomDateLang() {
  const lang = [undefined, "ja", "es", "de", "en", "ar", "ko-KR"];

  const randomIndex = Math.floor(Math.random() * lang.length);
  return lang[randomIndex];
}

function App() {
  const {
    theme: { hasDots, type },
    toggleDots,

    setType,
  } = useThemeStore((state) => state);

  const [time, setTime] = useState({
    hh: new Date().getHours(),
    mm: new Date().getMinutes(),
    ss: new Date().getSeconds(),
  });
  const [dateLang, setDateLang] = useState<undefined | string>(undefined);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime({
        hh: new Date().getHours(),
        mm: new Date().getMinutes(),
        ss: new Date().getSeconds(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    setType(getRandomTheme());
    toggleDots();
  };
  const handleClickDateLang = () => {
    setDateLang(getRandomDateLang());
  };

  return (
    <div
      className={cn(
        "h-screen w-screen flex flex-col bg-bg font-poppins",
        type,
        {
          "bg-[radial-gradient(#80808080_1px,transparent_1px)] [background-size:16px_16px]":
            hasDots,
        }
      )}
    >
      <div className="flex flex-col m-auto gap-3">
        <Button
          onClick={handleClick}
          className="w-[300px] h-fit content-center font-black text-7xl text-center p-2 m-auto"
        >
          <NumberFlowGroup>
            <NumberFlow value={time.hh} format={{ minimumIntegerDigits: 2 }} />
            <NumberFlow
              prefix=":"
              value={time.mm}
              format={{ minimumIntegerDigits: 2 }}
            />
          </NumberFlowGroup>
        </Button>
        <div className="text-center flex flex-col gap-10">
          <button
            onClick={handleClickDateLang}
            className="text-xl font-semibold dark:text-main"
          >
            {new Date().toLocaleDateString(dateLang, {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </button>
          <div className="grid grid-cols-5 gap-4">
            {/* {shortcuts.map((url) => (
              <Button asChild variant="reverse" size={"icon"} className="p-1">
                <a
                  key={url}
                  href={url}
                  rel="noopener noreferrer"
                  className="size-full"
                >
                  <img
                    // TODO: find better way to get favicon
                    src={`${new URL(url).origin}/favicon.ico`}
                    alt="favicon"
                    className="rounded overflow-hidden"
                  />
                </a>
              </Button>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
