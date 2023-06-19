<template>
    <div>
        <Sidebar
            :pages="pages"
        />
        <Home
            :document="document"
            :posts="posts"
        />
    </div>
</template>

<script>
import Home from '../components/Home.vue'
import Sidebar from '../components/Base/Sidebar.vue';

export default {
    components: {
        Home,
        Sidebar
    },
    async asyncData({ $content }) {
        const getDocument = async() => (await $content('pages').where({ permalink: '/' }).limit(1).fetch()).shift();

        return {
            document: await getDocument(),
            pages: await $content('pages').fetch(),
            posts: await $content('posts').fetch(),
        };
    }
};
</script>
