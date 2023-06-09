import React from 'react';
import "./profile-card.scss";
import Statistics from './statistics/statistics';



const ProfileCard = (props) => {
    const img = require(`../../assets/img/${props.image || 'profile-card.jpg'}`);
    const profileBackground = {
        backgroundImage: `url(${img})`
    };

 
    return (
        <div className='profile-card'>
            <div className='header' style={profileBackground}>
            </div>
            <div className='content'>
                <div className='avatar' style={profileBackground}></div>
                <h3>{props.name}</h3>
                <h5>{props.location}</h5>
                <div className='stats'>
                    {
                        props.statistics.map((item, idx)=>(<Statistics 
                            key={idx} 
                            title={item.title}
                            stat={item.stat} />))
                    }
                    
              {/*
                <Statistics title='Shot' stat={2}/>
                <Statistics title='Follower' stat={313}/>
                <Statistics title='Following' stat={571}/>
               */}


                {/*   <div>
                        <h2>2</h2>
                        <span>Shot</span>
                    </div>
                    <div>
                        <h2>234</h2>
                        <span>Follower</span>
                    </div>
                    <div>
                        <h2>327</h2>
                        <span>Following</span>
                    </div>
                     */} 
                </div>
            </div>
        </div>
    )
};

export default ProfileCard;