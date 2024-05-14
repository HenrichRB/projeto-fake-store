async function GetAllProducts(limit=null, sort='asc') {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    try {
        const params = `?limit=${limit}&sort=${sort}`;
        const response = await fetch(`https://fakestoreapi.com/products${params}`, requestOptions);
        const result = response.json();
        return result;
    } catch (error) {
        console.error('Houve um erro ao buscar os produtos', error);
    }
}

async function getASingleProduct(productId) {
    try {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const result = await response.json();
    return result;
    } catch (error) {
        console.error('Houve um erro ao procurar o produto', error)
    }
}

window.addEventListener('load', async () => {
    let produto = await getASingleProduct(3);
    console.log(produto);
    let produtos = await GetAllProducts();
    console.log(produtos);
})