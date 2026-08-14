import { RefObject, useEffect, useRef, useState } from "react";
import { reducedMotion } from "../../../hooks/useCardTilt";

export { reducedMotion };

/**
 * Fraction (0..1) of the way the given element has travelled through the
 * viewport. Drives the beam that fills down the timeline as you scroll.
 * Reads are coalesced into one per animation frame — getBoundingClientRect
 * forces layout, so running it per scroll event would be the classic jank.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Reduced motion: show the beam already complete. Scheduled rather than
        // set inline, because setState in an effect body triggers a cascading
        // render (and would read layout during commit).
        if (reducedMotion()) {
            const id = window.requestAnimationFrame(() => setProgress(1));
            return () => window.cancelAnimationFrame(id);
        }

        let frame = 0;
        const measure = () => {
            frame = 0;
            const rect = el.getBoundingClientRect();
            const vh = window.innerHeight;
            const start = vh * 0.85; // beam begins once the track reaches here
            const end = vh * 0.35; // and completes once its end passes here
            const travel = rect.height + (start - end);
            setProgress(Math.max(0, Math.min(1, (start - rect.top) / travel)));
        };
        const onScroll = () => {
            if (!frame) frame = window.requestAnimationFrame(measure);
        };

        onScroll(); // schedule the first measurement rather than running it inline
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, [ref]);

    return progress;
}

/** Latches true the first time the element is meaningfully on screen. */
export function useActivated(ref: RefObject<HTMLElement | null>, threshold = 0.35) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(true);
                        obs.disconnect();
                    }
                });
            },
            { threshold },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [ref, threshold]);

    return active;
}

/** Eases a figure up from zero once `active` flips. */
export function useCountUp(target: number, active: boolean, duration = 1500) {
    const [value, setValue] = useState(0);
    const frame = useRef(0);

    useEffect(() => {
        if (!active) return;
        if (reducedMotion()) {
            const id = window.requestAnimationFrame(() => setValue(target));
            return () => window.cancelAnimationFrame(id);
        }
        // performance.now() rather than Date.now() so the first frame is a true zero
        const started = performance.now();
        const tick = (now: number) => {
            const t = Math.min(1, (now - started) / duration);
            const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // easeOutExpo
            setValue(target * eased);
            if (t < 1) frame.current = window.requestAnimationFrame(tick);
        };
        frame.current = window.requestAnimationFrame(tick);
        return () => window.cancelAnimationFrame(frame.current);
    }, [active, target, duration]);

    return value;
}

/*
 * Created on Sat Aug 15 2026
 *
 * Copyright (c) 2026 AFzal Saiyed
 */
