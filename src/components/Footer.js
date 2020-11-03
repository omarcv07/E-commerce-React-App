import React, { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
            <div className='container p-4'>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <h5>Customer Care</h5>
                        <hr className='my-3' />
                        <div>
                            <ul className='list-unstyled'>
                                <li><a href='/'>Contact us</a></li>
                                <li><a href='/'>Faqs</a></li>
                                <li><a href='/'>Store location</a></li>
                                <li><a href='/'>Blog</a></li>
                                <li><a href='/'>Careers</a></li>
                                <li><a href='/'>Terms of use</a></li>
                                <li><a href='/'>Shipping</a></li>
                                <li><a href='/'>Returns</a></li>
                                <li><a href='/'>Privacy policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h5>About</h5>
                        <hr className='my-3' />
                        <div>
                            <p>Curators of ethical fashion and New Zealand designed.</p>

                            <p>Brawels is a destination for style seekers. Located in Masterton's boutique Kuripuni Village, Brawels is lovingly and carefully curated by Owner and Buyer, Omar Cardenas. Dedicated to NZ designed, ethical fashion and accessories- Brawels is a beautiful style edit.</p>

                            <p>Spliced on the rack, you will discover a mix of your favourite boutique labels, lounge-wear and lifestyle products. Brawels presents small, regular collections from designers that are limited in nature with a high rotation. For all women, all sizes, Brawels is the go-to fashion boutique of the Wairarapa. Purchases made at Brawels support suppliers and makers within NZ- shop local, shop small!</p>

                            <p>Feel inspired exploring a beautifully designed space that reflects a love for styling and creating. Style tips await from a small, warm team who adore fashion- the current, the classic and the refined.</p>

                            <p>A truly authentic element of the store, Owner Omar Cardenas, produces in-house clothing label My Boyfriends Back from Brawels, for Brawels. Shoppers can order different colours in signature styles, and select from seasonal pieces available instore. MBB is designed using surplus fabric stocks and is made in Auckland, NZ. </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h5>Newsletter</h5>
                        <hr className='my-3' />
                        <span>Join our mailing list</span>
                        <form>
                            <div className='form-group d-flex'>
                                <input type='email' className='form-control col-8' placeholder='your@email.com'></input>
                                <button className='btn bg-black text-white col-4'>
                                    Suscribe
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='col-12 text-uppercase justify-content-center d-flex'>
                        <span>© copyright Brawels 2020</span>
                    </div>
                </div>
            </div>
        </Fragment> 
    );
}

export default Footer;