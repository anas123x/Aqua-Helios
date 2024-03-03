
import React,{useState} from 'react';
import Image from "../images/image.png";
import {TypeAnimation} from 'react-type-animation';
function HomePage() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

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
        <div style={{width:"50%"}}>
            <h4 className='mb-3 text-wrap w-75'  style={{fontFamily: "Poppins",
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
          <div className='d-flex justify-content-evenly '>
            <div className='mt-5 d-flex flex-column  align-items-center' style={{width:"15%"}}>
          <i class="fa-solid fa-lightbulb fa-5x mb-3" style={{color:"gold"}}></i>
          <h3 style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            color:"white",
            textAlign:"center"
          }}>Harnessing the Sun's Power</h3>
          <p className='text-white text-center '>
                Aqua Helios is your solar-powered solution for clean water. It uses advanced UV technology to eliminate harmful bacteria, all without bulky equipment or electricity. This eco-friendly purifier keeps you safe and hydrated wherever you go.</p>
          </div>
          <div className='mt-5 d-flex flex-column  align-items-center' style={{width:"15%"}}>
          <i class="fa-solid fa-feather fa-5x mb-3" style={{color:"gold"}}></i>
          <h3 style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            color:"white",
            textAlign:"center"
          }}>Light on Weight, Heavy on Benefits</h3>
          <p className='text-white text-center '>
                
Aqua Helios is your solar-powered solution for clean water. It uses advanced UV technology to eliminate harmful bacteria, all without bulky equipment or electricity. This eco-friendly purifier keeps you safe and hydrated wherever you go.</p>
          </div>
          <div className='mt-5 d-flex flex-column  align-items-center' style={{width:"15%"}}>
          <i class="fa-solid fa-hands-holding fa-5x mb-3" style={{color:"gold"}}></i>
          <h3 style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            color:"white",
            textAlign:"center"
          }}>Effortless Portability</h3>
          <p className='text-white text-center '>
                
        
Ditch the bulky filters! Aqua Helios is your lightweight, backpack-friendly water purifier. Perfect for adventures, it ensures clean drinking water on the go, letting you explore freely without worrying about safe hydration.</p>
          </div>
          <div className='mt-5 d-flex flex-column  align-items-center' style={{width:"15%"}}>
          <i class="fa-solid fa-dollar-sign fa-5x mb-3" style={{color:"gold"}}></i>
          <h3 style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            color:"white",
            textAlign:"center"
          }}>Affordability for Everyone</h3>
          <p className='text-white text-center '>
                
          Safe drinking water shouldn't break the bank.  Aqua Helios offers a cost-effective solution compared to traditional methods.  The upfront investment provides long-term savings and reliable access to clean water.</p>
          </div>

    
          </div>
        </div>
        <div  style={{minHeight:500,width:"100%",backgroundColor:"#abb8c3"}} className='p-4 d-flex flex-column justify-content-center align-items-center'>
        <h1 className='text-center text-wrap w-50 mb-3'>Aqua Helios helps mainly achieve 4 UN Sustainable Development Goals</h1>
        <div style={{ border: '1px solid #000', padding: '10px', width: '320px' }} className='bg-white'>
      <div style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => setIsOpen1(!isOpen1)}>
        <span>Clean Water and Sanitation: UN Goal 6</span>
        <span>{isOpen1 ? <i class="fa-solid fa-minus"style={{color:"gold"}}></i> : <i class="fa-solid fa-plus"  style={{color:"gold"}}></i>}</span>
      </div>
      {isOpen1&& (
        <p style={{ marginTop: '10px' }}>
          While this goal is inherent in our charter, apart from being a technology that purifies water to the higher levels than WHO guidelines sets out for safe drinking water, Aqua Helios also solves the issue of providing heated water for better hygiene and improved health.
        </p>
      )}
      
    </div>
    <div style={{ border: '1px solid #000', padding: '10px', width: '320px' }} className='bg-white'>
  <div style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => setIsOpen2(!isOpen2)}>
    <span>Climate Action: UN Goal 13</span>
    <span>{isOpen2 ? <i class="fa-solid fa-minus"style={{color:"gold"}}></i> : <i class="fa-solid fa-plus"  style={{color:"gold"}}></i>}</span>
  </div>
  {isOpen2 && (
    <p style={{ marginTop: '10px' }}>
      Over 800 million households worldwide currently use solid fuels. For every one of these households CO2 emissions could be reduced by 1 ton per year if they changed from heating/boiling with solid fuels to using Aqua Helios. Since 2009, Aqua Helios has reduced the need to burn over 1,500 hectares of forest, helping to reduce climate impact.
    </p>
  )}
</div>

<div style={{ border: '1px solid #000', padding: '10px', width: '320px' }} className='bg-white'>
  <div style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => setIsOpen3(!isOpen3)}>
    <span>Good Health and Well-being: UN Goal 3</span>
    <span>{isOpen3 ? <i class="fa-solid fa-minus"style={{color:"gold"}}></i> : <i class="fa-solid fa-plus"  style={{color:"gold"}}></i>}</span>
  </div>
  {isOpen3 && (
    <p style={{ marginTop: '10px' }}>
      Access to safe water is essential for health.  Aqua Helios reduces the incidence of diarrhea and other poverty-related diseases. Having safe water improves hygiene practices, further reducing vulnerability to major infectious diseases.
    </p>
  )}
</div>

<div style={{ border: '1px solid #000', padding: '10px', width: '320px' }} className='bg-white'>
  
  <div style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => setIsOpen4(!isOpen4)}>
    <span>Reduced Inequalities: UN Goal 10</span>
    <span>{isOpen4 ?<i class="fa-solid fa-minus"style={{color:"gold"}}></i> : <i class="fa-solid fa-plus"  style={{color:"gold"}}></i>}</span>
  </div>
  {isOpen4 && (
    <p style={{ marginTop: '10px' }}>
      The notion and comfort of having safe, hot water at home is a distant dream for more than a billion people. Equality means equal access to the basics that create a dignified life and Aqua Helios helps provide that access.
    </p>
  )}
</div>
        </div>
        </div>
    );
}

export default HomePage;