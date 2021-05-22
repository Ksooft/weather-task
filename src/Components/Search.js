import React, { useState } from 'react'

const Search = ({ requestWeather }) => {
    const [value, setValue] = useState('')

    const handleKey = e => {
        if (e.key === 'Enter') {
            requestWeather(value, setValue)
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="row">
            <div style={{ marginLeft: '0' }} className="input-field col s4">
                <input id="city" type="text" className="validate" 
                    placeholder="Enter city" value={value} 
                    onChange={e => setValue(e.target.value)} 
                    onKeyDown={handleKey} />
            </div>
            <div style={{ marginLeft: '0' }} className="col s2">
                <button className="btn waves-effect waves-light light-blue darken-3" 
                    type="submit" name="action" onClick={() => requestWeather(value, setValue)}>Add city
                    <i className="material-icons right">send</i>
                </button>
            </div>
        </div>
    )
}

export default Search
