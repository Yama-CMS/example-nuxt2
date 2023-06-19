<template>
    <div>
        <Sidebar :pages="pages" />
        <main>
            <h1>{{ document.title }}</h1>
            <img
                class="media-desktop"
                :src="document.media?.formats?.desktop?.url ?? 'https://placehold.co/800?text=No+media+found&font=roboto'"
                :alt="document.media?.alt"
            />
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
