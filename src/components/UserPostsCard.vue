<template>
	<div class="post">
		<h4 class="post__heading">
			Twenty One Pilots
		</h4>
		<p class="post__description">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, quasi!
		</p>
	</div>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "../style/mixins";
@import "../style/variables";

.post {
	border: $border;
	padding: $padding;

	&__heading {
		margin-bottom: 4px;
	}
}

</style>