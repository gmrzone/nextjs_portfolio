module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    mode: "jit",
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                poppins: [
                    "Poppins",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    "Fira Sans",
                    "Droid Sans",
                    "Helvetica Neue",
                    "sans-serif",
                ],
            },
            fontSize: {
                "5xl-sm": ["2.2rem", { lineHeight: "1.3" }],
                "5xl-500": ["2.4rem", { lineHeight: "1.3" }],
                "5xl-992": ["2.6rem", { lineHeight: "1.3" }],

                "4xl-sm": ["1.8rem", { lineHeight: "1.3" }],
                "4xl-500": ["1.9rem", { lineHeight: "2.5rem" }],
                "4xl-992": ["2.1rem", { lineHeight: "2.5rem" }],

                "3xl-sm": ["1.5rem", { lineHeight: "2.25rem" }],
                "3xl-500": ["1.6rem", { lineHeight: "2.25rem" }],
                "3xl-992": ["1.8rem", { lineHeight: "2.25rem" }],
            },
            screens: {
                "desktop-st": "992px",
            },
            colors: {
                "nav": "transparent",
                main: "rgb(5, 55, 66)",
                sec: "rgb(29, 161, 242)",
                "sec-lg": "rgb(162, 219, 250)",
                "bg-sec": "rgb(232, 240, 242)",
                action: "#ff4747",
                "action-hover": "#ff6666",

                "nav-dark": "rgb(22,21,23)",
                "main-dark": "rgb(29,31,31)",
                "sec-dark": "rgb(25,33,33)",

                "sec-lg-dark": "rgb(162, 219, 250)",

                "bg-sec-dark": "rgb(124, 124, 156)",
                "bg-sec-inverted": "rgb(254, 252, 250)",
                "action-dark": "#ff4747",
                "action-hover-dark": "#ff6666",
            },
            boxShadow: {
                "mobile-nav": "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            },
            height: {
                "hero-xl": "40rem",
                "hero-large": "38rem",
                "hero-sl": "36rem",
                "hero-mid": "34rem",
                "hero-sm": "32rem",
                hero: "30rem",
            },
            width: {
                "project-image": "30rem",
            },
            animation: {
                "spin-fast": "spin 0.6s linear infinite",
                "logo-center": "logo-one 0.3s 1s ease-in forwards",
                "logo-main": "logo-two 0.3s 0.7s ease-in forwards",
                "main-gradiant": "gradiant-bg 0.6s ease-in forwards",
                "theme-text": "animated-text 0.3s 0.35s ease-in forwards",
                "theme-text-m": "animated-text 0.3s 0.05s ease-in forwards",
            },
            keyframes: {
                "logo-one": {
                    to: {
                        transform: "translateX(0px)",
                        opacity: "1",
                    },
                },
                "logo-two": {
                    to: {
                        opacity: "1",
                    },
                },
                "gradiant-bg": {
                    to: {
                        transform: "translateX(0px)",
                    },
                },
                "animated-text": {
                    "0%": {
                        transform: "translateX(0px)",
                    },
                    "99%": {
                        transform: "translateX(100%)",
                        opacity: "1",
                    },
                    "100%": {
                        transform: "translateX(100%)",
                        opacity: "0",
                    },
                },
            },
        },
    },
    variants: {
        extend: {
            translate: ["group-hover"],
        },
    },
    plugins: [],
};
