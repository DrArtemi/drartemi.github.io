<script>
    import dateformat from "dateformat";
    import IconHover from "../../lib/components/iconHover.svelte";

    let experience = [
        {
            company: "Delfox",
            contract: "Permanent contract",
            website: "https://delfox.net/",
            startDate: "2018-09",
            endDate: "2024-09",
            role: "Machine Learning Engineer",
            description: "I worked on Deep Learning solutions for aeronautics, spatial and defense, using CNNs, object detection and reinforcement learning. I can't elaborate on the details of the projects for obvious reasons but we use common algorithms and I have a deep knowledge of the Ray library. I also applied models on drones to demonstrate our solutions in real life. At Delfox I led the development of our internal product and multiple projects for Ariane Group, Thales, Dassault and MBDA.",
            technologies: ["python", "c++", "tensorflow", "pytorch", "git"]
        },
        {
            company: "Cezam",
            contract: "Freelance",
            startDate: "2020-12",
            endDate: "2021-05",
            role: "Machine Learning Engineer - Full-stack developer",
            description: "I created a platform to extract information from scans of financial documents. I fine tuned OCR models on specific data to greatly improve results and developed custom image processing for specific data.",
            technologies: ["python", "tensorflow", "react"]
        },
        {
            company: "Esport Managment",
            contract: "Freelance",
            website: "https://nicecactus.gg/",
            startDate: "2018-07",
            endDate: "2018-08",
            role: "Full-stack developer",
            description: "I developed core features of the Esports Managment (rebranded Nice Cactus) platform.",
            technologies: ["php", "javascript"]
        },
        {
            company: "uReflect",
            contract: "Scholar",
            startDate: "2016-06",
            endDate: "2019-07",
            role: "Co-founder - Full-stack developer",
            description: "I built from scratch the touch interface of the uReflect connected mirror. Additionally, I developed modules to improve mirror capabilities. We presented the mirror at CES Las Vegas in 2019.",
            technologies: ["javascript", "electron", "vuejs"]
        },
        {
            company: "AppDrag",
            contract: "Internship",
            website: "https://appdrag.com/",
            startDate: "2017-04",
            endDate: "2017-10",
            role: "Front-end developer",
            description: "I joined a small team of developers to create AppDrag's CMS product. With high autonomy, I developed multiple features to improve the CMS possibilities and user experience.",
            technologies: ["javascript"]
        },
        {
            company: "LEXAN",
            contract: "Internship",
            startDate: "2016-09",
            endDate: "2017-03",
            role: "Full-stack developer",
            description: "As the only developer in the company, I was in charge of the webwsite creation of every customer. I mainly used Wordpress, and created custom plugins to resolve any of our clients needs.",
            technologies: ["php", "wordpress"]
        },
        {
            company: "Jobijoba",
            contract: "Internship",
            website: "https://www.jobijoba.com/",
            startDate: "2015-09",
            endDate: "2015-12",
            role: "Full-stack developer",
            description: "I increased Jobijoba job offers scraping by millions by creating web scraping robots to gather job offers from all around the world. Additionally I created an internal tool (a chrome/firefox extension) to help non-developers create their own web scraping robot.",
            technologies: ["python", "tor", "javascript"]
        }
    ]
</script>

<div>
    {#each experience as exp, i}
    <div class="w-full pb-6">
        <div class="flex flex-row items-end justify-between">
            <h2 class="font-semibold text-2xl text-slate-900 dark:text-slate-100">
                <span class="text-4xl text-slate-800 dark:text-slate-300">
                    {#if exp.website}
                    <a href={exp.website} target="_blank">{exp.company}</a>
                    {:else}
                    {exp.company}
                    {/if}
                 </span>
                - {exp.contract}
            </h2>
            <span class="text-slate-900 dark:text-slate-100 font-medium text-right">{dateformat(new Date(exp.startDate), "mmm yyyy")} - {exp.endDate === "present" ? exp.endDate : dateformat(new Date(exp.endDate), "mmm yyyy")}</span>
        </div>
        <h3 class="text-2xl text-slate-700 dark:text-slate-400 mt-1">{exp.role}</h3>
        <p class="mt-2 text-slate-900 dark:text-slate-100 text-lg">{exp.description}</p>
        <div class="mt-2 flex flex-row justify-end">
            {#each exp.technologies as techno}
            <div class="w-6 ml-3 align-middle">
                <IconHover iconName={techno}/>
            </div>
            {/each}
        </div>
    </div>
    {/each}
</div>