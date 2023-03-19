import React from 'react';
import MiniCart from 'cart/MiniCart';
import Login from 'cart/Login';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className="p-5 bg-blue-500 text-white text-3xl font-bold">
			<div className="flex">
				<div className="flex-grow">
					<Link to="/">Fidget Spinner World</Link>
					<span className="mx-5">|</span>
					<Link to="/cart" className="flex-grow">Cart</Link>
				</div>
				<div className="flex-end relative">
					<MiniCart/>
					<Login/>
				</div>
			</div>
		</div>
	);
}