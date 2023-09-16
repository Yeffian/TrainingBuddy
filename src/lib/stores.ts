import { writable, get } from "svelte/store";

export const timerRunning = writable(false);
export const elapsedTime = writable(0);

export const secs = writable(0);
export const mins = writable(0);

export const startTimer = () => {
    const startTime = Date.now();

    elapsedTime.subscribe(et => {
        secs.update(s => Math.floor((et / 1000) % 60));
        mins.update(m => Math.floor((et / 1000 / 60) % 60));
    });

    setInterval(() => {
        if (get(timerRunning) == true) {
            const endTime = Date.now();
            elapsedTime.update(et => endTime - startTime);
        }
    });
}
