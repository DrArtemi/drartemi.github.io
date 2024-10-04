<script>
    import { base } from '$app/paths';
    import Icon from "./icon.svelte";

    export let links;

    function toggleSkin() {
        window.document.body.classList.toggle('dark');
    }
</script>

<nav class="flex flex-row items-center justify-between py-2">
    <div class="w-16">
        <a href="{base}/">
            <img src="{base}/piou.png" alt="Piou with a knife logo"/>
        </a>
    </div>
    <div class="flex flex-row items-center">
        {#each links as link}
            <a class="mx-2 w-8" href={base}{link.url} target={link.newTab ? "_blank" : ""}><Icon iconName={link.name}/></a>
        {/each}
        <button class="w-8 ml-6 flex flex-row items-center cursor-pointer" on:click={toggleSkin}>
            <Icon iconName="lightDark"/>
        </button>
    </div>
</nav>