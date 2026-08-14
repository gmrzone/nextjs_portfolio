import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

// ESLint 9 requires flat config, and `next lint` was removed in Next 16 —
// linting now runs through the ESLint CLI directly (see the `lint` script).
const config = [
    { ignores: [".next/**", "out/**", "build/**", "node_modules/**"] },
    ...nextCoreWebVitals,
    {
        // eslint-config-next 16 adds react-hooks rules that flag pre-existing
        // patterns in this codebase's imperative animation code (reassigning
        // locals after render, writing refs during render) in
        // components/home/testimonial/TestimonialSlider.tsx and
        // components/shared/ThemeSwitcher/index.tsx.
        //
        // These are long-standing violations, not regressions from the
        // dependency upgrade, and fixing them means changing runtime timing in
        // animation code that has no test coverage. Kept visible as warnings so
        // they can be addressed deliberately rather than as upgrade collateral.
        rules: {
            "react-hooks/immutability": "warn",
            "react-hooks/refs": "warn",
        },
    },
];

export default config;
