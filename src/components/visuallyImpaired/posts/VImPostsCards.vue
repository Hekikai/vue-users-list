<template>
	<div class="cards">
		<article
				v-for="(post, index) in getPosts"
				class="card"
		>
			<router-link :to="{path: getRightPath(post.id)}">
				<v-im-user-posts-card
						v-if="index < numberOfPosts"
						:title="post.title"
						:body="post.body"/>
			</router-link>
		</article>
	</div>
</template>

<script setup>
import VImUserPostsCard from '../user/VImUserPostsCard.vue';
import { useRoute } from "vue-router";
import { usePostsStore } from "../../../stores/posts";
import { onMounted } from "vue";

const route = useRoute();
const postsStore = usePostsStore();
const {getPosts, loadPostsByUserId} = postsStore;

const getRightPath = (id) => {
	return route.path.includes('posts')
			? `${ route.path }/${ id }`
			: `${ route.path }/posts/${ id }`
};

const props = defineProps({
	posts: {
		type: Array,
		required: true
	},
	numberOfPosts: {
		type: Number,
		required: true
	}
});

onMounted(() => loadPostsByUserId(route.params.id));
</script>

<style scoped lang="scss">

@import '../../../style/mixins';

.cards {
	@include w-m-p;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 20px;
	padding-top: 0;

	@media screen and (max-width: 1400px) {
		flex-direction: column;
	}

	.card {
		align-self: stretch;

		@media screen and (max-width: 1400px) {
			width: 100%;
		}
	}
}

</style>