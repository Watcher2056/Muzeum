const url = "data.json"
fetch(url)
    .then(valasz => valasz.json())
    .then(adatok => adatok.forEach(item => createDiv(item)))

function createDiv(item) {
    const template = `
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">${item.title}</p>
            <a href="${item.link}" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`
}

//const main = document.querySelector()