import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bhavan Sai Ballimpalli </span>
            from <span className="purple"> Rajahmundry,Andhra Pradesh, India.</span>
            <br />I am a graduate B.Tech with stream of Electronics and Communication Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>

            <li className="about-activity">
              <ImPointRight /> Drawings
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you're lazy, you'll be crazy."{" "}
          </p>
          <footer className="blockquote-footer">Bhavan Sai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
