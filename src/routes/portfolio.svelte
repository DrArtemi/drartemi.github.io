<script>
    let websites = [
        {
            name: "FuckJapscan",
            image: "/fuckjapscan.png",
            url: "https://fuckjapscan.com/",
        },
        {
            name: "FuryoSquad",
            image: "/furyosquad.png",
            url: "https://furyosquad.com/",
        },
        {
            name: "FuryoGang",
            image: "/furyogang.png",
            url: "https://lecture.furyogang.com/",
        },
    ]
</script>

<div class="flex flex-row">
    {#each websites as website,  i}
    <div class:ml-12={i > 0}>
        <h2 class="w-full text-center font-medium text-3xl text-slate-900 dark:text-slate-100 mb-4">{website.name}</h2>
        <a href={website.url} target="_blank">
            <img class="rounded-md shadow-lg shadow-slate-800/20 hover:shadow-slate-800/50 dark:shadow-slate-600/20 hover:dark:shadow-slate-600/50" src={website.image} alt="{website.name} website" />
        </a>
    </div>
    {/each}
</div>