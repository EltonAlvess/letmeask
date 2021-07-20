import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import "../styles/auth.scss";

export function NewRoom() {
  //  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('');

async function handleCreateRoom(event: FormEvent){
  event.preventDefault();
  console.log(newRoom);
}

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Illustration symboling questions and answers"
        />
        <strong>Create Q&amp;A live room</strong>
        <p>Answer the question of your followers in real-time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Create a new Room</h2>
          <form action="" onSubmit={handleCreateRoom}>
            <input 
              type="text" 
              placeholder="Enter with the room name" 
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
              />
            <Button type="submit">Create Room</Button>
          </form>
          <p>
            Do you want to enter in a existing room?{" "}
            <Link to="/">click here!</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
