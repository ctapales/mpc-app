import React, { ReactNode } from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonContent, IonImg, IonAvatar, IonIcon } from '@ionic/react';
import './style.css';

import { ellipsisHorizontalOutline, location, calendarOutline, timeOutline, heart } from 'ionicons/icons';

interface Academic {
    name: string
}
interface Post {
    counselor: {
        name: string,
        image: string,
    },
    schedule: string,
    address: string,
    time: string,
    title: string,
    academic: Academic[],
    venue: string,
    image: string,
    description: string,
    date: string,
    type: string
}

interface Props {
    user?: ReactNode
    post_list?: Post[]
}

const LOAD_LIST: React.FC<Props> = ({ post_list }: Props) => {
    return (
        <React.Fragment>
            {post_list && post_list.map((post, index) => {
                return (
                    <IonCard key={index}>
                        <IonCardHeader>
                            <div className="container-header">
                                <div>
                                    <IonAvatar>
                                        <img src={post.counselor.image} alt={post.counselor.name} />
                                    </IonAvatar>
                                </div>
                                <div className="container-counselor bg-warning">
                                    <div className="name">{post.counselor.name}</div>
                                    <div className="container-academic">
                                        {post.academic.map((academic, index) => <div className="academic" key={index}>{academic.name}</div>)}
                                    </div>
                                </div>
                                <div className="more">
                                    <IonIcon icon={ellipsisHorizontalOutline} />
                                </div>
                            </div>
                        </IonCardHeader>
                        <div className="container-title">
                            <div className="title">{post.title}</div>
                            <div className={post.type === "Event" ? "type-event" : "type-quote"}>{post.type}</div>
                        </div>
                        <IonImg src={post.image} />
                        {post.type === "Event" ?
                            <div className="container-other">
                                <div className="container-schedule">
                                    <div className="icon"><IonIcon icon={location} /></div>
                                    <div>{post.address}</div>
                                </div>
                                <div className="container-schedule">
                                    <div className="icon"><IonIcon icon={calendarOutline} /></div>
                                    <div>{post.schedule}</div>
                                </div>
                                <div className="container-schedule">
                                    <div className="icon"><IonIcon icon={timeOutline} /></div>
                                    <div>{post.time}</div>
                                </div>
                            </div> : null
                        }
                        <IonCardContent>{post.description}</IonCardContent>
                        <div className="container-footer">
                            <div className="like"><IonIcon icon={heart} /></div>
                            <div className="date">{post.date}</div>
                        </div>
                    </IonCard>
                )
            })}
        </React.Fragment>
    )
}


const LOAD_FEED: React.FC<Props> = (props) => {
    return (
        <IonContent
            scrollEvents={true}
            onIonScrollStart={() => { }}
            onIonScroll={() => { }}
            onIonScrollEnd={() => { }}>
            <LOAD_LIST {...props} />
        </IonContent>
    );
};

export default LOAD_FEED;