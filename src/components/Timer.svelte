<script lang="ts">
    import { startTimer, timerRunning } from "$lib/stores";
    import { elapsedTime } from "$lib/stores";

    startTimer();
</script>

<main>
    <p>{$timerRunning} - {$elapsedTime}</p>
</main> 