import React from 'react';
import Apples, { Bananas1, Orange } from './components/01-my-house';
import Jsx1 from './components/02-jsx/01-jsx';
import Jsx2 from './components/02-jsx/02-jsx';
import Jsx3 from './components/02-jsx/03-jsx';
import Jsx4 from './components/02-jsx/04-jsx';
import InlineStyling from './components/03-styles/01-inline-styling';
import InternalStyling from './components/03-styles/02-internal-styling';
import ExternalStyling from './components/03-styles/03-externalStyling';
import ExternalModuleStyling from './components/03-styles/04-external-module-styling.css';
import SassScss from './components/03-styles/05-sass.scss';
import Clock1 from './components/04-digital-clock-1/clock-1';
import Greetings from './components/05-props/01-greetings';
import Products from './components/05-props/05-products';
import Clock2 from './components/06-digital-clock/clock-2';
import Image1 from './components/07-image/01-image';
import ImageGallery from './components/07-image/02-image-gallery';
import ProfileCard from './components/08-profile-card/profile-card';
import BootstrapKlasik from './components/09-bootstrap/bootstrap-klasik';
import BootstrapModern from './components/09-bootstrap/02-bootstrap-modern';

import ReactIcons from './components/10-icons/01-react-icons';
import MaterialIcons from './components/10-icons/02-material-icons';
import Events from './components/11-events/event';

// Style Import
import './assets/scss/style.scss'
import ProductShop from './components/12-product-shop/product-shop';
import State from './components/13-usestate/01-state';
import Counter1 from './components/14-counter-1.js/counter1';
import Birthday from './components/15-birthday/birthday';


const profileCardData ={
    name: 'Simon',
    location: 'Langley, Virginia',
    image: 'profile.jpg',
    statistics: [
        {title: 'Shot', stat: 7},
        {title: 'Follower', stat: 313},
        {title: 'Following', stat: 571}
    ]
}


export default function App() {
    return (
        <>
        {/* <Bananas1 />
            <Orange />
            <Apples />
            <Jsx1 />
            <Jsx2 />
            <Jsx3 />
            <Jsx4/>
            <InlineStyling/>
            <br />
            <br />
            <InternalStyling/>
            <br />
            <br />
            <ExternalStyling/>
            <br />
            <br />
            <ExternalModuleStyling/>
            <br />
            <br />
            <SassScss/>
            <br />
            <br />
            <Clock1/>
            <br />
            <br />
            <Greetings/>
            <Products/>
            <Clock2 textColor='red' bgColor= 'blue'/>
            <Image1/>
            <ImageGallery/>

              <ProfileCard name='Simon' location='Langley, Virginia' 
             image='profile-card.jpg'
             statistics={[
                {title: 'Shot', stat: 7},
                {title: 'Follower', stat: 313},
                {title: 'Following', stat: 571}
            ]}/>
             <ProfileCard name='Svetlana' location='Moscow, Russia'
              image='profile.jpg'
                statistics={[
                    {title: 'Shot', stat: 7},
                    {title: 'Follower', stat: 313},
                    {title: 'Following', stat: 571}
                ]}/> 
            <ProfileCard {...profileCardData}/>
    
        
             <BootstrapKlasik/>

             <BootstrapModern/>
             <ReactIcons/>
             <MaterialIcons/>
             <Events/>
             <ProductShop/>
             <State/>
             
             <Counter1/>
             
             */} 
            <Birthday/>
             
             

             

        
             
            

             

             

             

           

            

            
               
             
   
            
        </>
    )
};