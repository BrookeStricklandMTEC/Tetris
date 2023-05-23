import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
// import {Game} from './game/game'
import './Tab1.css';
import { StyledStartButton } from './components/StartButton/StartButton.styles';
import ExploreContainer from './components/ExploreContainer';

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
          <StyledStartButton> </StyledStartButton>
      </IonContent>
    </IonPage >
  );
};

export default Game;
