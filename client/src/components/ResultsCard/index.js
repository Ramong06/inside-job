import React from "react";
import { Card } from "react-bootstrap";

function ResultsCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ResultsCard;

//need to add shadwow box effect, round edges, and possibly colored header
// box-shadow: 10px 10px 5px grey;
//border-radius: 10px; or create a class rounded to put on the cards
