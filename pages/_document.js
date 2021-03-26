import Document, {Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document{
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }
    render(){
        return(
            <Html> 
                <Head>
                    <style>{`
                    body{
                        margin:0;
                    }
                    `}</style>
                    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"></link>
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}