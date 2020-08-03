<template>
    <div class="contenedor">
        <div id="dashboard-options">
            <dashboard-option
            image="/images/Admin/tests_view.jpg"
            title="Tests"
            title_color="white"
            description="Crea test psicológicos para tus pacientes."
            route="tests"
            ></dashboard-option>
            <dashboard-option
            image="/images/Admin/posts_view.png"
            title="Publicaciones"
            title_color="black"
            description="Comparte tu conocimiento en las publicaciones que serán leídas por tus pacientes."
            href="posts"
            ></dashboard-option>
        </div>
    </div>
</template>

<style scoped>

    #dashboard-options{
        display: flex;
        justify-content: space-around;
        margin: 5em auto;
    }

    @media screen and (max-width: 768px){
        #dashboard-options{
            grid-template-columns: 1fr;
            margin: 5em auto;
        }
    }

</style>