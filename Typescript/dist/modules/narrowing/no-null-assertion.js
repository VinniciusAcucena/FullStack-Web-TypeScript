export const bootstrap = () => {
    const subtitle = document.getElementById('subtitle');
    subtitle.style.color = 'green';
    const getProducts = () => {
        return ['celular', 'TV'];
    };
    const products = getProducts();
    products.map(item => console.log(item));
};
