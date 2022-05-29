<template>
	<section class="section">
		<v-im-post-header/>
		<v-im-posts-cards
				:posts="getPosts"
				:numberOfPosts="getPosts.length"/>
	</section>
</template>

<script setup>
import VImPostHeader from '../../components/visuallyImpaired/posts/VImPostHeader.vue';
import VImPostsCards from '../../components/visuallyImpaired/posts/VImPostsCards.vue';
import { usePostsStore } from "../../stores/posts";
import { watchEffect } from "vue";
import { scrollToTheTop } from "../../utils/scrollToTheTop";

watchEffect(() => scrollToTheTop());
const postsStore = usePostsStore();

const {getPosts} = postsStore;

</script>

<style scoped>

</style>