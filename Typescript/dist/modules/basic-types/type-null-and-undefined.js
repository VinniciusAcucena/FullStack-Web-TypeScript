export const bootstrap = () => {
    let title = null;
    console.log(title);
    console.log(title ? 'verdadeiro' : 'falso');
    let subtitle = undefined;
    console.log(subtitle);
    console.log(subtitle ? 'verdadeiro' : 'falso');
    const page = {
        title: 'teste'
    };
    page.handlerPage = () => {
        console.log('handlePage executada');
    };
    console.log(`subtitle: ${page.subtitle}`);
    console.log(page.handlerPage());
};
