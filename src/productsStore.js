const productsArray = [
	{
		id: "1",
		title: "Cenicero morado de ojo",
		price: 4.99,
		img: "/products/1.jpg",
	},
	{
		id: "2",
		title: "Cenicero blanco de ojo",
		price: 7.99,
		img: "/products/2.jpg",
	},
	{
		id: "3",
		title: "Planchette con ojo murciélago",
		price: 34.99,
		img: "/products/3.jpg",
	},
	{
		id: "4",
		title: "Cenicero coffin morado con ojos",
		price: 24.99,
		img: "/products/4.png",
	},
	{
		id: "5",
		title: "Joyero coffin rojo con telarañas negras",
		price: 14.99,
		img: "/products/5.png",
	},
];

const imagesArray = [
	{
		link: "/products/1.jpg",
	},
	{
		link: "/products/2.jpg",
	},
	{
		link: "/products/3.jpg",
	},
	{
		link: "/products/4.png",
	},
	{
		link: "/products/5.png",
	},
];

function getProductData(id) {
	const productData = productsArray.find((product) => product.id === id);

	if (productData === undefined) {
		console.log("Product data does not exist for ID: " + id);
		return undefined;
	}

	return productData;
}

export { productsArray, getProductData, imagesArray };
