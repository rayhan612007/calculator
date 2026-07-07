import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="h-screen flex items-center  justify-center bg-blue-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl shadow-red-500 w-80">
        
        {/* Display */}
        <input
          type="text"
          value={input}
          readOnly
          className="w-full h-16 text-right text-2xl px-4 rounded-lg mb-4 bg-gray-700 text-white outline-none"
        />

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={clearInput}
            className="col-span-2 bg-red-500 text-white py-3 rounded-lg hover:shadow-xl hover:shadow-red-700 hover:bg-red-600"
          >
            AC
          </button>

          <button
            onClick={() => handleClick("/")}
            className="bg-orange-500 text-white py-3 rounded-lg"
          >
            /
          </button>

          <button
            onClick={() => handleClick("*")}
            className="bg-orange-500 text-white py-3 rounded-lg"
          >
            ×
          </button>

          <button
            onClick={() => handleClick("7")}
            className="bg-gray-600 text-white py-3 rounded-lg"
          >
            7
          </button>

          <button
            onClick={() => handleClick("8")}
            className="bg-gray-600 text-white py-3 rounded-lg"
          >
            8
          </button>

          <button
            onClick={() => handleClick("9")}
            className="bg-gray-600 text-white py-3 rounded-lg"
          >
            9
          </button>

          <button
            onClick={() => handleClick("-")}
            className="bg-orange-500 text-white py-3 rounded-lg"
          >
            -
          </button>

          <button
            onClick={() => handleClick("4")}
            className="bg-gray-600 text-white py-3 rounded-lg"
          >
            4
          </button>

          <button
            onClick={() => handleClick("5")}
            className="bg-gray-600 text-white py-3 rounded-lg"
          >
            5
          </button>

          <button
            onClick={() => handleClick("6")}
            className="bg-gray-600 text-white py-3 rounded-lg"
          >
            6
          </button>

          <button
            onClick={() => handleClick("+")}
            className="bg-orange-500 text-white py-3 rounded-lg"
          >
            +
          </button>

          <button
            onClick={() => handleClick("1")}
            className="bg-gray-600 text-white py-3 rounded-lg"
          >
            1
          </button>

          <button
            onClick={() => handleClick("2")}
            className="bg-gray-600 text-white py-3 rounded-lg"
          >
            2
          </button>

          <button
            onClick={() => handleClick("3")}
            className="bg-gray-600 text-white py-3 rounded-lg"
          >
            3
          </button>

          <button
            onClick={calculate}
            className="row-span-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-900  hover:shadow-xl hover:shadow-green-500"
          >
            =
          </button>

          <button
            onClick={() => handleClick("0")}
            className="col-span-2 bg-gray-600 text-white py-3 rounded-lg"
          >
            0
          </button>

          <button
            onClick={() => handleClick(".")}
            className="bg-gray-600 text-white py-3 rounded-lg"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;