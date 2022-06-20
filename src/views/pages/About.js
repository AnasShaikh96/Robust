import React from 'react';
import Construction from "../../assets/images/construction-min.jpg"

export default function About() {
    return (
        <>
            <div className='container'>
                <h2 className='my-5 fw-bold'>
                    About Us
                </h2>
                <div className="row">
                    <div className="col-lg-7">
                        <p>
                            We, RRCES is a Mumbai based company that owns a group of passionate Engineers and 3D visualizers with over a decade worth of experience on Repairs and Maintenance work. <br />
                            Our team brings their technical knowledge, experience, and resourcefulness to the delivery of our construction .<br /> <br />
                            Due to versatility of our Engineering team, we can offer a wide range of services such as <b>Structural Designing, Structural Auditing and Structural and Non-Structural repairing works, Interior and Exterior Designing.</b>
                        </p>

                        <p className='mt-4'>
                            We believe in treating our customers with respect and faith. We had an aim to provide cost-effective and Good Quality outcomes through our engineering expertise. <br /> We strongly believe in Honesty and Integrity. 
                            We remain true to our founding values of quality, honesty and hard work.
                        </p>
                    </div>
                    <div className="col-lg-5">
                        <img src={Construction} alt="..." className='w-100' />
                    </div>
                </div>
            </div>
        </>
    )
}
