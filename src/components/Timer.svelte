<script lang="ts">
    import { get } from "svelte/store";
    import { timerRunning, startTimer, elapsedTime, mins, secs } from "$lib/stores";

</script>

<main>
    <p>{$timerRunning} - {$mins}:{$secs}</p>
</main>     