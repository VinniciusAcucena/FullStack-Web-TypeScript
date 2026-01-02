export const bootstrap = () => {
    const title = Symbol('HOME');
    const pageTitle = Symbol('HOME');
    if ('HOME' === 'HOME') {
        console.log('HOME igual');
    }
    const titleSymbol = Symbol('title');
    const Page = {
        title: 'HOME',
        [titleSymbol]: 'página principal'
    };
    console.log(Page.title);
    console.log(Page[titleSymbol]);
    console.log(Page);
};
