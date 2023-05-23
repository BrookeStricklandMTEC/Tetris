import React from 'react';
import { StyledStartButton } from './StartButton.styles';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';


type Props = {
  callback: () => void;
};

const StartButton: React.FC<Props> = ({ callback }) => (
 <IonButton> <StyledStartButton onClick={callback}>Start Game</StyledStartButton> </IonButton>
);

export default StartButton;