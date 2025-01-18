let api = async ()=>{
    try {
        let data = await fetch('https://fakestoreapi.com/products')
        let dataJson = await data.json()
        return dataJson
    } catch (error) {
        
        console.log(error);
    }
}

api().then(e =>{
    console.log(e);
    let row_produit = document.querySelector('.row-produit')
    let htmlStr = '';

    e.forEach((el,i) => {
        htmlStr+=
        `
    <div class="col-md-4">
        <div class="card w-100">
          <img src="${el.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${el.title.slice(0,25)}</h5>
            <p class="card-text">${el.title.slice(0,50)+' ...'}</p>
            <button class="btn btn-primary">voir plus</button>
          </div>
        </div>
    </div>

        `
    });
    row_produit.innerHTML = htmlStr

})


