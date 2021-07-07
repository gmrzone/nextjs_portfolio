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
                "5xl-sm": ["2rem", { lineHeight: "1.3" }],
                "5xl-500": ["2.2rem", { lineHeight: "1.3" }],
                "5xl-992": ["2.6rem", { lineHeight: "1.3" }],
                "4xl-sm": ["1.7rem", { lineHeight: "1.3" }],
                "4xl-500": ["1.85rem", { lineHeight: "2.5rem" }],
                "4xl-992": ["2.1rem", { lineHeight: "2.5rem" }],
                "3xl-sm": ["1.6rem", { lineHeight: "2.25rem" }],
                "3xl-500": ["1.7rem", { lineHeight: "2.25rem" }],
                "3xl-992": ["1.8rem", { lineHeight: "2.25rem" }],
            },
            screens: {
                "desktop-st": "992px",
            },
            colors: {
                main: "rgb(5, 55, 66)",
                sec: "rgb(29, 161, 242)",
                "sec-lg": "rgb(162, 219, 250)",
                "bg-sec": "rgb(232, 240, 242)",
                action: "#ff4747",
                "action-hover": "#ff6666",
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
            animation: {
                "spin-fast": "spin 0.6s linear infinite",
            },
        },
    },
    variants: {
        extend: {
            textColor: ['group-focus']
        },
    },
    plugins: [],
};
