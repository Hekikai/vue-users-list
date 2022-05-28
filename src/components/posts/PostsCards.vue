<template>
	<div class="cards">
		<article
				v-for="(post, index) in getPosts"
				class="card"
		>
			<user-posts-card
					v-if="index < numberOfPosts"
					:title="post.title"
					:body="post.body"/>
		</article>
	</div>
</template>

<script setup>
import UserPostsCard from '../user/UserPostsCard.vue';
import { useRoute } from "vue-router";
import { usePostsStore } from "../../stores/posts";

const store = usePostsStore();
const {getPosts} = store;

const route = useRoute();
const props = defineProps({
	posts: {
		type: Array,
		required: true
	},
	numberOfPosts: {
		type: Number,
		required: true
	}
})
</script>

<style scoped lang="scss">

@import '../../style/mixins';

.cards {
	@include w-m-p;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 20px;
	padding-top: 0;

	@media screen and (max-width: 720px) {
		flex-direction: column;
	}

	.card {
		align-self: stretch;

		@media screen and (max-width: 1500px) {
			width: 30%;
		}

		@media screen and (max-width: 720px) {
			width: 100%;
		}
	}
}

</style>