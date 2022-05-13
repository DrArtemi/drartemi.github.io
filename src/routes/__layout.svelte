<script>
    import "../app.css";
    import Header from "../components/header.svelte";

    const links = [
      {
          name: "Resume",
          url: "/resume",
          newTab: false
      },
      {
          name: "Github",
          url: "https://github.com/DrArtemi",
          newTab: true
      },
      {
          name: "Twitter",
          url: "https://twitter.com/Dr4rtemi",
          newTab: true
      },
      {
          name: "Email",
          url: "mailto:adrien.milcent@outlook.com",
          newTab: false
      }  
    ];
</script>

<div class="w-3/5 mx-auto">
    <Header {links} />
    <div class="mt-32">
        <slot />
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

    :global(body) {
        font-family: 'Quicksand', sans-serif;
    }

</style> 