<script lang="ts">
  import { mins, secs } from "$lib/stores";
</script>

<main>
    <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            <span style={"--value:" + $mins}></span>
          </span>
          min
        </div> 
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            <span style={"--value:" + $secs}></span>
          </span>
          sec
        </div>
      </div>
</main>     