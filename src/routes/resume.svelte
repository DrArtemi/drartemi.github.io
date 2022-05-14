<script>
    import dateformat from "dateformat"

    let experience = [
        {
            company: "Delfox",
            startDate: "2018-09",
            endDate: "present",
            role: "Machine Learning Engineer",
            description: "Super description",
            technologies: ["python", "git", "c++", "tensorflow", "pytorch"]
        },
        {
            company: "Cezam - Freelance",
            startDate: "2020-12",
            endDate: "2021-05",
            role: "Machine Learning Engineer - Full-stack developer",
            description: "Super description",
            technologies: ["python", "tensorflow", "react"]
        },
        {
            company: "uReflect",
            startDate: "2016-06",
            endDate: "2019-07",
            role: "Co-founder - Full-stack developer",
            description: "Super description",
            technologies: ["javascript", "electron", "vuejs"]
        },
        {
            company: "AppDrag",
            startDate: "2017-04",
            endDate: "2017-10",
            role: "Front-end developer",
            description: "Super description",
            technologies: ["javascript"]
        },
        {
            company: "LEXAN",
            startDate: "2016-09",
            endDate: "2017-03",
            role: "Full-stack developer",
            description: "Super description",
            technologies: ["php", "wordpress"]
        },
        {
            company: "Jobijoba",
            startDate: "2015-09",
            endDate: "2015-12",
            role: "Full-stack developer",
            description: "Super description",
            technologies: ["python", "tor", "scrapy", "javascript"]
        }
    ]
</script>

<div>
    {#each experience as exp}
    <div class="w-full mb-6">
        <div class="flex flex-row items-end justify-between">
            <h2 class="font-semibold text-4xl text-slate-800">{exp.company}</h2>
            <span class="font-medium">{dateformat(new Date(exp.startDate), "mmm yyyy")} - {exp.endDate === "present" ? exp.endDate : dateformat(new Date(exp.endDate), "mmm yyyy")}</span>
        </div>
        <h3 class="text-2xl text-slate-700 mt-1">{exp.role}</h3>
        <p class="mt-2 text-slate-900 text-lg">{exp.description}</p>
        <div>
            {#each exp.technologies as techno}
            <span>{techno}</span>
            {/each}
        </div>
    </div>
    {/each}
</div>