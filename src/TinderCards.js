import React, {useState} from 'react'
import "./TinderCards.css"
import TinderCard from 'react-tinder-card'

function TinderCards() {
    const [people, setPeople] = useState([
        {
        name: "Alex Honnold",
        url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRjBM6hf-xoCwF1jXrO8tsQkAEKWXFAvZRN3JLdhS0Q1qCJl3Bm10zOzEPcckqfRa1o2ZtPMehQKtuzeBI"
    },
        {
        name: "Markis Nguyen",
        url: "https://media.licdn.com/dms/image/C4D03AQEvPj7YrjPepA/profile-displayphoto-shrink_800_800/0/1618274910580?e=1691020800&v=beta&t=a50m7Xd-D65Xk4hQbeVtpCN5J19KgTXH1mFFm7gJOyY"
    }
    ])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
    }

    const outOfFrame = name => {
        console.log(name + " left the screen")
    }

  return (
    <div className="tinderCards">
        <div className="tinderCards__cardContainer">
        {people.map(person => (
            <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                <div style={ {backgroundImage: `url(${person.url})`}}
                className="card">
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
        </div>
    </div>
  )
}

export default TinderCards