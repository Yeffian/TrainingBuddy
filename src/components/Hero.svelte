<script lang="ts">
    import IntervalCard from "./IntervalCard.svelte";

    let trainingTimeBuff: string;
    let intervalsBuff: string;

    let trainingTime: number;
    let intervals: number;

    const debug = () => {
        trainingTime = Number(trainingTimeBuff);
        intervals = Number(intervalsBuff);
    }

    $: intervalTime = trainingTime / intervals;
</script>

<main>
    <div>
        <h1 class="text-center pt-10 text-6xl font-bold">
            Welcome to your Training Buddy!
        </h1>
        <p class="text-center pt-10 text-2xl">
            I want to train for <span bind:innerText={trainingTimeBuff} contenteditable>30</span> minutes in <span bind:innerText={intervalsBuff}
            contenteditable>5</span> minute intervals
        </p>      

        {#each {length: intervals} as _, interval} 
            <IntervalCard time={intervalTime}/>
        {/each}
        
        <button class="absolute inset-x-0 bottom-0 align-center h-12 px-8 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg 
                    focus:shadow-outline hover:bg-indigo-800" 
                    on:click={debug}>Start</button>
    </div>    
</main>
