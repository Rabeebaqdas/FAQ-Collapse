import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [count,setCount] = useState({
        count1 : false,
        count2 : false,
        count3 : false,
        count4 : false,
        count5 : false
    });
    const removeChange = () => {
     
            setCount({
                count1 : false,
                count2 : false,
                count3 : false,
                count4 : false,
                count5 : false
            })

      
    }

  return (
    <>
    <h1>Frequently Asked Question</h1>
    <div className="faq-container">
        <div className={`faq ${count.count1 ? "active" : ""}`}>
            <h3 className="faq-title">
                Why shouldnt we trust atoms
            </h3>
            <p className="faq-text">
                they make up everything
            </p>
            <button className='faq-toggle'>
                <i className="fas fa-chevron-down" name='one' onClick={()=>setCount({count1:true})}></i>
                <i className='fas fa-times' onClick={removeChange}></i>
            </button>

        </div>
        <div className={`faq ${count.count2 ? "active" : ""}`}>
            <h3 className="faq-title">
                What do you call someone with no body and no nose?
            </h3>
            <p className="faq-text">
            they make up everything
            </p>
            <button className='faq-toggle'>
                <i className="fas fa-chevron-down" onClick={()=>setCount({count2:true})} ></i>
                <i className='fas fa-times' onClick={removeChange}></i>
            </button>

        </div>
        <div className={`faq ${count.count3 ? "active" : ""}`}>
            <h3 className="faq-title">
                What's the object-oriented way to become wealthy?
            </h3>
            <p className="faq-text">
           inheritance
            </p>
            <button className='faq-toggle'>
                <i className="fas fa-chevron-down" onClick={()=>setCount({count3:true})} ></i>
                <i className='fas fa-times' onClick={removeChange}></i>
            </button>

        </div>
        <div className={`faq ${count.count4 ? "active" : ""}`}>
            <h3 className="faq-title">
                How many tickets does it takes to tickle an octopus?
            </h3>
            <p className="faq-text">
            it takes approx 40 tickets
            </p>
            <button className='faq-toggle'>
                <i className="fas fa-chevron-down" onClick={()=>setCount({count4:true})}></i>
                <i className='fas fa-times' onClick={removeChange}></i>
            </button>

        </div>
        <div className={`faq ${count.count5 ? "active" : ""}`}>
            <h3 className="faq-title">
              What is: 1 + 1?
            </h3>
            <p className="faq-text">
            it is 2
            </p>
            <button className='faq-toggle'>
                <i className="fas fa-chevron-down" onClick={()=>setCount({count5:true})}></i>
                <i className='fas fa-times' onClick={removeChange}></i>
            </button>

        </div>

    </div>
</>
  );
}

export default App;
