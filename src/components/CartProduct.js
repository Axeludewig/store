import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";

export default function CartProduct(props) {
	const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const productData = getProductData(id);

	return (
		<>
			<h3>{productData.title}</h3>
			<p>Total: {quantity} pieza(s).</p>
			<p>${(quantity * productData.price).toFixed(2)}</p>
			<Card.Img
				className="p-2 rounded-pill img-fluid"
				src={productData.img}
			></Card.Img>
			<Button
				size="sm-6"
				className="mx-2"
				onClick={() => cart.deleteFromCart(id)}
			>
				Remover
			</Button>
			<Button
				onClick={() => cart.addOneToCart(id)}
				sm="6"
				className="mx-2"
			>
				+
			</Button>
			<Button
				onClick={() => cart.removeOneFromCart(id)}
				sm="6"
				className="mx-2"
			>
				-
			</Button>
			<hr></hr>
		</>
	);
}
