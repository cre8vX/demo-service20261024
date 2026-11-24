
loadProducts();

function loadProducts() {
    fetch("http://localhost:8080/get-products")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            generateProductCards(data)
        })
}

function generateProductCards(data) {
    let productGrid = document.getElementById("container-product");
    let productGridContent = "";

    data.forEach(element => {
        productGridContent += `
        <div class="col-12 md:col-4" data-aos="flip-left" >
            <section class="card h-100 d-flex flex-column justify-content-between p-3">
                <img src="${element.imageUrl}" class="card-img-top" style="height: 240px; object-fit: contain;" alt="${element.name}">
                <div class="card-body d-flex flex-column px-0 pb-0">
                    <h4 class="card-title">${element.name}</h4>
                    <p class="card-text text-body-secondary">${element.description}</p>
                    <a href="#" class="btn-solid theme-primary mt-auto">${element.price} LKR</a>
                </div>
            </section>
        </div>`;
    });

    productGrid.innerHTML = productGridContent;
    

    AOS.refresh(); 
}

