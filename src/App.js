import './App.css'
import React, { useState, useEffect } from 'react'
import Search from './Components/Search'
import Cards from './Components/Cards'
import Preloader from './Components/Preloader'

function App() {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)

 const searchCity = (city, setValue) => {
   const ls = JSON.parse(localStorage.getItem('cityNames')) ? JSON.parse(localStorage.getItem('cityNames')) : []
   setLoading(true)
    fetch(`https://weather-restful.herokuapp.com/weather/${city}`)
      .then(response => response.ok ? response.json() : Promise.reject(response))
      .then(data => {
        if (ls.length && ls.includes(city)) {
          return alert('Данный город уже есть в списке')
        }
        const newObject = { city, ...data }
        setCities(prevCities => {
          const newCities = [...prevCities, newObject]
          return newCities
        })
        updateLS(newObject, 'cities')
        updateLS(city, 'cityNames')
        setLoading(false)
        setValue('')
      })
      .catch(error => {
        return alert(`Возникла ошибка: ${error.status}, текст ошибки: ${error.statusText}`)
      })
  }

  const updateLS = (cities, name) => {
    const ls = JSON.parse(localStorage.getItem(name)) ? JSON.parse(localStorage.getItem(name)) : []
    const citiesForLS = ls.length 
      ? [...ls, cities]
      : [cities]
    localStorage.setItem(name, JSON.stringify(citiesForLS))
  }

  const deleteCity = city => {
    document.querySelector(`.collection[data-city="${city}"`).classList.add('hideAnimation')
    setTimeout(() => {
      setCities(cities.filter(c => c.city !== city))
      const citiesLs = JSON.parse(localStorage.getItem('cities'))
      const newCitiesLs = citiesLs.filter(c => c.city !== city)
      localStorage.setItem('cities', JSON.stringify(newCitiesLs))
      const cityNamesLs = JSON.parse(localStorage.getItem('cityNames'))
      const newCityNamesLs = cityNamesLs.filter(c => c !== city)
      localStorage.setItem('cityNames', JSON.stringify(newCityNamesLs))
    }, 230);
  }

  async function getOneCity(city) {
    const request = await fetch(`https://weather-restful.herokuapp.com/weather/${city}`)
    const response = await request.json()
    return response
  }


  useEffect(() => {
    async function fetchAllCities(cities) {
      const arr = []
      for (let item of cities) {
        const city = await getOneCity(item)
        const changedObj = { city: item, ...city }
        arr.push(changedObj)
      }
      return arr
    }
    async function fetchData() {
      const ls = JSON.parse(localStorage.getItem('cities')) ? JSON.parse(localStorage.getItem('cities')) : []
      const names = JSON.parse(localStorage.getItem('cityNames'))
      if (ls.length) {
        setCities(ls)
        const updateCities = await fetchAllCities(names)
        localStorage.setItem('cities', JSON.stringify(updateCities))
        if (window.location.pathname === '/') {
          setCities(updateCities)
        }
      }
    }
    fetchData()
  }, [])

  return (
    <div className="App container">
      <div className="header">
        <h1>React Weather App</h1>
        <a href="https://github.com/Ksooft" target="_blank" rel="noopener noreferrer" className="github">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <Search requestWeather={searchCity} />
      <Cards cities={cities} deleteCity={deleteCity} loading={loading} />
      {loading ? <Preloader /> : ''}
    </div>
  );
}

export default App;
