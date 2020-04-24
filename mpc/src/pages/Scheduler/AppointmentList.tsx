import React from 'react';
import './style.css';
import { IonIcon } from '@ionic/react';

import Moment from 'react-moment';
import { openOutline } from 'ionicons/icons';

interface Academic {
    name: string
}

interface Appointment {
    id: string,
    user: {
        name: string,
        image: string
    },
    academic_list: Academic[],
    datetime: Date,
    concern: string,
    venue: string,
    description: string,
    status: string,
}

interface Props {
    user?: {},
    appointment_list?: Appointment[]
}

const LOAD_UPCOMING: React.FC<Props> = ({ appointment_list }: Props) => {
    return (
        <React.Fragment>
            {appointment_list && appointment_list.map((appointment, index) => {
                const datetime = new Date(appointment.datetime);
                return (
                    <React.Fragment key={index}>
                        {
                            appointment.status === "Upcoming" ?
                                <div className="container-card">
                                    <div className="container-header">
                                        <div className="datetime"><Moment format="ddd, MMM DD HH:mm A" date={datetime} /> </div>
                                        <div className="concern">{appointment.concern}</div>
                                    </div>
                                    <div className="container-content">
                                        <div>
                                            <div className="avatar">
                                                <img src={appointment.user.image} alt={appointment.user.name} />
                                            </div>
                                        </div>
                                        <div className="container-user">
                                            <div className="name">{appointment.user.name}</div>
                                            <div className="venue"><div>{appointment.venue}</div></div>
                                        </div>
                                        <div className="container-open"><IonIcon icon={openOutline} /></div>
                                    </div>
                                </div> : null
                        }
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    );
}

const LOAD_FINISHED: React.FC<Props> = ({ appointment_list }: Props) => {
    return (
        <React.Fragment>
            {appointment_list && appointment_list.map((appointment, index) => {
                const datetime = new Date(appointment.datetime);
                return (
                    <React.Fragment key={index}>
                        {
                            appointment.status === "Finished" ?
                                <div className="container-card">
                                    <div className="container-header">
                                        <div className="datetime"><Moment format="ddd, MMM DD HH:mm A" date={datetime} /> </div>
                                        <div className="concern">{appointment.concern}</div>
                                    </div>
                                    <div className="container-content">
                                        <div>
                                            <div className="avatar">
                                                <img src={appointment.user.image} alt={appointment.user.name} />
                                            </div>
                                        </div>
                                        <div className="container-user">
                                            <div className="name">{appointment.user.name}</div>
                                            <div className="venue"><div>{appointment.venue}</div></div>
                                        </div>
                                        <div className="container-open"><IonIcon icon={openOutline} /></div>
                                    </div>
                                </div> : null
                        }
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    );
}

const APPOINTMENT_LIST: React.FC<Props> = ({ appointment_list }: Props) => {
    return (
        <React.Fragment>
            <div className="label">Upcoming</div>
            <LOAD_UPCOMING appointment_list={appointment_list} />
            <div className="label">Finished</div>
            <LOAD_FINISHED appointment_list={appointment_list} />
        </React.Fragment>
    )

};

export default APPOINTMENT_LIST;
