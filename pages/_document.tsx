import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class CustomDocument extends Document{
    render(){
        return<Html>
            <Head>
                <meta property="custom" content="Varshath" />
            </Head>
            <body>
                <Main />
            </body>
            <NextScript />
           
        </Html>
    }
}
