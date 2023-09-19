import React from 'react';
import logo from '../img/logo.svg'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="f-container">
                <div className='f-info'>
                    <h2 className='f-logo'><img src={logo} alt="logo" /></h2>
                    <p>Copyright&copy; 2017.cinema information.All right reserved</p>
                </div>
                <ul className='f-menu'>
                    <li><span>About</span>
                        <ul>
                            <li>About..</li>
                        </ul>
                    </li>
                    <li><span>service</span>
                        <ul>
                            <li>1:1 고객문의</li>
                            <li>자주묻는 질문</li>
                        </ul>
                    </li>
                    <li><span>Blog</span>
                        <ul>
                            <li>Youtube</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </li>
                </ul>
                <div className="mapBox">
                
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d793.7917821223344!2d127.00595098106444!3d37.26746377170413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1690966928576!5m2!1sko!2skr" className='map'></iframe>
                
                </div>
            </div>
        </div>
    );
};

export default Footer;