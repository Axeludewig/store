import React from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

export default function NavbarComponent() {
	const cart = useContext(CartContext);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	console.log(cart.items);
	const productsCount = cart.items.reduce(
		(sum, product) => sum + product.quantity,
		0
	);

	return (
		<>
			<Navbar expand="sm">
				<Navbar.Brand href="/">
					<img
						width="200px"
						height="120px"
						src="/zen44.png"
						alt="rg-logo"
					></img>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Button onClick={handleShow}>
						Carrito ({productsCount} Artículos)
					</Button>
				</Navbar.Collapse>
			</Navbar>
			<Modal
				show={show}
				onHide={handleClose}
			>
				<Modal.Header closeButton>
					<Modal.Title>Carrito de compras</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{productsCount > 0 ? (
						<>
							<p>Artículos en tu carrito:</p>
							{cart.items.map((currentProduct, idx) => (
								<CartProduct
									key={idx}
									id={currentProduct.id}
									quantity={currentProduct.quantity}
								></CartProduct>
							))}

							<h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

							<Button variant="success">Comprar!</Button>
						</>
					) : (
						<h1>No hay artículos en tu carrito!</h1>
					)}
				</Modal.Body>
			</Modal>
		</>
	);
}
