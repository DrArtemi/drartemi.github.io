<script>
    import { base } from '$app/paths';
    import "../app.css";
    import Header from "../lib/components/header.svelte";

    const links = [
        {
            name: "Portfolio",
            url: base + "/portfolio",
            newTab: false
        },
        {
            name: "Resume",
            url: base + "/resume",
            newTab: false
        },
        {
            name: "Github",
            url: "https://github.com/DrArtemi",
            newTab: true
        },
        {
            name: "Email",
            url: "mailto:adrien.milcent@grinalp.com",
            newTab: false
        }
    ];
</script>

<div class="min-h-screen dark:bg-slate-900">
    <div class="w-4/5 lg:w-3/5 mx-auto">
        <Header {links} />
        <div class="mt-32">
            <h1 class="text-7xl font-bold text-slate-700 dark:text-white mb-16">Adrien Milcent</h1>
            <slot />
        </div>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

    :global(body) {
        font-family: 'Quicksand', sans-serif;
    }

</style> 