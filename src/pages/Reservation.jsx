import '../css/reservation.css'
import { Link } from 'react-router-dom';
import search from '../assets/search.png'

const Reservation = () => {
    return (
        <div className='reserve-section'>
            <h1>Book a vespa Testa-Ride</h1>
            <hr/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ad.</p>
            <div className="button-container">
                <Link  to="#!" className="">London</Link >
                <Link  to="#!" className="">Reserve</Link >
            </div>
            <img className='search' src={search} />
        </div>
    )
}

export default Reservation