<script>
    import Icon from "./icon.svelte";

    export let links;
</script>

<nav class="flex flex-row items-center justify-between py-2">
    <div class="w-16">
        <a href="/">
            <img src="/piou.png" alt="Piou with a knife logo"/>
        </a>
    </div>
    <div class="links flex flex-row items-center">
        {#each links as link}
            <a class="mx-2" href={link.url} target={link.newTab ? "_blank" : ""}><Icon iconName={link.name}/></a>
        {/each}
    </div>
</nav>