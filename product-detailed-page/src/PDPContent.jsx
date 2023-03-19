import React, { useEffect, useState } from 'react';
import { currency, getProductById } from 'home/products';
import { useParams } from 'react-router-dom';

export default function PDPContent() {
	const { id } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		getProductById(id).then(setProduct);
	}, []);

	return (
		<div className="grid grid-cols-2 gap-5">
			<div>
				<img src={product?.image} alt={product.name}/>
			</div>

			<div>
				<div className="flex">
					<h1 className="flex-grow font-bold text-3xl">
						{product.name}
					</h1>
					<div className="flex-grow font-bold text-3xl">
						{currency.format(product.price)}
					</div>
				</div>
				<div className="mt-10">
					{product.description}
				</div>
				<div className="mt-10">
					{product.longDescription}
				</div>
			</div>
		</div>
	);
}