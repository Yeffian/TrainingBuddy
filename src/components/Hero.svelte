<script lang="ts">
    import Task from "./Task.svelte";
    import Timer from "./Timer.svelte";
    import { timerRunning, elapsedTimeAfterStop, startTimer, elapsedTime, startTime, minsToEnd, intervalTime } from "$lib/stores";
    import { get } from "svelte/store";

    let trainingTimeBuff: string;
    let intervalsBuff: string;

    let trainingTime: number = 0;
    let interval: number;


    let minutes = trainingTime;
    let seconds = 0;

    $: intervalTimeframe = trainingTime / interval;

    const createCards = () => {
        trainingTime = Number(trainingTimeBuff);
        interval = Number(intervalsBuff);

        intervalTime.set(intervalTimeframe);
        minsToEnd.update(mte => trainingTime);
    }

    const changeTimerState = () => {
        minsToEnd.update(mte => trainingTime);
        timerRunning.update(wasRunning => !wasRunning);
        
        // if paused
        if (get(timerRunning) == false) {
            elapsedTimeAfterStop.update(ets => get(elapsedTime));
        } else {
            startTime.update(st => Date.now());
        }
    }

    startTimer();
</script>

<main>
    <div class="flex flex-col items-center justify-center">
        <h1 class="pt-10 text-6xl font-bold">
            Welcome to your Training Buddy!
        </h1>
        <p class="pt-10 text-2xl">
            I want to train for <span bind:innerText={trainingTimeBuff} contenteditable>30</span> minutes in <span bind:innerText={intervalsBuff}
            contenteditable>5</span> minute intervals
        </p>      

        {#each {length: interval} as _, interval} 
            <Task time={intervalTimeframe}/>
        {/each}
        
        <br />

        <div class="flex flex-row space-x-5">
            <button class="btn btn-accent w-64 rounded-full space-y-0.5" on:click={createCards}>Create</button>
            <button class="btn btn-accent w-64 rounded-full" on:click={changeTimerState}>{$timerRunning ? "Stop Timer" : "Start Timer"}</button>
        </div>

        <div class="absolute top-0 right-0 p-2 m-2">
            <Timer />
        </div>
    </div>    
</main>
