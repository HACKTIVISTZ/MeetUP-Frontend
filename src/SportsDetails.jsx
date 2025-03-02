import React, { useRef, useState, useEffect } from "react";

import PropTypes from "prop-types";
function SportsDetails(props) {
  const [activity, setActivity] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState("");
  const prevUrlRef = useRef("");
  let x = 0;
  console.log("Test Case");
  useEffect(() => {
    // console.log(props);
    let url = props.name === "" ? "" : `?venue=${props.name}`;
     console.log(props);
    if (props.name === "" && props.skill != "") url = `?skill=${props.skill}`;

    const options = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
