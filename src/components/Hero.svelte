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

        <button class="absolute inset-x-0 bottom-0 align-center h-12 px-8 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg 
                    focus:shadow-outline hover:bg-indigo-800" 
                    on:click={debug}>Start</button>
    </div>    
</main>
