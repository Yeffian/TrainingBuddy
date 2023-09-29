import { writable, get } from "svelte/store";


// timer stuff
export const minsToEnd = writable(0);
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

    minsToEnd.subscribe(m => {
        console.log(get(minsToEnd));
        if (m >= 1) {
            console.log('changed mte');
        }
    });

    setInterval(() => {
        if (get(mins) >= get(minsToEnd)) {
            timerRunning.set(false);
            elapsedTime.set(0);
            startTime.set(Date.now());
        }

        if (get(timerRunning) == true) {
            const endTime = Date.now();
            elapsedTime.update(et => endTime - get(startTime) + get(elapsedTimeAfterStop));
        }
    });
}
