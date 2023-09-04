<script lang="ts">
    export let time: number;

    let cardComplete: boolean;
    $: cardStyle = `card w-96 bg-primary text-primary-content ${cardComplete ? "line-through" : " "}`

    let completeCard = () => {
        cardComplete = !cardComplete;
    }
</script>

<main>
    <div>
        <br />
        <div class={cardStyle}>
            <div class="card-body">
              <h2 class="card-title">{time} minutes</h2>
              <p>placeholder</p>
              <div class="card-actions justify-end">
                <button on:click={completeCard} class="btn">Done</button>
              </div>
            </div>
        </div>
        <br />
    </div>
</main>