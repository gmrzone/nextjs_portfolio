import "../styles/globals.css";
import { AppProps } from "next/app";
import { Poppins } from "next/font/google";

// Self-hosted at build time by next/font, replacing the `@import url(...)` of
// fonts.googleapis.com that used to sit at the top of globals.css. That import
// was a serialised round trip — the browser could not discover the font request
// until globals.css had been fetched and parsed — and it pulled in a second
// origin. next/font also generates a size-adjusted fallback, which cuts the
// layout shift as the webfont swaps in.
//
// Exposed as a CSS variable on :root rather than via next/font's `variable`
// class, because that class would have to be applied to a wrapper element and
// the extra DOM node would sit in the middle of this layout's `h-full` chain.
// The Tailwind `--font-poppins` theme token reads this variable, so the
// `font-poppins` utility keeps working unchanged.
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <style jsx global>{`
                :root {
                    --font-poppins-loaded: ${poppins.style.fontFamily};
                }
            `}</style>
        </>
    );
}

export default MyApp;
