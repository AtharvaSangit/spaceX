import React from "react";

function DisplayTemplete(props) {
  return (
    <div className="py-3 my-4 w-48 flex-1  bg-slate-50	 drop-shadow-2xl">
      <img className="rounded-t-lg bg-slate-300"  src={props.image} alt="mission"></img>
      <div className="p-3">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.missionName} #{props.flightName}
        </h1>
        <h3 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Launch Year: {props.launchYear}
        </h3>
        <h3 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Successfull Launch: {String(props.launchSuccess)}
        </h3>

        <h3 className="mb-0 font-normal text-gray-700 dark:text-gray-400">
          Successfull Landing: {String(props.landSuccess)}
        </h3>
        
      </div>
    </div>
  );
}

export default DisplayTemplete;
