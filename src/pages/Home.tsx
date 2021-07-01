import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import "../styles/auth.scss";

export function Home() {
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
          <button>
            <img src={googleIconImg} alt="Google" />
            Create your room with Google.
          </button>
          <div>Or Enter in one Room</div>
          <form action="">
            <input type="text" placeholder="Enter with the room code" />
            <button type="submit">Enter</button>
          </form>
        </div>
      </main>
    </div>
  );
}
