import React from 'react';
import { useEffect, useState } from 'react';
import { login, jwt } from './cart';
import Login from './Login';

export default function CartContent() {
	const [token, setToken] = useState('');

	useEffect(() => {
		return jwt.subscribe((val) => setToken(val ?? ''));
	}, []);

	return (
		<div>
			<div>JWT: {token}</div>
			<Login />
		</div>
	);
}