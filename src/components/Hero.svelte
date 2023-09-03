<script lang="ts">
    let trainingTime: string;
    let intervals: string;

    const debug = () => {
        console.log(trainingTime);
        console.log(intervals);
    }
</script>

<main>
    <div>
        <h1 class="text-center pt-10 text-6xl font-bold">
            Welcome to your Training Buddy!
        </h1>
        <p class="text-center pt-10 text-2xl">
            I want to train for <span bind:innerText={trainingTime} contenteditable>30</span> minutes in <span bind:innerText={intervals}
            contenteditable>5</span> minute intervals
        </p>      

        <button on:click={debug}>Click me</button>
    </div>    
</main>
