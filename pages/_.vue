<script>
import Page from '../components/Page.vue';
import Post from '../components/Post.vue';

const components = {
    page: Page,
    post: Post
};

export default {
    render: function (createElement) {
        return createElement(components[this.document.layout], {
            props: {
                document: this.document,
                pages: this.pages,
            }
        });
    },
	async asyncData({ $content, params }) {
        const getDocument = async() => (await $content({ deep: true }).where({ permalink: `/${params.pathMatch}` }).limit(1).fetch()).shift();

        return {
            document: await getDocument(),
            pages: await $content('pages').fetch()
        };
    }
};
</script>
