import React from 'react';
import './Footer.css';

const footer = () =>{
    return(
        <div >
            <footer className="page-footer">	
	<div className="wrapper" className="foot">
		<div className="footer-col">
				<h3>About</h3>
			<ul>
				<li>Privacy policy</li>
				<li>Terms of use</li>
				<li>News</li>
				<li>Events</li>
			</ul>
		</div>

				<div className="footer-col">
						<h3>Get Involved</h3>
			<ul>
				<li>Work with Us</li>
				<li>Subscribe for news letter</li>
				<li>Forum</li>
		
			</ul>
		</div>

				<div className="footer-col">
						<h3>Help Center</h3>
			<ul> 
				<li>FAQs</li>
				<li>Contact Us</li>
				<li>How to start a challenge</li>
			
			</ul>
		</div>

				<div className="footer-col" id="social">
							<h3>Social</h3>
			<ul>
				<li> <a href="#" class="fb"><i className="fab fa-facebook-square"></i></a> </li>
				<li> <a href="#" class="tw"><i className="fab fa-twitter-square"></i></a> </li>
				<li> <a href="#" class="gp"><i className="fab fa-google-plus-square"></i></a> </li>
				
			</ul>
			<p className="copy">@ 2021. Project All Rights Reserved </p>
		</div>
	</div>
	</footer>
        </div>
    )
};
export default footer;