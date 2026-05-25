import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Tab1.css';

// Inline iframe component inside the same file
const Project7Frame: React.FC = () => {
  return (
    <iframe
      src="https://jssg33.github.io/usc242/project/finalhomes/index.html"
      title="Homes Frame"
      style={{
        width: "100%",
        height: "100%",
        border: "none"
      }}
      loading="lazy"
    />
  );
};

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar><IonHeader></IonHeader>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Homes</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Project7Frame />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

