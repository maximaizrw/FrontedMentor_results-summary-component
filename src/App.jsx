import React from "react";
import data from "../data.json";

const App = () => {
  const getTextColorClass = (category) => {
    switch (category) {
      case "Reaction":
        return "text-red-400";
      case "Memory":
        return "text-yellow-400";
      case "Verbal":
        return "text-green-400";
      case "Visual":
        return "text-blue-600";
      default:
        return "";
    }
  };

  const getBgColorClass = (category) => {
    switch (category) {
      case 'Reaction':
        return 'bg-red-50';
      case 'Memory':
        return 'bg-yellow-50';
      case 'Verbal':
        return 'bg-green-50';
      case 'Visual':
        return 'bg-blue-50';
      default:
        return '';
    }
  };

  return (
    <div className=" h-screen flex flex-col items-center justify-center lg:flex-row">
      <div className="bg-gradient-to-b from-light-slate-blue to-light-royal-blue h-[450px] rounded-b-3xl z-50 lg:rounded-3xl lg:w-80">
        <div className="h-full p-8 flex flex-col justify-between items-center">
          <p className="text-slate-300 font-semibold text-lg">Your Result</p>
          <div className="bg-gradient-to-b from-violet-blue to-persian-blue rounded-full w-40 h-40">
            <div className="flex flex-col h-full items-center justify-center p-4">
              <p className="text-white text-6xl font-semibold">76</p>
              <p className="text-slate-400">of 100</p>
            </div>
          </div>
          <p className="text-2xl text-slate-100 font-medium">Great</p>
          <p className="w-[85%] text-center text-slate-300">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div className="h-[450px] w-full  rounded-r-3xl shadow-2xl lg:w-80 lg:relative lg:-left-5 ">
        <div className="py-8 ml-12 mr-8 overflow-hidden">
          <p className="text-slate-800 font-bold text-lg pb-8">Summary</p>
          <div className="flex flex-col gap-y-4 pb-8">
            {data.map((item) => (
              <div
                className={`flex justify-between p-3 rounded-lg ${getBgColorClass(
                  item.category
                )}`}
                key={item.category}
              >
                <img src={item.icon} alt={item.category} />
                <h3
                  className={`font-medium ${getTextColorClass(item.category)}`}
                >
                  {item.category}
                </h3>
                <p className="text-slate-400 font-medium">
                  <span className="text-slate-800">{item.score}</span> / 100
                </p>
              </div>
            ))}
          </div>
          <button className="bg-slate-800 hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue py-3 w-full rounded-full text-white font-medium">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
