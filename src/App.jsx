import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, reset, inc_by } from "./features/counterSlice";

const App = () => {
  let state = useSelector(state => state);
  let dispatch = useDispatch();

  let [val, setVal] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center  gap-3 pb-7">
      <h2 className="sm:text-[16vw] ">{state}</h2>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => dispatch(inc())}
          className="bg-green-500 hover:bg-green-300 px-[5vw] rounded  outline-none sm:text-[5vw] md:text-[4vw]"
        >
          Increment
        </button>
        <button
          className="bg-slate-500 hover:bg-slate-300 px-[5vw] rounded  outline-none  sm:text-[5vw] md:text-[4vw]  "
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
        <button
          className="bg-red-500 hover:bg-red-300 px-[5vw] rounded  outline-none  sm:text-[5vw] md:text-[4vw] "
          onClick={() => dispatch(dec())}
        >
          Decrement
        </button>
        <input
          type="number"
          onChange={e => setVal(e.target.value)}
          className="border-b-4 sm:text-[5vw] md:text-[4vw]  px-3 hover:bg-slate-200"
          placeholder="enter digit ..."
        />
        <button
          className="bg-green-500 hover:bg-green-300 px-[5vw] rounded  outline-none  sm:text-[5vw] md:text-[4vw] "
          onClick={() => dispatch(inc_by(Number(val)))}
        >
          Increment By {val}
        </button>
      </div>
    </div>
  );
};

export default App;
