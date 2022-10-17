import { useState, useEffect, useNavigate } from "react"

const Locations = () => {
  const [locations, setLocations] = useState([])

  

  useEffect(
    () => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:8088/locations`)
            const locations = await res.json()
            setLocations(locations)
        }
        fetchData()
    },
    []
  )


  return (
    <>
        <h2>Locations</h2>
            {
                locations.map(
                    (location) => {
                        return <div key={location.id}>
                            <h3>{location.state}</h3>
                            <ul>
                                <li>City: {location.city}</li>
                                <li>Address: {location.address}</li>
                                <li>Store Square Footage: {location.squareFt}</li>
                            </ul>
                        </div>
                    }
                )
            }
    </>
  )
}

export default Locations