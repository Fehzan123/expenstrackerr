import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faMoneyBillAlt, faSave } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  return (
    <div className='cardPer'>

    <div className="card">
        <FontAwesomeIcon icon={faMoneyBillAlt} />
        <div className='mony'>

        <p>Earning
        </p>
        <div>
              $350.5
        </div>

        </div>
    </div><div className="card">
        <FontAwesomeIcon icon={faDollarSign} />
        <div className='mony'>

        <p>Spend this month
        </p>
        <div>
              $350.5
        </div>

        </div>
    </div><div className="card">
       
        <div className='mony'>

        <p>sale
        </p>
        <div>
              $350.5
        </div>
       

        </div>
    </div><div className="card">
      
        <div className='mony'>

        <p>your balance
        </p>
        <div>
              $350.5
        </div>
        </div>
        <img src="https://unfluke.in/static/media/monkey.5456259d.jpg" className='icon' alt="Monkey Icon"  />
    </div><div className="card">
        <FontAwesomeIcon icon={faMoneyBillAlt} />
        <div className='mony'>

        <p>new task
        </p>
        <div>
              $350.5
        </div>

        </div>
    </div><div className="card">
        <FontAwesomeIcon icon={faSave} />
        <div className='mony'>

        <p>Total project
        </p>
        <div>
              $350.5
        </div>

        </div>
    </div>
   
    </div>
  );
}

export default Card;
