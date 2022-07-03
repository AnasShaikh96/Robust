import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="contact-wrap py-5">
                <div className='container '>
                    <div className="row">
                        <h3 className='mb-4'>Contact</h3>
                        <div className='col-lg-6'>
                            <div>
                                <h5>Our Address</h5>
                                <p>
                                    Placeholder Address,
                                    <br />Nariman, <br />
                                    Mumbai 400001, <br />
                                    India
                                </p>
                            </div>
                            <div>
                                <p >
                                    <i className='fa fa-phone'></i>+91 8888888888
                                </p>
                                <p>
                                    <i className='fa fa-globe'></i>  <a href="https://robustengineers.netlify.app/">https://robustengineers.netlify.app/</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h5>Contact Form</h5>
                            <form action="">

                                <div className="row">
                                    <div className="col-lg-6 my-2">
                                        <label htmlFor="name">
                                            Name
                                        </label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <div className="col-lg-6 my-2">
                                        <label htmlFor="email">
                                            Email
                                        </label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <div className="col-lg-12 my-2">
                                        <label htmlFor="email">
                                            Your Message
                                        </label>
                                        <textarea className='form-control' rows="5" style={{ resize: 'none' }} />                                </div>
                                </div>
                                <div className='text-end'>
                                    <button className='btn btn-light'>
                                        Submit
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}
