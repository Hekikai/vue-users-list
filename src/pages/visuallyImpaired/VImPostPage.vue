<template>
	<section class="comments">
		<v-im-comment-card v-for="comm in getComments">
			<template #body>{{ comm.body }}</template>
			<template #email>{{ comm.email }}</template>
			<template #name>{{ comm.name }}</template>
		</v-im-comment-card>
		<v-im-comment-form/>
	</section>
</template>

<script setup>
import VImCommentCard from '../../components/visuallyImpaired/comments/VImCommentCard.vue';
import VImCommentForm from '../../components/visuallyImpaired/comments/VImCommentForm.vue';
import { useRoute } from "vue-router";
import { onMounted, watch } from "vue";
import { useCommentsStore } from "../../stores/comments";
import { scrollToTheTop } from "../../utils/scrollToTheTop";

const commentStore = useCommentsStore();
const {loadCommentsByPostId, getComments} = commentStore;
const route = useRoute();

watch(() => route.params.postId,
		() => {
			scrollToTheTop();
		},
		{immediate: true}
)

onMounted(() => loadCommentsByPostId(route.params.postId))

</script>

<style scoped lang="scss">
</style>