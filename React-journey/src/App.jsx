import './UserCard.css'
import { useState } from 'react'

function UserCard(props){

  const [liked, setLiked] = useState(false)

  return (

    <div className="card">

    <div className="status">
      {props.isOnline ? "🟢 Online" : "🔴 Offline"}
    </div>

    <img src={props.img} alt="img" />

    <h2>{props.name}</h2>

    <p className="city">{props.city}</p>

    <p className="prof">{props.profession}</p>

    <p>Age : {props.age}</p>

    <p>Hobby : {props.hobby}</p>

    <div className="skills-container">

      <h3>Skills</h3>

      {
        props.skills.map((skill, index) => (
          <span className="skill" key={index}>
            {skill}
          </span>
        ))
      }

    </div>

    <div className="stats">

      <div>
        <h3>{props.followers}</h3>
        <p>Followers</p>
      </div>

      <div>
        <h3>{props.skills.length}</h3>
        <p>Skills</p>
      </div>

    </div>

    <button className='like-btn' style={{backgroundColor: liked ? "hotpink" : "red"}} onClick={() => setLiked(!liked)}>
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>

  </div>
)
}

function App(){

  const users = [
    {
      id:1,
      img:"https://i.pinimg.com/736x/e1/34/d0/e134d0b2dec26a4abc597398ca56b7d3.jpg",
      name:"Nirbhay Jakhar",
      age:18,
      skills: ["HTML", "CSS", "JS", "React"],
      city: "Rohtak",
      hobby:"Games",
      followers:58,
      isOnline:false,
      profession:"Full Stack Developer"
    },
    {
      id: 2,
      img:"https://i.pinimg.com/736x/31/55/e0/3155e0b8ae312ab867ccbabc86af2189.jpg",
      name: "Jatin",
      age: 19,
      skills: ["HTML", "CSS", "JS"],
      city: "Delhi",
      hobby:"Song",
      followers:48,
      isOnline:true,
      profession:"Frontend Developer"
    },

    {
      id: 3,
      img:"https://i.pinimg.com/736x/da/e7/d6/dae7d6ab8e2abd3e74d776a5fd49a6cb.jpg",
      name: "Bhavi",
      age: 17,
      skills: ["HTML", "CSS"],
      city: "Rohtak",
      hobby:"sleeping",
      followers:67,
      isOnline:true,
      profession:"Backend Developer"
    },
    {
      id:4,
      img:"https://i.pinimg.com/736x/d2/04/d7/d204d7256977f11f733a7ddd73c92e5e.jpg ",
      name:"Mukesh",
      age: 35,
      skills: ["HTML", "CSS", "MERN", "Node.js"],
      city: "Majra",
      hobby:"Shopping",
      followers:69,
      isOnline:false,
      profession:"Frontend Design Developer"
    }
  ]

  return(
    
    <div className="container">
      {
        users.map((user)=> (
          <UserCard 
            key={user.id}
            name={user.name}
            age={user.age}
            skills={user.skills}
            city={user.city}
            img={user.img}
            isOnline={user.isOnline}
            hobby={user.hobby}  
            followers={user.followers}  
            profession={user.profession}      
          
          />
        ))
      }
    </div>
  )
}



export default App