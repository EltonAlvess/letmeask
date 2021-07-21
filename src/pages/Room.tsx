import { useParams } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';

import '../styles/room.scss';

type roomParams = {
  id: string;
}

export function Room(){
  const params = useParams<roomParams>();
  
  return(
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={params.id} />
        </div>
      </header>
      <main className="content">
        <div className="room-title">
          <h1>React Room Title</h1>
          <span>5 questions</span>
        </div>

        <form>
          <textarea className="" placeholder="What do u wanna ask?" />
          <div className="form-footer">
            <span>To send a question, <button>login first!</button></span>
            <Button type="submit">Send Question</Button>
          </div>
        </form>
      </main>
    </div>
  )
}