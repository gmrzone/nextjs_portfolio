import { RefObject } from "react";

export class TypeWritterText {
    private textElement;
    private words;
    private wordIndex;
    private domText;
    private deleteSpeed;
    private typeSpeed;
    private wait;
    private isDeleting;
    private timer: ReturnType<typeof setTimeout> | null = null;
    private stopped = false;

    constructor(
        textElement: RefObject<HTMLSpanElement | null>,
        word: string[],
        deleteSpeed: number,
        typeSpeed: number,
        wait: number = 1500,
    ) {
        this.textElement = textElement;
        this.words = word;
        this.wordIndex = 0;
        this.deleteSpeed = deleteSpeed;
        this.typeSpeed = typeSpeed;
        this.wait = wait;
        this.isDeleting = false;
        this.domText = "";
        this.startTyping();
    }

    /**
     * Cancels the pending tick and prevents any further rescheduling. Callers
     * must invoke this when the owning component unmounts — without it the
     * setTimeout loop reschedules itself forever and keeps writing innerHTML
     * into a detached node.
     */
    stop() {
        this.stopped = true;
        if (this.timer !== null) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    startTyping() {
        if (this.stopped) return;
        const currentWordIndex = this.wordIndex % this.words.length;
        const currentWord = this.words[currentWordIndex];
        let currentSpeed;
        if (this.isDeleting) {
            this.domText = currentWord.substring(0, this.domText.length - 1);
            currentSpeed = this.deleteSpeed;
        } else {
            this.domText = currentWord.substring(0, this.domText.length + 1);
            currentSpeed = this.typeSpeed;
        }

        if (this.textElement && this.textElement.current) {
            this.textElement.current.innerHTML = `<span>${this.domText}</span>`;
        }

        if (this.domText === currentWord) {
            currentSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.domText === "" && this.isDeleting) {
            this.wordIndex++;
            this.isDeleting = false;
            currentSpeed = 220;
        }

        this.timer = setTimeout(() => this.startTyping(), currentSpeed);
    }
}

/*
 * Created on Tue Jul 20 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
