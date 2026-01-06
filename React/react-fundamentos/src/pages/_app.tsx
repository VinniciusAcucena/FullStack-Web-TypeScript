import "../app/globals.css"

export default function App(props: any) {
    console.log(props)
    const {Component, pageProps} = props
    return (
        <Component {...pageProps}/>
    )
}