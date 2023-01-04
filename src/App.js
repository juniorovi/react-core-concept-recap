import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name='Noahkhali' speciality='Darmik & Language'></District>
      <District name='B. Baria' speciality='Maramari & Money'></District>
      <District name='Kumilla' speciality='Dakati & Brave'></District>
    </div>
  );
}

const districtStyle ={
  backgroundColor: 'skyblue',
  margin: '20px',
  padding: '10px'
}

function District(props){
  const [power, setPower] = useState(1);
  const boostPower = () => setPower(power * 2)
  return(
    <div style={districtStyle} className='district'>
      <h3>Name: {props.name}</h3>
      <p>Speciality: {props.speciality}</p>
      <h3>Ratting: {power}</h3>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )

}

export default App;
