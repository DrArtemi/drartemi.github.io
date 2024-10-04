<script>
    import Icon from "../components/icon.svelte";

    export let iconName;
    let hovering = false;

    function enter() {
        hovering = true;
    }
    function leave() {
        hovering = false;
    }
</script>

<div class="relative h-full w-full cursor-pointer flex items-center" role="tooltip" on:mouseover="{enter}" on:focus="{enter}" on:mouseout="{leave}" on:blur="{leave}">
    {#if hovering}
    <span class="absolute bottom-full left-0 mb-2 p-2 text-slate-800 text-md bg-slate-200 rounded">{iconName}</span>
    {/if}
    <Icon {iconName}/>
</div>