import React from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { imagesArray } from "../productsStore";

export default function ProductCard(props) {
	const cart = useContext(CartContext);
	const product = props.product;
	const productQty = cart.getProductQty(product.id);

	return (
		<Card>
			<Card.Body>
				<Card.Title>{product.title}</Card.Title>
				<Card.Text>${product.price}</Card.Text>
				<Card.Img
					className="p-4 rounded-pill"
					src={product.img}
				></Card.Img>
				{productQty > 0 ? (
					<>
						<Form as={Row}>
							<Form.Label
								colum="true"
								sm="6"
							>
								En el carrito: {productQty}
							</Form.Label>
							<Col sm="6">
								<Button
									onClick={() =>
										cart.addOneToCart(product.id)
									}
									sm="6"
									className="mx-2"
								>
									+
								</Button>
								<Button
									onClick={() =>
										cart.removeOneFromCart(product.id)
									}
									sm="6"
									className="mx-2"
								>
									-
								</Button>
							</Col>
						</Form>
						<Button
							variant="danger"
							className="my-2"
							onClick={() => cart.deleteFromCart(product.id)}
						>
							Remover
						</Button>
					</>
				) : (
					<Button
						variant="primary"
						onClick={() => cart.addOneToCart(product.id)}
					>
						Agregar al Carrito
					</Button>
				)}
			</Card.Body>
		</Card>
	);
}
