<script>
    import Icon from "./icon.svelte";

    export let links;

    function toggleSkin(e) {
        window.document.body.classList.toggle('dark');
    }
</script>

<nav class="flex flex-row items-center justify-between py-2">
    <div class="w-16">
        <a href="/">
            <img src="/piou.png" alt="Piou with a knife logo"/>
        </a>
    </div>
    <div class="flex flex-row items-center">
        {#each links as link}
            <a class="mx-2 w-8" href={link.url} target={link.newTab ? "_blank" : ""}><Icon iconName={link.name}/></a>
        {/each}
        <div class="w-8 ml-6 flex flex-row items-center cursor-pointer" on:click={toggleSkin}>
            <Icon iconName="lightDark"/>
        </div>
    </div>
</nav>