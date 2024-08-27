
import { useState, useEffect} from  'react';


const People = () => {

    const [info, setUsers] = useState([])

    useEffect(()=>{
        const apiUrl = `https://jsonplaceholder.typicode.com/users`


fetch(apiUrl)
 .then(response => response.json())
 .then((data)=>{
    console.log(data);
    setUsers(data);
    
 })
    })


const people = info.map((user,index)=>{
return(

    <ul key={index}>
        <li>{user.name}</li>
        <li>{user.username}</li>
        <li>{user.address.city}</li>
        <li>{user.address.street}</li>
        <li>{user.email}</li>
    </ul>

)

















})





  return (
    <>
        <div>
            {people}
        </div>
    </>
  )
}

export default People