import { Link } from 'react-router-dom'

const Card = ({ cityOne, deleteCity }) => {
    const {temperature: temp, wind, description: desc, city} = cityOne
    return (
        <ul className="collection with-header" data-city={city}>
            <li className="collection-header"><Link to={`/weather-task/${city}`}>{city}</Link>
                <span className="remove-card" onClick={() => deleteCity(city)}><i className="material-icons">close</i></span>
            </li>
            <li className="collection-item">Temperature: {temp}</li>
            <li className="collection-item">Wind: {wind}</li>
            <li className="collection-item">Description: {desc}</li>
        </ul>
    )
}

export default Card
