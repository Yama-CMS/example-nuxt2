<template>
    <div>
        <Sidebar :pages="pages" />
        <main>
            <h1>{{ document.title }}</h1>
            <p v-if="document.summary">
                {{ document.summary }}
            </p>
            <div class="content">
                <nuxt-content :document="document" />
            </div>
        </main>
    </div>
</template>

<script>
import Sidebar from './Base/Sidebar.vue';

export default {
    components: {
        Sidebar
    },
    props: {
        document: Object,
        pages: Array
    }
};
</script>
