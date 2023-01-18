import { createContext, useState } from "react";
import { productsArray, getProductData } from "./productsStore";

export const CartContext = createContext({
	items: [],
	getProductQty: () => {},
	addOneToCart: () => {},
	removeOneFromCart: () => {},
	deleteFromCart: () => {},
	getTotalCost: () => {},
	getTotalQty: () => {},
});

export function CartProvider({ children }) {
	const [cartProducts, setCartProducts] = useState([]);

	// COMIENZA LA FUNCION PARA BUSCAR LA CANTIDAD DEL PRODUCTO
	function getProductQty(id) {
		// Loopea el cartProducts array y busca el product que tenga
		// product.id = el id que pasamos. Luego toma la cantidad del
		//objeto
		const quantity = cartProducts.find(
			(product) => product.id === id
		)?.quantity;

		if (quantity === undefined) {
			return 0;
		}

		return quantity;
	} // TERMINA FUNCION GETPRODUCTQTY

	//COMIENZA LA FUNCION PARA AGREGAR UN PRODUCTO AL CARRO
	function addOneToCart(id) {
		const quantity = getProductQty(id);

		if (quantity === 0) {
			// product is not in cart
			setCartProducts([
				...cartProducts,
				{
					id: id,
					quantity: 1,
				},
			]);
		} else {
			// product is in cart
			setCartProducts(
				cartProducts.map((product) =>
					product.id === id
						? { ...product, quantity: product.quantity + 1 }
						: product
				)
			);
		}
	} // TERMINA LA FUNCION ADDONETOCART

	//COMIENZA LA FUNCION PARA REMOVER 1 CANTIDAD DE X PRODUCTO DEL CARRO
	function removeOneFromCart(id) {
		const quantity = getProductQty(id);

		if (quantity === 1) {
			deleteFromCart(id);
		} else {
			setCartProducts(
				cartProducts.map((product) =>
					product.id === id
						? { ...product, quantity: product.quantity - 1 }
						: product
				)
			);
		}
	} //TERMINA LA FUNCION PARA REMOVER 1 CANTIDAD DE X PRODUCTO DEL CARRO

	// COMIENZA LA FUNCION PARA BORRAR UN PRODUCTO DEL CARRO
	function deleteFromCart(id) {
		setCartProducts((cartProducts) =>
			cartProducts.filter((currentProduct) => {
				return currentProduct.id !== id;
			})
		);
	} // TERMINA LA FUNCION PARA BORRAR UN PRODUCTO DEL CARRO

	//COMIENZA FUNCION PARA OBTENER EL COSTO TOTAL
	function getTotalCost() {
		let totalCost = 0;
		cartProducts.map((cartItem) => {
			const productData = getProductData(cartItem.id);
			totalCost += productData.price * cartItem.quantity;
		});
		return totalCost;
	} //TERMINA FUNCION PARA OBTENER EL COSTO TOTAL

	function getTotalQty() {
		let totalQty = 0;
		cartProducts.map((cartItem) => {
			let qty = getProductQty(cartItem.id);
			totalQty += qty;
		});
		return totalQty;
	}

	const contextValue = {
		items: cartProducts,
		getProductQty,
		addOneToCart,
		removeOneFromCart,
		deleteFromCart,
		getTotalCost,
		getTotalQty,
	};

	return (
		<CartContext.Provider value={contextValue}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context
