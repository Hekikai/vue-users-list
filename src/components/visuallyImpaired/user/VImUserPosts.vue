<template>
	<section class="posts">
		<v-im-post-header></v-im-post-header>
		<router-link :to="{path: `${route.path}/posts`}">
			<the-button :buttonFontSize="30" :buttonLineHeight="20">Show more</the-button>
		</router-link>
		<v-im-posts-cards :posts="getPosts" :numberOfPosts="3"/>
	</section>
</template>

<script setup>
import VImPostHeader from '../posts/VImPostHeader.vue';
import VImPostsCards from '../posts/VImPostsCards.vue';
import TheButton from '../../TheButton.vue';
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
}

</style>