import React, { useState } from 'react';
import './style.css';
import { IonCard, IonIcon } from '@ionic/react';
import { arrowBack, arrowForward } from 'ionicons/icons';

interface Props { }

const MONTH_LIST = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const LOAD_CALENDAR: React.FC<Props> = () => {
    const [date, setDate] = useState(new Date());
    const currentMonthName = MONTH_LIST[date.getMonth()];
    const currentYear = date.getFullYear();

    let daysOfCurrentMonth = [];
    let daysLastMonth = [];
    let daysNextMonth = [];

    let firstDayMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    let lastDaysPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    for (var a = lastDaysPrevMonth - (firstDayMonth - 1); a <= lastDaysPrevMonth; a++) {
        daysLastMonth.push(a);
    }

    let totalDaysOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    for (var b = 0; b < totalDaysOfCurrentMonth; b++) {
        daysOfCurrentMonth.push(b + 1);
    }

    var lastDayThisMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    for (var c = 0; c < (6 - lastDayThisMonth); c++) {
        daysNextMonth.push(c + 1);
    }

    var totalDays = (daysLastMonth.length) + (daysOfCurrentMonth.length) + (daysNextMonth.length);
    if (totalDays < 36) {
        for (var d = (7 - lastDayThisMonth); d < ((7 - lastDayThisMonth) + 7); d++) {
            daysNextMonth.push(d);
        }
    }

    return (
        <React.Fragment>
            <div className="container-card">
                <div className="container-control">
                    <div className="arrow"><IonIcon onClick={() => setDate(new Date(date.getFullYear(), date.getMonth(), 0))} icon={arrowBack} /></div>
                    <div className="container-month">
                        <div className="month">{currentMonthName} {currentYear}</div>
                    </div>
                    <div className="arrow"><IonIcon onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 2, 0))} icon={arrowForward} /></div>
                </div>
                <div className="container-week">
                    <div className="day-week"><div>Sun</div></div>
                    <div className="day-week"><div>Mon</div></div>
                    <div className="day-week"><div>Tue</div></div>
                    <div className="day-week"><div>Wed</div></div>
                    <div className="day-week"><div>Thu</div></div>
                    <div className="day-week"><div>Fri</div></div>
                    <div className="day-week"><div>Sat</div></div>
                </div>
                <div className="container-dates">
                    {daysLastMonth.map((date, index) => {
                        return (
                            <div key={index} className="day-last">{date}</div>
                        )
                    })}
                    {daysOfCurrentMonth.map((date, index) => {
                        return (
                            <div key={index} className="day-current">{date}</div>
                        )
                    })}
                    {daysNextMonth.map((date, index) => {
                        return (
                            <div key={index} className="day-next">{date}</div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    );
};

export default LOAD_CALENDAR;
