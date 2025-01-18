import { useThemeStore } from "@/theme";
import { cn } from "@/lib/utils";

function App() {
  const {
    theme: { hasDots },
    toggleDots,
  } = useThemeStore((state) => state);

  return (
    <div
      className={cn("h-screen w-screen", {
        "bg-[radial-gradient(#80808080_1px,transparent_1px)] [background-size:16px_16px]":
          hasDots,
      })}
    >
      <p>Ahmad Saman</p>
      <button onClick={toggleDots}>click me</button>
    </div>
  );
}

export default App;
