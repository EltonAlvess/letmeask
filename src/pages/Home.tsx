import { useHistory } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import "../styles/auth.scss";
import { Button } from "../components/Button";
import firebase from "firebase";
import { auth } from "../services/firebase";

export function Home() {

  const history = useHistory();

  function handleCreateRoom(){
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result =>{
      console.log(result);
    })
    history.push('/rooms/new');
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
          <Button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Google" />
            Create your room with Google.
          </Button>
          <div className="separator">Or Enter in one Room</div>
          <form action="">
            <input type="text" placeholder="Enter with the room code" />
            <Button type="submit">
              Enter
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
