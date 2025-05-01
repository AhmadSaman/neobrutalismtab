import { useEffect, useState } from "react";
import { useThemeStore } from "@/theme";
import { cn } from "@/lib/utils";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { Button } from "./components/ui/button";
import { Plus, X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";

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

  const [shortcuts, setShortcuts] = useState<{ title: string; url: string }[]>(
    () => JSON.parse(localStorage.getItem("shortcuts") || "[]")
  );

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
            {shortcuts.map((shortcut) => (
              <TooltipProvider key={shortcut.url} delayDuration={500}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button asChild variant="reverse" className="p-1 w-full">
                      <a
                        href={shortcut.url}
                        rel="noopener noreferrer"
                        className="size-full"
                      >
                        {shortcut.title}
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" sideOffset={10}>
                    <button
                      onClick={() => {
                        const updatedShortcuts = shortcuts.filter(
                          (s) => s.url !== shortcut.url
                        );
                        setShortcuts(updatedShortcuts);
                        localStorage.setItem(
                          "shortcuts",
                          JSON.stringify(updatedShortcuts)
                        );
                      }}
                      className="flex justify-center my-auto"
                    >
                      <X className="size-4" />
                    </button>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
            <Button
              onClick={() => {
                const title = prompt("Enter shortcut title:");
                const url = prompt("Enter shortcut URL:");
                if (title && url) {
                  const newShortcut = { title, url };
                  const updatedShortcuts = [...shortcuts, newShortcut];
                  setShortcuts(updatedShortcuts);
                  localStorage.setItem(
                    "shortcuts",
                    JSON.stringify(updatedShortcuts)
                  );
                }
              }}
              variant="reverse"
              size={"icon"}
              className="p-1"
            >
              <Plus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
