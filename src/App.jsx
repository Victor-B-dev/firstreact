import { puppyList } from './data.js'
import { useState } from 'react'

const App = () => {
 const [puppies, setPuppies] = useState(puppyList) 
 const [featPupId, setFeatPupId] = useState(null)

 const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)


  return (
    <div>
      <h1> The Puppy List </h1>

       {puppies.map((puppy) => {
        return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>
          {puppy.name}
        </p>
    })}

      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

    </div>
  )
}

export default App
