<template>
	<section class="section">
		<post-header/>
		<posts-cards
				:posts="getPosts"
				:numberOfPosts="getPosts.length"/>
	</section>
</template>

<script setup>
import PostHeader from '../components/posts/PostHeader.vue';
import PostsCards from '../components/posts/PostsCards.vue';
import { usePostsStore } from "../stores/posts";
const store = usePostsStore();

const {getPosts} = store;

</script>

<style scoped>

</style>