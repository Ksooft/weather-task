import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DetailCardContent from './DetailCardContent'
import Preloader from './Preloader'

const DetailCard = ({ check }) => {
    const [infoCity, setInfoCity] = useState({})
    const [loading, setLoading] = useState(true)
    const propsCity = check.match.params.city
    const namesFromLs = JSON.parse(localStorage.getItem('cityNames'))
    const isThere = namesFromLs.includes(propsCity)
    const getOneCity = (city) => {
        setLoading(true)
        fetch(`https://weather-restful.herokuapp.com/weather/${city}`)
            .then(response => response.json())
            .then(data => {
                setInfoCity(data)
                setLoading(false)
            })
    }

    useEffect(() => {
        if (isThere) {
            getOneCity(propsCity)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isThere) {
        const day = new Date().getDate()
        const month = new Date().toLocaleString('en', { month: 'long' })
        return (
            <div className="container detail App">
                <Link to="/" className="detail-back"><i className="material-icons">arrow_back</i></Link>
                <h1 style={{ textAlign: 'center' }}>React Weather App</h1>
                {loading ? <Preloader />
                    : <DetailCardContent day={day} month={month} infoCity={infoCity} nameCity={propsCity} />}
            </div>
        )
    }
    return (
        <div className="notfound">
            <Link to="/" className="detail-back"><i className="material-icons">arrow_back</i></Link>
            <h2 className="center-align red-text">There is not found page!</h2>
        </div>
    )
}

export default DetailCard
