
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    
    const apiKey= import.meta.env.VITE_API_KEY
    fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setImages(data)
        setLoading(false)

      })
      .catch(error => {
        console.log("Found an error", error)
        setImages(false)
      })


  }, [])

  return (
    <>
      <div className="container">
        <h1>Gallery-Application</h1>

        {loading && <h1>loading..........</h1> }

        <div className="sub-container">

          {images.map((img) => {
            return(
              <div key={img.id}>
                <img src={img.urls.small} alt="" />
                 </div>
            )
          })}

        </div>
      </div>
    </>
  )
}

export default App
