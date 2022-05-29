<template>
	<section class="posts">
		<post-header></post-header>
		<router-link :to="{path: `${route.path}/posts`}">
			<the-button>Show more</the-button>
		</router-link>
		<posts-cards :posts="getPosts" :numberOfPosts="3"/>
	</section>
</template>

<script setup>
import PostHeader from '../posts/PostHeader.vue';
import PostsCards from '../posts/PostsCards.vue';
import TheButton from '../TheButton.vue';
import { onMounted } from "vue";
import { usePostsStore } from "../../../stores/posts";
import { useRoute } from "vue-router";

const route = useRoute();
const postsStore = usePostsStore();
const {loadPostsByUserId, getPosts} = postsStore;

onMounted(() => loadPostsByUserId(route.params.id));

</script>

<style scoped lang="scss">
@import '../../../style/mixins';
@import '../../../style/variables';

.posts {
	border-bottom: $border;

	&__btn {
		display: flex;
		justify-content: center;
		height: max(44px, 1vw);
		margin-bottom: $mbm-40px-1vw;
		background-color: $main-black-color;
		border: 1px solid #0D1E4B;
		cursor: pointer;

		.show-btn {
			font: 600 11px/15px;
			color: $white-color;
			border: none;
			background-color: $main-black-color;
			cursor: pointer;
		}
	}

	&__heading {
		@include heading;
		@include w-m-p;
	}

	&__cards {
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
	}

	&__card {
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