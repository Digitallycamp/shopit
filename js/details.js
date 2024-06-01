const content = document.querySelector('.content');
const loading = document.querySelector('.content .loading');
const id = new URLSearchParams(window.location.search).get('productid');
console.log(id);
async function getSingleProduct() {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`);
	const product = await res.json();
	loading.style.display = 'none';
	let elem = `
                <div class="content_wrapper">
					<div class="left">
						<img src="${product.image}" />
					</div>
					<div class="right">
						<h1>${product.title}</h1>
						<p>Price:USD ${product.price}</p>
						<p>Rating: ${product.rating.rate}</p>
						<p>Available stock: ${product.rating.count}</p>
						<h3>Description</h3>
						<p>
                        ${product.description}
						</p>
						<div class="meta">
							<input type="number" min="1" size="8" />
							<button data-amount='${product.price} data-title="${product.title}"'>Check out</button>
						</div>
					</div>
				</div> 
    
    `;
	content.innerHTML = elem;
}

getSingleProduct();
