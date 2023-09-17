<script lang="ts">
    import Task from "./Task.svelte";
    import Timer from "./Timer.svelte";
    import { timerRunning, elapsedTimeAfterStop, startTimer, elapsedTime, startTime } from "$lib/stores";
    import { get } from "svelte/store";

    let trainingTimeBuff: string;
    let intervalsBuff: string;

    let trainingTime: number = 0;
    let intervals: number;

    let minutes = trainingTime;
    let seconds = 0;

    $: intervalTime = trainingTime / intervals;
    

    const createCards = () => {
        trainingTime = Number(trainingTimeBuff);
        intervals = Number(intervalsBuff);

        console.log(intervalTime);
    }

    const changeTimerState = () => {
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

        {#each {length: intervals} as _, interval} 
            <Task time={intervalTime}/>
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
