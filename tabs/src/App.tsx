import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, settings, person, ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Home from './pages/Home';
import HomeListPage from "./pages/HomeListPage";
import AdminPage from "./pages/AdminPage";
import ProfilePage from "./pages/ProfilePage";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>

          {/* ROUTES */}
          <IonRouterOutlet>

            <Route exact path="/listings" component={HomeListPage} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/profile" component={ProfilePage} />

            {/* Default redirect */}
            <Redirect exact from="/" to="/listings" />

          </IonRouterOutlet>

          {/* TAB BAR */}
          <IonTabBar slot="bottom">

            <IonTabButton tab="listings" href="/listings">
              <IonIcon icon={home} />
              <IonLabel>Listings</IonLabel>
            </IonTabButton>

            <IonTabButton tab="admin" href="/admin">
              <IonIcon icon={settings} />
              <IonLabel>Admin</IonLabel>
            </IonTabButton>

            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={person} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>

          </IonTabBar>

        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
