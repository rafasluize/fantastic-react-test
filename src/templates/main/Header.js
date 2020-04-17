import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {

	return (
		<header className="py-20 mb-20">
			<div className="container">
				<div className="d-flex justify-content-space-between">
					<div className="logo">
						Rafaela Teste
					</div>
					<nav>
						<Link className="nav-link" to="/">Home</Link>
						<a href="https://rafaela.dev" className="nav-link" target="_blank" rel="noopener noreferrer">About</a>
					</nav>
				</div>
			</div>
		</header>
	)
    
}
