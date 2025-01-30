import { useEffect, useState } from "react";
import { useThemeStore } from "@/theme";
import { cn } from "@/lib/utils";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { Card, CardContent } from "./components/ui/card";

function App() {
  const {
    theme: { hasDots },
  } = useThemeStore((state) => state);

  const [time, setTime] = useState({
    hh: new Date().getHours(),
    mm: new Date().getMinutes(),
    ss: new Date().getSeconds(),
  });

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

  return (
    <div
      className={cn(
        "h-screen w-screen flex flex-col bittersweet bg-bg font-poppins",
        {
          "bg-[radial-gradient(#80808080_1px,transparent_1px)] [background-size:16px_16px]":
            hasDots,
        }
      )}
    >
      <div className="flex flex-col m-auto gap-3">
        <Card>
          <CardContent className="w-[300px] content-center font-black text-7xl text-center p-2 m-auto">
            <NumberFlowGroup>
              <NumberFlow
                value={time.hh}
                format={{ minimumIntegerDigits: 2 }}
              />
              <NumberFlow
                prefix=":"
                value={time.mm}
                format={{ minimumIntegerDigits: 2 }}
              />
            </NumberFlowGroup>
          </CardContent>
        </Card>
        <div className="text-center flex flex-col gap-10">
          <p className="text-xl font-semibold dark:text-main">
            {new Date().toLocaleDateString(undefined, {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
