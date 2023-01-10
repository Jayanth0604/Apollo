
import './App.css';
import Content from './Content';
import Details from './Details';
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
  
    <div>
       <ScrollToTop smooth color='#0D82A1' text='make an appoinment'></ScrollToTop>
    <div className="appointment">
     
      <div className='appointment1'>
        <img className='logo' src='assets/image/logo-w.png'></img>
      <h3>the apollo world of care</h3>
      <h1>consult our trusted surgeons, make an appointment</h1>
     <p>modern healthcare to ensure you to stay healthy,always</p>
     </div>
     <div className='appointment2'>
      <h3>make an appointment</h3>
      <input type="" placeholder='Your name' className='input_appoint'></input>
      <input type="" placeholder='location'className='input_appoint'></input>
      <input type="" placeholder='mobile number'className='input_appoint'></input>
      <button>Book an appointment</button>
     </div>
     <img src='assets/image/wave-static-02.png' className='wave2'></img>
         
    </div>
    <img src='assets/image/wave-static-01.png' className='wave1'></img>
        
        <Content/>
        <Details/>
         </div>
  );
}

export default App;
