import { puppyList } from './data.js'
import { useState } from 'react'

const App = () => {
 const [puppies, setPuppies] = useState(puppyList) 




  return (
    <div>
       {puppies.map((puppy) => {
        return <p key={puppy.id}> {puppy.name} </p>
    })}



    </div>
  )
}

export default App
