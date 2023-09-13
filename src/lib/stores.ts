import { writable, get } from "svelte/store";

export const timerRunning = writable(false);
export const elapsedTime = writable(0);

export const startTimer = () => {
    const startTime = Date.now();

    setInterval(() => {
        if (get(timerRunning) == true) {
            const endTime = Date.now();
            elapsedTime.update(et => endTime - startTime);
        } else { 
            console.log('not running');
        }
    });
}