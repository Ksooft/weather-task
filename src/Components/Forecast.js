const Forecast = ({ day, month, temp, wind }) => {
    const addDays = days => {
        let date = new Date(),
            inDays = new Date()
        inDays.setDate(date.getDate() + days)
        return inDays.getDate()
    }
    return (
        <>
            <p style={{ marginLeft: '10px', fontSize: '17px', textAlign: 'left' }}>{addDays(day)} {month}:</p>
            <ul className="detail-info">
                <li><span>Temperature:</span> {temp}</li>
                <li><span>Wind:</span> {wind}</li>
            </ul>    
        </>
    )
}

export default Forecast
