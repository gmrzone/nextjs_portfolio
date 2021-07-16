import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

    render() {
        return (
            <Html lang="en" className="h-full w-full">
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css"
                        integrity="sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB"
                        crossOrigin="anonymous"
                        key="fontawesome"
                    />
                </Head>
                <body className="font-poppins h-full w-full antialiased">
                    <script
						dangerouslySetInnerHTML={{
							__html: SetInitialTheme,
						}}
					></script>
                    <div id="modal"></div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

const SetInitialTheme = `(function(){
    const isDarkTheme = (localStorage.getItem('dark') === 'true')
    if (isDarkTheme){
        document.body.classList.add("dark")
    }
    
    
})()`

export default MyDocument;
