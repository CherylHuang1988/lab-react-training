import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './idCard/IdCard';
import Greetings from './greetings/Greetings';
import Random from './random/Random';
import BoxColor from './boxColor/BoxColor';
import CreditCard from './creditCard/CreditCard';
import Rating from './ratings/Rating';
import DriverCard from './driverCard/DriverCard';
import LikeButton from './likeButton/LikeButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div className="component">
            <IdCard
              lastName="Doe"
              firstName="John"
              gender="male"
              height={178}
              birth={new Date('1992-07-14')}
              picture="https://randomuser.me/api/portraits/men/44.jpg"
            />
          </div>
          <div className="component">
            <IdCard
              lastName="Delores "
              firstName="Obrien"
              gender="female"
              height={172}
              birth={new Date('1988-05-11')}
              picture="https://randomuser.me/api/portraits/women/44.jpg"
            />
          </div>
        </div>

        <div>
          <div className="component">
            <Greetings lang="de">Ludwig</Greetings>
          </div>
          <div className="component">
            <Greetings lang="fr">François</Greetings>
          </div>
          <div className="component">
            <Greetings lang="es">Anna</Greetings>
          </div>
        </div>

        <div>
          <div className="component">
            <Random min={1} max={6} />
          </div>
          <div className="component">
            <Random min={1} max={100} />
          </div>
        </div>

        <div>
          <div>
            <BoxColor r={255} g={0} b={0} />
          </div>
          <div>
            <BoxColor r={128} g={255} b={0} />
          </div>
        </div>

        <div>
          <CreditCard
            type="./img/visa.png"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />
          <CreditCard
            type="./img/master-card.svg"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />
          <CreditCard
            type="./img/visa.png"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </div>

        <div>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </div>

        <div>
          <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: 'Toyota Corolla Altis',
              licensePlate: 'CO42DE',
            }}
          />
          <DriverCard
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: 'Audi A3',
              licensePlate: 'BE33ER',
            }}
          />
        </div>

        <div>
          <LikeButton />
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
