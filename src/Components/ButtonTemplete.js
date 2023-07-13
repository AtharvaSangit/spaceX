import React from "react";

export const buttons = [
  {
    className: "btn",
    id: "2006",
    selected: false,
    name: "launch_year",
    value: "2006",
  },
  {
    className: "btn",
    id: "2007",
    selected: false,
    name: "launch_year",
    value: "2007",
  },
  {
    className: "btn",
    id: "2008",
    selected: false,
    name: "launch_year",
    value: "2008",
  },
  {
    className: "btn",
    id: "2009",
    selected: false,
    name: "launch_year",
    value: "2009",
  },
  {
    className: "btn",
    id: "2010",
    selected: false,
    name: "launch_year",
    value: "2010",
  },
  {
    className: "btn",
    id: "2011",
    selected: false,
    name: "launch_year",
    value: "2011",
  },
  {
    className: "btn",
    id: "2012",
    selected: false,
    name: "launch_year",
    value: "2012",
  },
  {
    className: "btn",
    id: "2013",
    selected: false,
    name: "launch_year",
    value: "2013",
  },
  {
    className: "btn",
    id: "2014",
    selected: false,
    name: "launch_year",
    value: "2014",
  },
  {
    className: "btn",
    id: "2015",
    selected: false,
    name: "launch_year",
    value: "2015",
  },
  {
    className: "btn",
    id: "2016",
    selected: false,
    name: "launch_year",
    value: "2016",
  },
  {
    className: "btn",
    id: "2017",
    selected: false,
    name: "launch_year",
    value: "2017",
  },
  {
    className: "btn",
    id: "2018",
    selected: false,
    name: "launch_year",
    value: "2018",
  },
  {
    className: "btn",
    id: "2019",
    selected: false,
    name: "launch_year",
    value: "2019",
  },
  {
    className: "btn",
    id: "2020",
    selected: false,
    name: "launch_year",
    value: "2020",
  },
];

export const buttons1 = [
  {
    className: "btn",
    id: "true",
    selected: false,
    name: "launch_success",
    value: "true",
  },
  {
    className: "btn",
    id: "false",
    selected: false,
    name: "launch_success",
    value: "false",
  },
];

function ButtonTemplete(props) {
  return (
    <div>
      <button
        className={props?.className}
        selected={props?.selected}
        id={props?.id}
        onClick={props?.onClick}
        name={props?.name}
        value={props?.value}
      >
        {props.value}
      </button>
    </div>
  );
}

export default ButtonTemplete;
