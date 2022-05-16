<script>
    import Icon from "../components/icon.svelte";

    export let iconName;
    let hovering = false;

    function enter(e) {
        hovering = true;
    }
    function leave(e) {
        hovering = false;
    }
</script>

<div class="relative h-full w-full cursor-pointer flex items-center" on:mouseenter="{enter}" on:mouseleave="{leave}">
    {#if hovering}
    <span class="absolute bottom-full left-0 mb-2 p-2 text-slate-800 text-md bg-slate-200 rounded">{iconName}</span>
    {/if}
    <Icon {iconName}/>
</div>