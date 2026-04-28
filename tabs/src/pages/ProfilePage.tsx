import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import React from "react";
import ExploreContainer from '../components/ExploreContainer';
const ProfilePage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Profile</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      User profile goes here
    </IonContent>
    <ExploreContainer name="Tab 2 page" />
  </IonPage>
);

export default ProfilePage;
