import React from 'react';
import './style.css';
import { IonIcon } from '@ionic/react';

import Moment from 'react-moment';
import { location, openOutline } from 'ionicons/icons';

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
    status: string
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
                    <div className="container-card" key={index}>
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
                                <div className="venue"><IonIcon icon={location} /><div>{appointment.venue}</div></div>
                            </div>
                            <div className="container-open"><IonIcon icon={openOutline} /></div>
                        </div>
                    </div>
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
                    <div className="container-card" key={index}>
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
                                <div className="venue"><IonIcon icon={location} /><div>{appointment.venue}</div></div>
                            </div>
                            <div className="container-open"><IonIcon icon={openOutline} /></div>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    );
}

const APPOINTMENT_LIST: React.FC<Props> = ({ appointment_list }: Props) => {
    const UPCOMING = appointment_list && appointment_list.filter(function (appointment) {
        return appointment.status === "Upcoming";
    });

    const FINISHED = appointment_list && appointment_list.filter(function (appointment) {
        return appointment.status === "Finished";
    });

    return (
        <React.Fragment>
            <div className="container-label">
                <div className="label">Upcoming</div>
                <div className="count"><div>{UPCOMING?.length}</div></div>
            </div>
            <LOAD_UPCOMING appointment_list={UPCOMING} />
            <div className="container-label">
                <div className="label">Finished</div>
                <div className="count"><div>{FINISHED?.length}</div></div>
            </div>
            <LOAD_FINISHED appointment_list={FINISHED} />
        </React.Fragment>
    )

};

export default APPOINTMENT_LIST;
