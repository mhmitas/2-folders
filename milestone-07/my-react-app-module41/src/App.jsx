import { useState } from "react"
import Watches from "./components/watch/Watches"
import SmartWatches from "./watchData"
import { useEffect } from "react"
import Laptops from "./components/watch/laptops"

function App() {


  const [laptops, setLaptops] = useState([])

  useEffect(() => {
    fetch('laptops.json')
      .then(res => res.json())
      .then(data => setLaptops(data))
  }, [])


  const smartWatch = SmartWatches
  console.log(smartWatch)

  return (
    <div>
      <h2>Hello World, Wellcome to the World of REACT JS</h2><hr />

      <div className="container">
        {
          laptops.map(laptop => <Laptops key={laptop.id} laptop={laptop} />)
        }
      </div><hr />
      <div className="container">
        {
          smartWatch.map(watch => <Watches key={watch.id} watch={watch} />)
        }
      </div>



    </div>
  )
}

export default App
