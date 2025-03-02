import "./App.css";
import Card from "./Card.jsx";
function Team() {
  return (
   <>
      <div className="app">
        <main className="main-content">
          <h1 className="title">Meet Our Team</h1>
          <div className="TeamCard">
            <Card
              name="Unmesh Ghosh"
              pic="Unmesh.jpg"
              role="Team Lead"
              linkedin="https://www.linkedin.com/in/unmesh-ghosh/"
              github="https://github.com/Unmesh100"
            />
  );
}

export default Team;
