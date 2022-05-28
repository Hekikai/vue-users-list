<template>
	<section class="posts">
		<h3 class="posts__heading">
			Посты
		</h3>
		<div class="posts__cards">
			<article v-for="n in 10">
				<user-posts-card/>
			</article>
		</div>
	</section>
</template>

<script setup>
import UserPostsCard from './UserPostsCard.vue'

</script>

<style scoped lang="scss">
@import '../style/mixins';
@import '../style/variables';

.posts {
	border-bottom: $border;

	&__heading {
		@include heading;
		@include w-m-p;
	}

	&__cards {
		@include w-m-p;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 20px;
		padding-top: 0;
	}
}

</style>