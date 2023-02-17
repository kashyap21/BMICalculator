import './App.css';
import {useState, createElement } from 'react';

function App() {

  const [age,setAge] = useState('');
  const [gender,setGender] = useState('');
  const [height,setHeight] = useState('');
  const [weight,setWeight] = useState('');
  const [result,setResult] = useState(0);
  const [bodyType,setBodyType] = useState('');
  const handleRadioButton = (value) => {
    setGender(value)
  }

  const calculateBMI = () => {
    const bmi = Number(weight)/(((Number(height) / 100) * Number(height))/100);
    console.log(bmi);
    setResult(bmi);
    setWeight('');
    setHeight('');
    setGender('');
    setAge('');

    if (bmi < 18.5) {
        setBodyType("Underweight");
    } else if (18.5 <= bmi && bmi <= 24.9) {
        setBodyType("Healthy");
    } else if (25 <= bmi && bmi <= 29.9) {
        setBodyType("Overweight");
    } else if (30 <= bmi && bmi <= 34.9) {
        setBodyType("Obese");
    } else if (35 <= bmi) {
        setBodyType("Extremely obese");
    }

  }

  return (
    <>
        <h3><b>B</b>ody <b>M</b>ass <b>I</b>ndex Calculator</h3>
        <div className = 'form' id = 'form'>
          <div className="row-one">

            <input className="text-input" autoComplete="off" required id='age' onChange= {(e) => {setAge(e.target.value);}}
            value = {age}></input>
            <p className="text">Age</p>
            <label className="container">
              <input type = 'radio' name='gender' checked = { gender === 'F'} onChange = {() => {handleRadioButton('F')}}/>
              <p className="text">Female</p>
              <span className="checkmark"></span>
            </label>

            <lable className="container">
              <input type = 'radio' name='gender' checked = { gender === 'M'} onChange = {() => {handleRadioButton('M')}} />
              <p className="text">Male</p>
              <span className="checkmark"></span>
            </lable>
          </div>

          <div className='row-two'>
            <input className='text-input' id = 'height' autoComplete="off" type = 'number' onChange = {(e) => { setHeight(e.target.value)}} required
            value = {height}></input>
            <p className="text">Height (cm)</p>
            <input className='text-input' id = 'weight' autoComplete="off" required type = 'number' onChange = {(e) => { setWeight(e.target.value)}}
            value = {weight}></input>
            <p className="text">Weight (kg)</p>
          </div>


          <button id = 'submit' onClick = {calculateBMI} >Moment of truth</button>
          </div>

          <div className="result" style={{'textAlign':'center'}}>
            <h1>{ result !== '' ? `Your BMI is ${result.toFixed(2)} you are ${bodyType}.` : '' }</h1>
          </div>
        </>
  );
}

export default App;



// Commented code
// const handleForm = (e) =>{
//   const bmi = Number(weight)/(((Number(height) / 100) * Number(height))/100);
//   console.log(bmi);
//   setResult(bmi)
//   e.clean();
//   e.preventDefault();
// }


// {/* <form className="form" id = "form" onSubmit={(e) => {handleForm(e)}} > */}
//           {/* <button id ='submit' type = 'submit' >Submit</button> */}
//     {/* </form> */}
// 