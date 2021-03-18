import React from 'react';
import './OtherBody.css';
import img from './image.png';
const otherBoddy = () => {
    return(
		<div className="mid-part">
        <div className='wrapper'>
			<article>
			<img src={img} height='25px' alt="pix"/>
				<h1>Lifetime warranty</h1>

				<p>All our products-whether we</p>
				<p>make them or not-are backed</p>
				<p>by our lifetime warranty.</p>

			</article>
			
			<article>
			<img src={img} height='25px' alt="pix"/>
				<h1>shoppin Experience</h1>
				<p>All our products-whether we</p>
				<p>make them or not-are backed</p>
				<p>by our lifetime warranty.</p>

			</article>

			<article>
			<img src={img} height='25px' alighn='center' alt="pix"/>
				<h1>On-time Delivery</h1>

				<p>All our products-whether we</p>
				<p>make them or not-are backed</p>
				<p>by our lifetime warranty.</p>

			</article>

			<article>
				<img src={img} height='25px' alighn='center' alt="pix"/>
				<h1>Best class service</h1>

				<p>All our products-whether we</p>
				<p>make them or not-are backed</p>
				<p>by our lifetime warranty.</p>

			</article>
		</div>
		
	</div>

    )
};
export default otherBoddy;