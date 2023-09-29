<script lang="ts">
    export let time: number;

    let cardComplete: boolean;
    $: cardStyle = `card w-96 bg-primary text-primary-content ${cardComplete ? "line-through" : " "}`;
    
    let completeCard = () => {
        cardComplete = !cardComplete;
    }

    console.log('new card created');
</script>

<main>
    <div>
        <br />
        <div class={cardStyle}>
            <div class="card-body">
              <h2 class="card-title">{time} minutes</h2>
              <!--Calculate if the card is in progress or not -->
              <div class="badge badge-success gap-2">
                In Progress
              </div>
              <input type="text" placeholder="What are we doing in this time?" class="input input-ghost input-secondary w-full max-w-xs placeholder:italic placeholder-black focus:placeholder-white" />
              <div class="card-actions justify-end">
                <button on:click={completeCard} class="btn">Done</button>
              </div>
            </div>
        </div>
        <br />
    </div>
</main>