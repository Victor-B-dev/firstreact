import { puppyList } from './data.js'
import { useState } from 'react'


const App = () => {
 const [puppies, setPuppies] = useState(puppyList) 
 const [featPupId, setFeatPupId] = useState(null)

 const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)


  return (
    <>
      <h1> The Puppy List </h1>

      <section>
       {puppies.map((puppy) => {
        return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>
          {puppy.name}
        </p>
        })}
      </section>

      <section>
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      </section>

    </>
  )
}

export default App
