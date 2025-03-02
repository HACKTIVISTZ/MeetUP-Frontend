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
 fetch(`https://meetup-backend-ti7h.onrender.com/KickIt/home${url}`, options)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((error) => console.log("here we go"));
  });

  x++;
  const footballStyle = {
    width: "1000px",
    padding: "10px",
    backgroundColor: "white",
    color: "black",
    borderRadius: "10px",
    marginTop: "20px",
    boxSizing: "border-box",
  };
  const eventDetailsStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    fontSize: "20px",
  };
