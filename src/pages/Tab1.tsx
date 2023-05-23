import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
// import {Game} from './game/game'
import './Tab1.css';
import StartButton from './components/StartButton/StartButton';


const Game: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Play </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Play</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='button-wrapper'>
          <StartButton> </StartButton>
        </div>
      </IonContent>
    </IonPage >
  );
};

export default Game;
