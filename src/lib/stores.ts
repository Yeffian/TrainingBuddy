import { writable, get } from "svelte/store";


// timer stuff
export const timerRunning = writable(false);
export const startTime = writable(0);
export const elapsedTime = writable(0);
export const elapsedTimeAfterStop = writable(0);

export const secs = writable(0);
export const mins = writable(0);

// tasks

export const startTimer = () => {
    startTime.set(Date.now());

    elapsedTime.subscribe(et => {
        secs.update(s => Math.floor((et / 1000) % 60));
        mins.update(m => Math.floor((et / 1000 / 60) % 60));
    });

    setInterval(() => {
        if (get(timerRunning) == true) {
            const endTime = Date.now();
            elapsedTime.update(et => endTime - get(startTime) + get(elapsedTimeAfterStop));
        }
    });
}
