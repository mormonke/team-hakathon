import React from "react";
import ThreeDBox from "./model";
import "../style/homePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="back-container">
        <div className="wrapper-right">
          <ThreeDBox />
        </div>

        <div className="wrapper-left">
          <div className="main-text">
            <h2>Coffee with Us</h2>
          </div>
          <div className="text">
            <span className="spTextHome">
              As a Starbucks coffeehouse, I am more than just a place to grab a
              cup of coffee. I am a hub of energy and connection, where people
              come to experience the art and science of coffee. From my inviting
              interior to my delicious drinks and warm customer service, I
              strive to create a unique and memorable experience for every
              customer who walks through my doors. My menu is a delight for
              coffee lovers and enthusiasts alike. I offer a wide range of
              high-quality, ethically sourced coffees from around the world.
              From classic brewed coffee to handcrafted espresso beverages like
              lattes and cappuccinos, I have something for everyone. I also
              offer a variety of teas, refreshing iced beverages, and delectable
              pastries that complement my coffee offerings perfectly.
            </span>
          </div>
          <div className="buttons">
            <a href="/prod">
              <button className="shop">Go to shop</button>
            </a>
            <a href="/auth">
              <button className="logUs">Log In</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
