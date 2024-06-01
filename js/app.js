/**
 * REST API
 * Netword request methods
 * GET
 * POST
 * PUT
 * PATCH
 * DELETE
 */
const main = document.querySelector('main');
const loading = document.querySelector('main .loading');
// function getProducts() {
// 	fetch('https://fakestoreapi.com/products')
// 		.then((res) => res.json())
// 		.then((products) => {
// 			let elem = '';
// 			products.forEach((product) => {
// 				const salePrice = product.price * 2;
// 				elem += `
//                 <div class="card">
//                 <a href="./details.html?productid=${product.id}">
//                     <img src="${product.image}" alt="${product.title}" />
//                     <div class="meta">
//                         <h3>
//                         ${product.title}
//                         </h3>
//                         <p> USD ${product.price}</p>
//                         <del>${salePrice}</del>
//                     </div>
//                 </a>
//             </div>

//                 `;
// 				main.innerHTML = elem;
// 			});
// 		});
// }

// getProducts();
async function getProducts() {
	try {
		const response = await fetch('https://fakestoreapi.com/products');
		const products = await response.json();
		loading.style.display = 'none';
		let elem = '';
		products.forEach((product) => {
			const salePrice = product.price * 2;
			elem += `
            <div class="card">
                <a href="./details.html?productid=${product.id}">
                    <img src="${product.image}" alt="${product.title}" />
                    <div class="meta">
                        <h3>
                        ${product.title}
                        </h3>
                        <p> USD ${product.price}</p>
                        <del>USD ${salePrice}</del>
                    </div>
                </a>
            </div>
            `;
			main.innerHTML = elem;
		});
	} catch (error) {
		console.log(error.message);
	}
}

getProducts();
