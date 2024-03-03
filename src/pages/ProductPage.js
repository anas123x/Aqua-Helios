import React from 'react';
import solaire from "../images/solaire.png"
import battery from "../images/battery.jpg"
import led from "../images/led.jpg"
import filtre from "../images/filtre.png"
const ProductPage = () => {
    return (
        <div className='container ' style={{ paddingTop: '100px' }}>
            {/* Hero Section */}
            <div className='text-center'>
                {/* Image */}

                {/* Headline */}
                <h1 style={{
            fontFamily: "Poppins",
            fontWeight: 900,
           
          }}>Aqua Helios: Clean Water, Anywhere You Go</h1>
                {/* CTA Button */}
               
            </div>

            {/* Product Overview Section */}
            <section>
    {/* Images and Key Features List */}
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-md-6">
                {/* Images */}
                <div className="row">
                    <div className="col-md-6">
                        <img src={solaire} alt="Aqua Helios - Solar panel" className='img-fluid' />
                    </div>
                    <div className="col-md-6">
                        <img src={filtre} alt="Aqua Helios - Solar panel" className='img-fluid' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={battery} alt="Aqua Helios - Solar panel" className='img-fluid' />
                    </div>
                    <div className="col-md-6">
                        <img src={led} alt="Aqua Helios - Solar panel" className='img-fluid' />
                    </div>
                </div>
                {/* Add more images for other components */}
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center">
                {/* Key Features List */}
                
                <ul class="list-group" >
                <h3 className='mb-3 mx-5' style={{
            fontFamily: "Poppins",
            fontWeight: 600,
           
          }}>Key Features</h3>
                    <li class="list-group-item border-0"><i class="fa-solid fa-hand-point-right mr-4"></i>{'   '}Lightweight and Portable Design</li>
                    <li class="list-group-item border-0"><i class="fa-solid fa-hand-point-right mr-4"></i>{'   '}Powerful Solar-Powered UV Technology (254 nm)</li>
                    <li class="list-group-item border-0"><i class="fa-solid fa-hand-point-right mr-4"></i>{'   '}Eliminates 99.99% of Bacteria & Pathogens</li>
                    <li class="list-group-item border-0"><i class="fa-solid fa-hand-point-right mr-4"></i>{'   '}Food-Grade BPA-Free Water Chamber (Available in 5L or 10L capacities)</li>
                    <li class="list-group-item border-0"><i class="fa-solid fa-hand-point-right mr-4"></i>{'   '}Long-Life Replaceable UV Lamp (10,000 hours)</li>
                    <li class="list-group-item border-0"><i class="fa-solid fa-hand-point-right mr-4"></i>{'   '}Simple and Intuitive Control Panel with LED Indicators</li>
                    <li class="list-group-item border-0"><i class="fa-solid fa-hand-point-right mr-4"></i>{'   '}Automatic Shut-Off for Safety</li>
                    <li class="list-group-item border-0"><i class="fa-solid fa-hand-point-right mr-4"></i>{'   '}Water Level Sensor</li>
                </ul>
                <button className='btn fw-bold mt-5' style={{backgroundColor:"gold"}}>Buy now</button>
            </div>
        </div>
    </div>
</section>

            {/* Technical Specifications Table */}
            <section>
            <h1 className='text-center mb-3' style={{
            fontFamily: "Poppins",
            fontWeight: 900,
           
          }}>Technical Specifications Table:</h1>

            <table class="table table-striped text-center mt-3">
    <thead>
        <tr>
            <th>Feature</th>
            <th>Specification</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Weight</td>
            <td>2.4 kg</td>
        </tr>
        <tr>
            <td>Dimensions</td>
            <td>25 cm x 15 cm x 10 cm (9.8" x 5.9" x 3.9")</td>
        </tr>
        <tr>
            <td>Solar Panel Capacity</td>
            <td>10 Watts</td>
        </tr>
        <tr>
            <td>Battery Capacity</td>
            <td>4000mAh</td>
        </tr>
        <tr>
            <td>Charging Time</td>
            <td>4 hours under direct sunlight</td>
        </tr>
        <tr>
            <td>Treatment Cycles per Charge</td>
            <td>Up to 20 cycles (5L capacity)</td>
        </tr>
        <tr>
            <td>Water Chamber Capacity</td>
            <td>5L or 10L (Choose your option)</td>
        </tr>
        <tr>
            <td>Filtration Rate</td>
            <td>1 liter per minute</td>
        </tr>
    </tbody>
</table>
            </section>

            {/* Benefits Section */}
            <section>
                {/* Icons and Text */}
                <div>
                    {/* Add icons and text for each benefit */}
                </div>

                {/* Benefit-focused text */}
            </section>

            {/* Comparison Section (Optional) */}
            <section>
                {/* Compare Aqua Helios to traditional methods */}
            </section>

            {/* Social Proof Section */}
            <section>
                {/* Customer Testimonials */}
                {/* Logos of Partnering Organizations (Optional) */}
            </section>

            {/* Additional Information Section */}
            <section>
                {/* FAQs */}
                {/* Warranty Information */}
                {/* Shipping and Delivery Details */}
            </section>

            {/* Call to Action Section */}
            <section>
                {/* Prominent "Buy Now" or "Add to Cart" button */}
                {/* Limited-time offer or discount code (Optional) */}
            </section>

            {/* Trust Signals */}
            <section>
                {/* Secure payment gateway logo */}
                {/* Contact information */}
                {/* Company information */}
            </section>

            {/* Overall Design */}
            <style jsx>{`
                /* Add CSS styles for the overall design */
            `}</style>
        </div>
    );
};

export default ProductPage;