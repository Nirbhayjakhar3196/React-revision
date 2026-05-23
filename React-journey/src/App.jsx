import './UserCard.css'

function UserCard(props){

  return (
    
    <div className="card">
      <img src={props.img} alt="img" />
      <h2>{props.name}</h2>
      <p>Age : {props.age}</p>
      <p>Skills : {props.skills}</p>
      <p>City : {props.city}</p>
      <p>Hooby : {props.hobby}</p>
      <p>Followers : {props.followers}</p>
      {props.isOnline? <h1>🟢 Online</h1> : <h1>🔴 Offline</h1> }
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
      skills: "HTML, CSS, JS, React",
      city: "Rohtak",
      hooby:"Games",
      followers:58,
      isOnline:false
    },
    {
      id: 2,
      img:"https://i.pinimg.com/736x/31/55/e0/3155e0b8ae312ab867ccbabc86af2189.jpg",
      name: "Jatin",
      age: 19,
      skills: "HTML, CSS, JS",
      city: "Delhi",
      hooby:"Song",
      followers:48,
      isOnline:true
    },

    {
      id: 3,
      img:"https://i.pinimg.com/736x/da/e7/d6/dae7d6ab8e2abd3e74d776a5fd49a6cb.jpg",
      name: "Bhavi",
      age: 17,
      skills: "HTML, CSS",
      city: "Rohtak",
      hooby:"sleeping",
      followers:67,
      isOnline:true
    },
    {
      id:4,
      img:"https://i.pinimg.com/736x/d2/04/d7/d204d7256977f11f733a7ddd73c92e5e.jpg ",
      name:"Mukesh",
      age: 35,
      skills: "HTML, CSS, MERN, Node.js",
      city: "Majra",
      hooby:"Shopping",
      followers:69,
      isOnline:false
    }
  ]

  return(
    
    <div>
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
            hobby={user.hooby}  
            followers={user.followers}        
          
          />
        ))
      }
    </div>
  )
}



export default App