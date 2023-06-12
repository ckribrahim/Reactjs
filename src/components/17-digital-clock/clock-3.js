
import { useEffect, useState } from 'react';
import './clock-3.scss'
import moment from 'moment';

const Clock3 = (props) => {

    const [dateTime, setDateTime] = useState(moment());



    
    
    const dateStr = dateTime.format('LL');
    const dayStr = moment().format('dddd');
    const minute = moment().format('mm');
    const second = moment().format('ss');
    const hour = moment().format('HH')
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

    const clockStyle = {
        color: props.textColor,
        backgroundColor: props.bgColor

    }

    useEffect(()=>{
        const timer = setInterval(()=>{
            setDateTime(moment());
        },1000);

        return ()=>{
            clearInterval(timer);
        }
    }, [])


  return (
    <div  style={clockStyle} className='digital-saat3'>
            <div className='time'>{hour}<span style={{opacity: second % 2 === 0 ? 0 : 1 }}>:</span>{minute}</div>
            <div>
                <div className='date'>{dateStr}</div>
                <div className='day'>{dayStr}, {message}</div>
            </div>
        </div>
  )
}

export default Clock3