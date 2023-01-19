import React, { useRef } from "react";
import jh from "../assets/j_h.png";
import jd from "../assets/j_d.png";
import jk from "../assets/j_k.png";
import js from "../assets/j_s.png";
import kd from "../assets/k_d.png";
import kh from "../assets/k_h.png";
import kk from "../assets/k_k.png";
import ks from "../assets/k_s.png";
import qd from "../assets/q_d.png";
import qh from "../assets/q_h.png";
import qk from "../assets/q_k.png";
import qs from "../assets/q_s.png";
import Facedown from "../assets/bicyclebacks.png";

const Home = () => {
  function shuffle(array) {
    array.sort((a, b) => Math.random() - 0.5);
  }

  var a, b, c, d, e, f;

  a = [jd, jh];
  b = [js, jk];
  c = [kd, kh];
  d = [ks, kk];
  e = [qd, qh];
  f = [qs, qk];

  var cards = [a, b, c, d, e, f];

  shuffle(cards);
  shuffle(a);
  shuffle(b);
  shuffle(c);
  shuffle(d);
  shuffle(e);
  shuffle(f);

  var randomCard = Math.floor(Math.random() * 6) + 1;

  const refValue = useRef();
  const refCard1 = useRef();
  const refCard2 = useRef();
  const refCard3 = useRef();
  const refButton = useRef();
  const refStart = useRef();

  cards[randomCard][1] = Facedown;

  const clickHandler = async () => {
    refButton.current.style.display = "none";
    refCard1.current.style.display = "hidden";
    refCard2.current.style.display = "grid";
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    refValue.current.innerHTML =
      "Look at the following 6 cards and choose one. You will have to remember the one you chose.";
    await sleep(5000);
    refValue.current.innerHTML =
      "You only have a few seconds to choose and memorise your card.";
    await sleep(5000);
    refCard1.current.style.display = "grid";
    refCard2.current.style.display = "none";
    refCard3.current.style.display = "none";
    refValue.current.innerHTML = "Let's flip and shuffle all 6 cards.";
    await sleep(6000);
    refValue.current.innerHTML =
      "Your card is the only card that I did not flip back!!!";
    refCard3.current.style.display = "grid";
    refStart.current.style.display = "block";
  };

  return (
    <div className="reltive flex flex-col items-center bg-slate-900 w-full h-full pb-[200px]">
      <div
        className={` grid grid-cols-3 grid-rows-2 gap-5 w-[500px] h-[450px] mx-auto mt-[100px] max-sm:grid-cols-2 max-sm:grid-rows-3 max-sm:w-[300px] max-sm:mt-[20px] max-sm:h-[630px] relative`}
        ref={refCard1}
      >
        <img src={Facedown} alt="card" />
        <img src={Facedown} alt="card" />
        <img src={Facedown} alt="card" />
        <img src={Facedown} alt="card" />
        <img src={Facedown} alt="card" />
        <img src={Facedown} alt="card" />
      </div>

      <div
        className={`hidden grid-cols-3 grid-rows-2 gap-5 w-[500px] h-[450px] mx-auto mt-[100px] max-sm:grid-cols-2 max-sm:grid-rows-3 max-sm:w-[300px] max-sm:mt-[20px] max-sm:h-[630px] absolute top-0`}
        ref={refCard2}
      >
        <img src={cards[0][0]} alt="card" />
        <img src={cards[1][0]} alt="card" />
        <img src={cards[2][0]} alt="card" />
        <img src={cards[3][0]} alt="card" />
        <img src={cards[4][0]} alt="card" />
        <img src={cards[5][0]} alt="card" />
      </div>

      <div
        className={`hidden grid-cols-3 grid-rows-2 gap-5 w-[500px] h-[450px] mx-auto mt-[100px] max-sm:grid-cols-2 max-sm:grid-rows-3 max-sm:w-[300px] max-sm:mt-[20px] max-sm:h-[630px] absolute top-0 `}
        ref={refCard3}
      >
        <img src={cards[0][1]} alt="card" />
        <img src={cards[1][1]} alt="card" />
        <img src={cards[2][1]} alt="card" />
        <img src={cards[3][1]} alt="card" />
        <img src={cards[4][1]} alt="card" />
        <img src={cards[5][1]} alt="card" />
      </div>

      <h1
        className=" mt-8 text-lg font-bold text-gray-200 max-sm:text-center px-[10px]"
        ref={refValue}
      >
        Click on the button below to start the magic trick!
      </h1>
      <button
        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={clickHandler}
        ref={refButton}
      >
        Start The Magic Trick
      </button>
      <button
        ref={refStart}
        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded hidden"
        onClick={() => window.location.reload()}
      >
        Start Again
      </button>
    </div>
  );
};

export default Home;
