import Home from "./Pages/Home";
import { GoCode } from "react-icons/go";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#2C3E50] to-[#000000] min-h-screen relative">
      <Home />
      <h1 className="absolute bottom-3 right-3 max-sm:mt-[100px] flex items-center gap-1 text-violet-300">
        <GoCode />
        <span>by</span>
        <span>
          <a
            href="https://github.com/yassinehaimouch"
            rel="noreferrer"
            target={"_blank"}
            className="border-b-[1px] border-violet-500 hover:text-violet-500 "
          >
            Yassine Haimouch
          </a>
        </span>
      </h1>
    </div>
  );
}

export default App;
