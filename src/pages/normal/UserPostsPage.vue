<template>
	<section class="section">
		<post-header/>
		<posts-cards
				:posts="getPosts"
				:numberOfPosts="getPosts.length"/>
	</section>
</template>

<script setup>
import PostHeader from '../../components/normal/posts/PostHeader.vue';
import PostsCards from '../../components/normal/posts/PostsCards.vue';
import { usePostsStore } from "../../stores/posts";
import { watchEffect } from "vue";
import { scrollToTheTop } from "../../utils/scrollToTheTop";

watchEffect(() => scrollToTheTop());
const postsStore = usePostsStore();

const {getPosts} = postsStore;

</script>

<style scoped>

</style>