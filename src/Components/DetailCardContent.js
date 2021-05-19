import Forecast from './Forecast'

const DetailCardContent = ({ day, month, infoCity, nameCity }) => {
    return (
        <div className="row">
            <div className="col s12 m12">
                <div className="card">
                    <div className="card-content">
                        <span style={{ fontWeight: 500 }} className="card-title left-align">{nameCity}</span>
                        <p style={{ marginLeft: '10px', fontSize: '17px', textAlign: 'left' }}>Today ({day} {month}):</p>
                        <ul className="detail-info">
                            <li><span>Temperature:</span> {infoCity.temperature}</li>
                            <li><span>Wind:</span> {infoCity.wind}</li>
                            <li><span>Description:</span> {infoCity.description}</li>
                        </ul>
                        {infoCity.forecast.map((c, ind) => <Forecast key={ind} day={+c.day} month={month} temp={c.temperature} wind={c.wind} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCardContent