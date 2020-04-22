import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import React, { Component } from 'react';
import './style.css';

import LOAD_CALENDAR from './Calendar';

interface Props {};

interface State {
    user?: {}
};

class SCHEDULER extends Component<Props, State>  {

    render() {
        return (
            <IonPage>
                 <IonHeader>
                <IonToolbar>
                  <IonTitle>Blank</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent>
                <IonHeader collapse="condense">
                  <IonToolbar>
                    <IonTitle size="large">Blank</IonTitle>
                  </IonToolbar>
                </IonHeader>
                <LOAD_CALENDAR />
              </IonContent>
            </IonPage>
          );
    }
}

export default SCHEDULER;
