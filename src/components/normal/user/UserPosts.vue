<template>
	<section class="posts">
		<post-header></post-header>
		<router-link :to="{path: `${route.path}/posts`}">
			<the-button>Show more</the-button>
		</router-link>
		<the-spinner v-if="arePostsLoaded === false"/>
		<posts-cards v-else :posts="getPosts" :numberOfPosts="3"/>
	</section>
</template>

<script setup>
import PostHeader from '../posts/PostHeader.vue';
import PostsCards from '../posts/PostsCards.vue';
import TheButton from '../../TheButton.vue';
import TheSpinner from '../../TheSpinner.vue';
import { onMounted, ref } from "vue";
import { usePostsStore } from "../../../stores/posts";
import { useRoute } from "vue-router";

const arePostsLoaded = ref(false);
const route = useRoute();
const postsStore = usePostsStore();
const {loadPostsByUserId, getPosts} = postsStore;

onMounted(() => loadPostsByUserId(route.params.id, arePostsLoaded));

</script>

<style scoped lang="scss">
@import '../../../style/mixins';
@import '../../../style/variables';

.posts {
	border-bottom: $border;
}

</style>