const products = [
    { image: 'assets/images/product1.jpg', title: 'Product 1', description: 'High-quality product.', price: '$10' },
    { image: 'assets/images/product2.jpg', title: 'Product 2', description: 'Durable and reliable.', price: '$15' },
    { image: 'assets/images/product3.jpg', title: 'Product 3', description: 'Sleek and stylish.', price: '$20' },
    { image: 'assets/images/product4.jpg', title: 'Product 4', description: 'Perfect for everyday use.', price: '$25' },
    { image: 'assets/images/product5.jpg', title: 'Product 5', description: 'A must-have item.', price: '$30' },
    { image: 'assets/images/product6.jpg', title: 'Product 6', description: 'Top-rated quality.', price: '$35' },
    { image: 'assets/images/product7.jpg', title: 'Product 7', description: 'Best value for money.', price: '$40' },
    { image: 'assets/images/product8.jpg', title: 'Product 8', description: 'User-friendly design.', price: '$45' },
    { image: 'assets/images/product9.jpg', title: 'Product 9', description: 'Limited edition.', price: '$50' }
];

document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>${product.price}</strong></p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>`;
        productList.innerHTML += productCard;
    });
});
