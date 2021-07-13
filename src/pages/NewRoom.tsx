import { Link } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import "../styles/auth.scss";
import { Button } from "../components/Button";

export function NewRoom() {
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
          <form action="">
            <input type="text" placeholder="Enter with the room name" />
            <Button type="submit">
              Create Room
            </Button>
          </form>
          <p>
            Do you want to enter in a existing room? <Link to="/">click here!</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
