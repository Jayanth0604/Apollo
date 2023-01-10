import React from 'react'

function Content() {
  return (
    <div className='content'>
        <h1>Centres of Excellence</h1>
        <div className='subjects'>
            <div className='pagecenter'>
            <div className='cardiology'>
                <img className='imgg' src='assets/image/gas.png'></img>
                <h3>Cardiology</h3>
            </div>
            <div className='Nephrology'>
                <img className='imgg' src='assets/image/toxic.png'></img>
                <h3> Urology</h3>
            </div>
            <div className='Neurology'>
                <img className='imgg'  src='assets/image/brain.png'></img>
                <h3>Neurology</h3>
            </div>
            <div className='Gastroenterology'>
                <img className='imgg'  src='assets/image/cardio.png'></img>
                <h3>Gastroenterology</h3>
            </div>
            <div className='Oncology'>
                <img className='imgg'  src='assets/image/onco.png'></img>
                <h3>Oncology</h3>
            </div>
            <div className='Orthopaedics'>
                <img className='imgg'  src='assets/image/bone.png'></img>
                <h3>Orthopaedics</h3>
            </div>
            </div>
        </div>

        <div className='covid_safe'>
            <h1>we are covid safe</h1>
            <p>While these challenging times have brought many changes, at Apollo Hospitals one thing remained the same – Our commitment to the safety of our patients, their loved ones and our staff. We have established a safe environment and were among the first in the country to implement a range of rigorous protocols, which includes the following: </p>
        </div>
        <div className='pagecentre1'>
        <div className='safety'>
            <div className='sanitation'>
                <img src='assets/image/ExtraSanitation.png'></img>
                <h4>Extra Sanitation Methods</h4>
                <p>Disinfecting all areas and frequently touched surfaces continuously</p>
            </div>

            <div className='socialdistance'>
                <img src='assets/image/socialdistancing.png'></img>
                <h4>Social Distancing</h4>
                <p>Following social distancing protocols by implementing limited visitations, new waiting room protocols and other measures so you can safely practice social distancing and keep yourself and others safe. </p>


            </div>

            <div className='facemask'>
                <img src='assets/image/facemask.png'></img>
                <h4>Face Mask</h4>
                <p>Mandating all patients and staff to wear face masks.</p>
            </div>
        </div>
        <div className='safety'>
            <div className='sanitation1'>
                <img src='assets/image/screening.png'></img>
                <h4>Screening at the entrance</h4>
                <p>Disinfecting all areas and frequently touched surfaces continuously</p>
            </div>

            <div className='socialdistance1'>
                <img src='assets/image/testingourstaff.png'></img>
                <h4>Testing our staff regularly</h4>
                <p>Screening of all visitors, including patients upon arrival Screening all patients for COVID-19 symptoms upon arrival. </p>


            </div>

            <div className='facemask1'>
                <img src='assets/image/separatewaiting.png'></img>
                <h4>Separate Waiting & Treatment Area</h4>
                <p>Your safety is our priority. We implemented strict isolation practices to separate COVID-19-positive and symptomatic patients from others. </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Content