import React from "react";
import "./App.css";
import { auth } from "./firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import DarkMode from "./components/DarkMode/DarkMode";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatRoom from "./components/ChatRoom";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1 style={{ fontFamily: "inherit" }}>A simple messaging app</h1>
        <DarkMode />
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
