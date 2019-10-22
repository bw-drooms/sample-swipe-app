import React, { Component } from "react";
import { render } from "react-dom";

import Swipeable from "react-swipy";
import Card from "./components/Card";
import Button from "./components/Button";
import NavBar from "./components/BtmNavBar";

const appStyles = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection:"column",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
};

const wrapperStyles = { position: "relative", width: "250px", height: "250px" };
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
};

class App extends Component {
  state = {
    cards: ["First", "Second", "Third"]
  };

  remove = () =>
    this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));

  render() {
    const { cards } = this.state;

    return (
      <div style={appStyles}>
        
        <div style={wrapperStyles}>
          {cards.length > 0 && (
            <div style={wrapperStyles}>
              <Swipeable
                buttons={({ right, left }) => (
                  <div style={actionsStyles}>
                    <Button onClick={left}>Reject</Button>
                    
                    <Button onClick={right}>Accept</Button>
                  </div>
                )}
                onAfterSwipe={this.remove}
              >
                <Card>{cards[0]}</Card>
              </Swipeable>
              <NavBar/>
              {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>}
            </div>
             )}
          {cards.length <= 1 && <Card zIndex={-2}>No more cards</Card>}
          
        </div>

      </div>
    );
  }
}

render(<App />, document.getElementById("root"));