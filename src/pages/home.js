import React from "react";
import Card from "../components/Cards/Card.js"
import "../components/Cards/Card.css"

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Adjusted to 100vh for full viewport height
        textAlign: "center", // Center align text
        position: "relative" // Added position relative to allow absolute positioning of h1 and h2
      }}
    >
      <img
        src={require("../images/lnmiitt_1_1276x850.jpg")}
        className="lnm"
        alt="LNMIIT Jaipur"
        style={{
          maxWidth: "100%", // Ensure image fits within its container
          maxHeight: "100%", // Ensure image fits within its container
          display: "block" // Ensure image is displayed as a block element
        }}
      />
      <div
        style={{
          position: "absolute", // Position the text absolutely over the image
          top: "20%", // Align text vertically at 50% from top
          left: "50%", // Align text horizontally at 50% from left
          transform: "translate(-50%, -50%)" // Center text both horizontally and vertically
        }}
      >
        <h1 className="heading1">Welcome to LNMIIT Jaipur Guest House Booking System</h1>
        <h2>We are not away from home</h2>
        <div className="start-cards">
          <div className="cardss">
            <Card title={"STANDARD ROOMS IN GUEST HOUSE"} 
            info={"15 Deluxe Rooms - Ground Floor - 5 Rooms, First Floor - 10 Rooms."} />
          </div>
          <div className="cardss">
            <Card title={"DELUXE ROOMS IN GUEST HOUSE"} 
            info={"28 Standard Rooms - Ground Floor - 8 Rooms, First Floor - 10 Rooms, Second Floor - 10 Rooms."} />
          </div>
        </div>
      </div >
      <div >
      
      </div>
     
    </div>
  );
};

export default Home;
