import React, { useEffect } from "react";
import { useState } from "react";

export default function DateComp() {
    const [currentTime, setTime] = useState();
    const [day, setDay] = useState('')

    const dayArray = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
    ];
    
    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            const hours = date.getHours()
            const minutes = date.getMinutes()
            const seconds = date.getSeconds()
            const dayOfWeek = date.getDay()
            
            const newDay = dayArray[dayOfWeek] 
            const time = hours + ':' + minutes + ':' + seconds 
            setDay(newDay)
            setTime(time)
        }, 1000)
    })

    let count = 0
    const weekDayMap = dayArray.map((a) => {
        return (
            <h3 className={`weekday ${day == `${a}`? day : '0'}`} key={a}>{a}</h3>
        )
    }) 


    return (
       <div className="date--container">
            <div className="date--currenttime">
                <h1>{currentTime}</h1>
            </div>
            <div className="date--weekmap">
                <div>{weekDayMap}</div>
            </div>
       </div>
    )
}