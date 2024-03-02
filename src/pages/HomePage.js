import React from 'react';
import Image from "../images/image.png";
import {TypeAnimation} from 'react-type-animation';
function HomePage() {
    return (
        <div>
        <div className='d-flex justify-content-center align-items-center mb-5 '>
            <img src={Image} className='img-fluid shadow' style={{height:500,width:"100%"}} alt="image" />
     <TypeAnimation
     className='position-absolute text-white text-bold' 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'What is Aqua Helios',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'What is Aqua ',
        1000,
        'What is  ',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{position:"absolute",fontSize:"4em",color:"white",fontFamily:"Poppins",fontWeight:900,  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}
      repeat={Infinity}
    />
        </div>
        <div  className='d-flex justify-content-center mt-5'>
        <div style={{width:"70%"}}>
            <h4 className='mb-3'  style={{fontFamily: "Poppins",
  fontWeight: 700}}>Aqua Helios: Empowering Communities with Sustainable Water Purification.</h4>
       
      <div>
  <p className='text-wrap mb-5' style={{
    fontFamily: "Poppins",
    fontWeight: 400,
    lineHeight: '1.6', // Adjust this value as needed
    letterSpacing: '0.05em',
    width:"80%" // Adjust this value as needed
  }}>
    Aqua Helios is your gateway to clean water, anywhere. This innovative solar-powered UV water purifier empowers communities and individuals to access safe drinking water, regardless of their location or access to electricity.
  </p>
  <p className='text-wrap ' style={{
    fontFamily: "Poppins",
    fontWeight: 400,
    lineHeight: '1.6', // Adjust this value as needed
    letterSpacing: '0.05em',
    width:"80%" // Adjust this value as needed
  }}>
    

    Lightweight and portable, Aqua Helios utilizes the power of UV rays to effectively eliminate harmful bacteria and pathogens from water sources. With Aqua Helios, you can enjoy the peace of mind that comes with knowing your water is clean, all while promoting sustainability and environmental responsibility.
  </p>
</div>

        </div>
        </div>
        <div  style={{
      backgroundColor:" #05405B",
backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%230974A5' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`,
   height:500,
  width:'100%' }} 
         className='mt-4'>
          <i class="fa-solid fa-lightbulb fa-5x" ></i>
          <i class="fa-solid fa-feather fa-5x"></i>
          <i class="fa-solid fa-hands-holding fa-5x"></i>
        </div>
        </div>
    );
}

export default HomePage;
