import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./Home.scss";
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";
import domain from "../../util/domain";


// class Home extends React.Component {

//   constructor(props) {
//     super(props);
//     this.handleJoinRoom = this.handleJoinRoom.bind(this);
//   }
//   componentDidMount() {
//   }

//   handleJoinRoom() {
//     this.props.history.push('/room');
//   }

function Home() {

  const { user } = useContext(UserContext);

  return (
    <div className="home">
      {user === null ? (
        <div className="no-user-message">
          <h2>POC WebRTC Streaming</h2>
          <Link to="/register">Register here</Link>
        </div>
      ) : (user && (
        <div className="no-user-message">
          <h2>You are logged in !</h2>
          <Link to="/stream">Start stream here</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;