import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import DisplayTemplete from "./DisplayTemplete";
import ButtonTemplete, { buttons, buttons1 } from "./ButtonTemplete";

function FetchData(props) {
  const [missions, setMissions] = useState([]);
  const url = "https://api.spaceXdata.com/v3/launches?limit=100";
  const [config, setConfig] = useState({
    params: { launch_year: undefined, launch_success: undefined },
  });

  useEffect(() => {
    axios
      .get(url, config)
      .then((response) => {
        setMissions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [config]);

  const clickHandler = (event) => {
    const { name, value } = event.target;

    setConfig((prevConfig) => {
      if (name === "launch_year") {
        const btn = buttons.find((button) => button.id === event.target.value);
        btn.selected = !btn.selected;
        if (value === prevConfig.params.launch_year) {
          return {
            params: {
              launch_year: undefined,
              launch_success: prevConfig.params.launch_success,
            },
          };
        } else {
          return {
            params: {
              launch_year: value,
              launch_success: prevConfig.params.launch_success,
            },
          };
        }
      } else if (name === "launch_success") {
        const btn = buttons1.find((button) => button.id === event.target.value);
        btn.selected = !btn.selected;
        if (value === prevConfig.params.launch_success) {
          return {
            params: {
              launch_year: prevConfig.params.launch_year,
              launch_success: undefined,
            },
          };
        } else {
          return {
            params: {
              launch_year: prevConfig.params.launch_year,
              launch_success: value,
            },
          };
        }
      }
    });

    console.log(config);
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-5">
        SpaceX Launch Programs
      </h1>
      <div className="flex md:flex-row flex-wrap">
        <div className="w-full md:w-1/4 p-4 text-center text-black-200">
          <h1 className="text-center text-2xl mb-3 font-semibold">Filters</h1>
          <h1 className="text-center text-xl">Launch Years</h1>
          <div className="grid space-x-1 gap-y-4 grid-cols-3">
            {buttons.map((button) => {
              return (
                <ButtonTemplete
                  className={button.selected ? "btnClicked" : "btn"}
                  id={button.id}
                  onClick={clickHandler}
                  name={button.name}
                  value={button.value}
                />
              );
            })}
          </div>

          <h1 className="text-center text-xl mt-5">Successful Launch</h1>
          <div className="grid space-x-1 gap-y-4 grid-cols-2">
            {buttons1.map((button) => {
              return (
                <ButtonTemplete
                  className={button.selected ? "btnClicked" : "btn"}
                  id={button.id}
                  onClick={clickHandler}
                  name={button.name}
                  value={button.value}
                />
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-3/4 p-4 text-center text-gray-700">
          <div className="grid space-x-1 gap-y-4 grid-cols-4 ">
            {missions.map((mission) => {
              return (
                <DisplayTemplete
                  key={mission.flight_number}
                  image={mission.links.mission_patch_small}
                  missionName={mission.mission_name}
                  flightName={mission.flight_number}
                  launchYear={mission.launch_year}
                  launchSuccess={mission.launch_success}
                  landSuccess={mission.rocket.first_stage.cores[0].land_success}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FetchData;

{
  /* <button
            className={"btn"}
            id="2006"
            onClick={clickHandler}
            name="launch_year"
            value="2006"
          >
            2006
          </button>
          <button
            className={"btn"}
            id="2007"
            onClick={clickHandler}
            name="launch_year"
            value="2007"
          >
            2007
          </button>
          <button
            className={"btn"}
            id="2008"
            onClick={clickHandler}
            name="launch_year"
            value="2008"
          >
            2008
          </button>
          <button
            className={"btn"}
            id="2009"
            onClick={clickHandler}
            name="launch_year"
            value="2009"
          >
            2009
          </button>
          <button
            className={"btn"}
            id="2010"
            onClick={clickHandler}
            name="launch_year"
            value="2010"
          >
            2010
          </button>
          <button
            className={"btn"}
            id="2011"
            onClick={clickHandler}
            name="launch_year"
            value="2011"
          >
            2011
          </button>
          <button
            className={"btn"}
            id="2012"
            onClick={clickHandler}
            name="launch_year"
            value="2012"
          >
            2012
          </button>
          <button
            className={"btn"}
            id="2013"
            onClick={clickHandler}
            name="launch_year"
            value="2013"
          >
            2013
          </button>
          <button
            className={"btn"}
            id="2014"
            onClick={clickHandler}
            name="launch_year"
            value="2014"
          >
            2014
          </button>
          <button
            className={"btn"}
            id="2015"
            onClick={clickHandler}
            name="launch_year"
            value="2015"
          >
            2015
          </button>
          <button
            className={"btn"}
            id="2016"
            onClick={clickHandler}
            name="launch_year"
            value="2016"
          >
            2016
          </button>
          <button
            className={"btn"}
            id="2017"
            onClick={clickHandler}
            name="launch_year"
            value="2017"
          >
            2017
          </button>
          <button
            className={"btn"}
            id="2018"
            onClick={clickHandler}
            name="launch_year"
            value="2018"
          >
            2018
          </button>
          <button
            className={"btn"}
            id="2019"
            onClick={clickHandler}
            name="launch_year"
            value="2019"
          >
            2019
          </button>
          <button
            className={"btn"}
            id="2020"
            onClick={clickHandler}
            name="launch_year"
            value="2020"
          >
            2020
          </button> */
}
{
  /* <h1 className="text-center text-xl mt-5">Successful Launch</h1>
          <button
            className={"btn"}
            id="true"
            onClick={clickHandler}
            name="launch_success"
            value="true"
          >
            True
          </button>
          <button
            className={"btn"}
            id="false"
            onClick={clickHandler}
            name="launch_success"
            value="false"
          >
            False
          </button> */
}
