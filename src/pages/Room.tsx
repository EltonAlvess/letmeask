import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

import "../styles/room.scss";

type roomParams = {
  id: string;
};

type FirebaseQuestions = Record<string, {
  author:{
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}>

export function Room() {
  const params = useParams<roomParams>();
  const { user } = useAuth();
  const [newQuestion, setNewQuestion] = useState("");
  const roomId = params.id;

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.once('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions;
      const parsedQuestions = Object.entries(firebaseQuestions ?? {})

      
    })
  }, []);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }

    if (!user) {
      throw Error("you must be logged in");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion("");
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={roomId} />
        </div>
      </header>
      <main className="content">
        <div className="room-title">
          <h1>React Room Title</h1>
          <span>5 questions</span>
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            className=""
            placeholder="What do u wanna ask?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                To send a question, ,<button>do a login!</button>.
              </span>
            )}
            <Button disabled={!user} type="submit">
              Send Question
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
