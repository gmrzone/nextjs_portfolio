module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    mode: 'jit',
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
                "4xl-sm": ["1.7rem", { lineHeight: "1.3"}],
                "4xl-500": ["1.85rem", { lineHeight: "2.5rem" }],
                "4xl-992": ["2.1rem", { lineHeight: "2.5rem" }],
                "3xl-sm": ["1.6rem", { lineHeight: "2.25rem" }],
                "3xl-500": ["1.7rem", { lineHeight: "2.25rem" }],
                "3xl-992": ["1.8rem", { lineHeight: "2.25rem" }],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
