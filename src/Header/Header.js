import React from 'react';
import './Header.css';
import img from './logo.jpg';
const Header = () => {
    return(
        <div> 
        <header class="page-header">
	
	<div class="wrapper">

		<div class="logo">
			<img src= {img} height="19px" alt="logo"/>
		</div>

		<nav class="main-nav">
			<ul>
				<li><a href="#"> Home </a></li>
				<li><a href="#">About </a></li>
				<li><a href="#"> Shop </a></li>
				<li><a href="#"> Donate </a></li>
				<li><a href="#"> Contact us </a></li>

			</ul>
		</nav>
		
	</div>
	
</header>
    </div> 
    );
       
    
    
};

export default Header;