import Card from './Card'

const Cards = ({ cities = [], deleteCity }) => {
    return (
        <div className="cards-weather">
            {cities.map((city, ind) => <Card key={ind + Date.now()} cityOne={city} deleteCity={deleteCity} /> )}
        </div>
    )
}

export default Cards
