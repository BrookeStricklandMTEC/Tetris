import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
// import {Game} from './game/game'
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';



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
        <IonButton className='game-button' shape='round' fill='outline' > Play Game </IonButton>
        {/* onClick={Redirect to='Game'} */}
      </div>
    </IonContent>
    </IonPage >
  );
};

export default Game;
