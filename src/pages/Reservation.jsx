import { useState } from 'react';
import '../css/reservation.css'
import cities from '../demo/city.json';

const Reservation = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const filteredCities = cities.filter(cit => cit.city !== null);
  filteredCities.sort((a, b) => a.city.localeCompare(b.city));

    return (
        <div className='reserve-section'>
            <h1>Book a vespa Testa-Ride</h1>
            <hr/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ad.</p>
            <div className="button-container">
                <form>
                <select value={selectedCity} onChange={handleCityChange}>
                    {filteredCities.map(cit => (
                    <option key={cit.city} value={cit.city}>{cit.city}</option>
                    ))}
                </select>
                <input type='number' placeholder='Enter quantity' min="1"  />
                <button type='submit'>Reserve</button>
                </form>
            </div>
        </div>
    )
}

export default Reservation