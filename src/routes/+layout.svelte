<script lang="ts">
    import '../app.css'
</script>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.slate.800);
    }
</style>

<body class="text-white">
    <slot />
</body>