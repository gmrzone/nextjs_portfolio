import { MouseEvent, useCallback, useRef } from "react";

export const reducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Pointer-reactive 3D tilt plus a highlight that tracks the cursor across the
 * card. Shared by the award cards and the contact channels.
 *
 * Values are written straight to the node rather than held in state — a
 * mousemove handler that setStates would re-render on every pointer event —
 * and coalesced to one write per animation frame.
 *
 * Pair with a `--sheen` driven highlight and a short `transform` transition;
 * see the `.tilt-card` / `.sheen` rules in the consuming components.
 */
export function useCardTilt<T extends HTMLElement = HTMLDivElement>(maxTilt = 7) {
    const ref = useRef<T | null>(null);
    const frame = useRef(0);

    const onMouseMove = useCallback(
        (e: MouseEvent<HTMLElement>) => {
            const el = ref.current;
            if (!el || reducedMotion()) return;
            const { clientX, clientY } = e;
            if (frame.current) return;
            frame.current = window.requestAnimationFrame(() => {
                frame.current = 0;
                const r = el.getBoundingClientRect();
                const px = (clientX - r.left) / r.width; // 0..1 across
                const py = (clientY - r.top) / r.height; // 0..1 down
                el.style.transform = `perspective(900px) rotateX(${-(py - 0.5) * 2 * maxTilt}deg) rotateY(${(px - 0.5) * 2 * maxTilt}deg)`;
                el.style.setProperty("--mx", `${px * 100}%`);
                el.style.setProperty("--my", `${py * 100}%`);
                el.style.setProperty("--sheen", "1");
            });
        },
        [maxTilt],
    );

    const onMouseLeave = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        if (frame.current) {
            window.cancelAnimationFrame(frame.current);
            frame.current = 0;
        }
        el.style.transform = "";
        el.style.setProperty("--sheen", "0");
    }, []);

    return { ref, onMouseMove, onMouseLeave };
}

/*
 * Created on Sat Aug 15 2026
 *
 * Copyright (c) 2026 AFzal Saiyed
 */
