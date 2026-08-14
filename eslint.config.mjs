import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

// ESLint 9 requires flat config, and `next lint` was removed in Next 16 —
// linting now runs through the ESLint CLI directly (see the `lint` script).
//
// eslint-config-next 16's react-hooks rules (immutability, refs) previously had
// to be downgraded to warnings for pre-existing violations in TestimonialSlider
// and ThemeSwitcher. Both are gone — the component was removed and
// ThemeSwitcher's dead `firstRender` ref deleted — so the rules now run at their
// default severity and the codebase passes clean.
const config = [{ ignores: [".next/**", "out/**", "build/**", "node_modules/**"] }, ...nextCoreWebVitals];

export default config;
