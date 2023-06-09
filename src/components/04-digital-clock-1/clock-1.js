import React from 'react';
import './clock-1.scss'
import moment from 'moment';

const Clock1 = () => {
    const dateTime = moment();
    const timeStr = moment().format('HH:mm');
    const dateStr = dateTime.format('LL');
    const dayStr = moment().format('dddd');
    const hour = moment().hours;
    let message = '';

    if(hour >= 6 && hour <11){
        message = 'MORNING'
    }else if(hour>=11 && hour <14){
        message = 'NOON'
    }else if(hour>=14 && hour <17){
        message = 'AFTERNOON'
    }else if(hour>=17 && hour < 22){
        message = 'EVENING'
    }else{
        message = 'NIGHT'
    }


  return (
    <div className='digital-saat'>
            <div className='time'>{timeStr}</div>
            <div>
                <div className='date'>{dateStr}</div>
                <div className='day'>{dayStr}, {message}</div>
            </div>
        </div>
  )
}

export default Clock1