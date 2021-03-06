import { MutableRefObject } from "react";

export class TypeWritterText {
    private textElement;
    private words;
    private wordIndex;
    private domText;
    private deleteSpeed;
    private typeSpeed;
    private wait;
    private isDeleting;

    constructor(
        textElement: MutableRefObject<HTMLSpanElement | null>,
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

    startTyping() {
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

        setTimeout(() => this.startTyping(), currentSpeed);
    }
}

/*
 * Created on Tue Jul 20 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
