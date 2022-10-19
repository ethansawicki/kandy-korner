import { useState, useEffect } from "react"

const Locations = () => {
  const [locations, setLocations] = useState([])
  const [state, setState] = useState([])

  

  useEffect(
    () => {
        const fetchLocation = async () => {
            const res = await fetch(`http://localhost:8088/location?_expand=states`)
            const locations = await res.json()
            setLocations(locations)
        }
        fetchLocation()
    },
    []
  )

  useEffect(
    () => {
         const fetchStates = async () => {
            const res = await fetch(`http://localhost:8088/states`)
            const states = await res.json()
            setState(states)
         }
         fetchStates()
    },
    []
  )


  return (
    <div className="locations-container">
        <h2 className="locations-header">Locations</h2>
            {
                state.map(states => {
                    return (
                        <h3 className="locations-state" key={states.id}>{states.state}</h3>
                    )
                })
            }
            {
                locations.map(
                    (location) => {
                        return (
                            <div className="locations-list" key={location.id}>
                                <ul>
                                    <li>City: {location.city}</li>
                                    <li>Address: {location.address}</li>
                                    <li>Store Square Footage: {location.squareFt}</li>
                                </ul>
                            </div>
                        )
                    }
                )
            }
    </div>
  )
}

export default Locations