import { writable, get } from "svelte/store";


// timer stuff
export const minsToEnd = writable(0);
export const timerRunning = writable(false);
export const startTime = writable(0);
export const elapsedTime = writable(0);
export const elapsedTimeAfterStop = writable(0);
export const intervalTimer = writable(0);
export const intervalTime = writable(0);

export const secs = writable(0);
export const mins = writable(0);

export const currentTask = writable(0);

// tasks
export const startTimer = () => {
    currentTask.set(0);
    startTime.set(Date.now());

    elapsedTime.subscribe(et => {
        secs.update(s => Math.floor((et / 1000) % 60));
        mins.update(m => Math.floor((et / 1000 / 60) % 60));
    });

    minsToEnd.subscribe(m => {
        // console.log(get(minsToEnd));
        if (m >= 1) {
            console.log('changed mte');
        }
    });

    console.log(get(intervalTime));

    setInterval(() => {
        if (get(mins) >= get(minsToEnd)) {
            timerRunning.set(false);
            elapsedTime.set(0);
            startTime.set(Date.now());
        }

        if (get(timerRunning) == true) {
            elapsedTime.update(et => Date.now() - get(startTime) + get(elapsedTimeAfterStop));
            intervalTimer.update(et => Date.now() - get(startTime) + get(elapsedTimeAfterStop));

            if (get(intervalTimer) == (get(intervalTime) * 60000)) {
                console.log('update current task now')
            }
        }
    });
}