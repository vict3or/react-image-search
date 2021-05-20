import { useEffect, useState } from "react"

function ImageDisplay() {

  const [storeData, setStoreData] = useState('')
  const [search, setSearch] = useState('')
  const [ isSearched, setIsSearched ] = useState(false)

  useEffect(() => {
    const api = {
      api_key: '21712677-09af9acf729d8c3f9cd38a18f',
      url: 'https://pixabay.com/api/'
    }

    fetch(`${api.url}?key=${api.api_key}&q=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setStoreData(() => data)
      })
      .catch((error) => console.log(error))
  },[search])

console.log(storeData)
  return (
    <div className="wrapper">
      <div className="search-box">
        <input type="text" className="input" onChange={(e) => {
          e.preventDefault()
          setIsSearched(true)
          setSearch(e.target.value)
        }}/>
      </div>
      <div className="main">
        {isSearched && storeData.hits.map((data, index) => {
          return (
            <div
              key={data['id']}
              className="image-box"
              style={{ backgroundImage: `url(${data['webformatURL']})` }} 
              >
            </div>)
        })}
      </div>
    </div>
  )
}

export default ImageDisplay