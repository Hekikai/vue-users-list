<template>
	<section class="comments">
		<comment-card v-for="comm in getComments">
			<template #body>{{ comm.body }}</template>
			<template #email>{{ comm.email }}</template>
			<template #name>{{ comm.name }}</template>
		</comment-card>
		<comment-form/>
	</section>
</template>

<script setup>
import CommentCard from '../components/comments/CommentCard.vue';
import CommentForm from '../components/comments/CommentForm.vue';
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { useCommentsStore } from "../stores/comments";

const commentStore = useCommentsStore();
const {loadCommentsByPostId, getComments} = commentStore;
const route = useRoute();

onMounted(() => loadCommentsByPostId(route.params.postId))

</script>

<style scoped lang="scss">
</style>