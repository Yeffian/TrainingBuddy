<script lang="ts">
    import IntervalCard from "./IntervalCard.svelte";

    let trainingTimeBuff: string;
    let intervalsBuff: string;

    let trainingTime: number;
    let intervals: number;

    $: intervalTime = trainingTime / intervals;

    const debug = () => {
        trainingTime = Number(trainingTimeBuff);
        intervals = Number(intervalsBuff);

        console.log(intervalTime);
    }

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
            <IntervalCard time={intervalTime}/>
        {/each}
        
        <button class="btn btn-primary w-64 rounded-full space-y-0.5" on:click={debug}>Create</button>
    </div>    
</main>
