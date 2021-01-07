import React, { useState, useEffect } from 'react'
import './Card.css';
import TinderCard from 'react-tinder-card'
import axios from './axios'


function Card() {
    const [people, setpeople] = useState([]);


    useEffect(() => {

     async function fetchData(){
       const req = await axios.get("/cards");

       setpeople(req.data);
     }

    fetchData();

    }, []);

  
  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    //setLastDirection(direction)
    //alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    //personsState = personsState.filter(person => person.name !== name)
    //setpersons(personsState)
  }



    return (
        <div className = 'card'>
           < div className='tinderCard_container'>
               {people.map((person) =>(
                 <TinderCard
                    className = 'swipe'
                    key={people.name}
                    onSwipe = { (direction) => swiped(direction, person.name)}
                    onCardLeftScreen = {()=> outOfFrame(person.name)}
                    >
                     <div  style={{ backgroundImage: `url(${person.imgUrl})` }} className='cards'>
                    
                      <h3>{person.name}</h3>
                     
                     </div>        
                 </TinderCard>  
               ))}
           </div>
            
        </div>
    )
}

export default Card;
