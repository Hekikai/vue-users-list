<template>
	<div class="comment">
		<div class="border">
			<p class="comment__info">
				Name:
				<slot name="name"></slot>
			</p>
		</div>
		<div class="border">
			<p class="comment__info">
				<slot name="body"></slot>
			</p>
		</div>
		<div class="border">
			<p class="comment__info">
				<slot name="email"></slot>
			</p>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "../../../style/variables";
@import "../../../style/mixins";

.comment {
	@include looksLikeTable;

	.border {
		border-bottom: $border;
	}

	&__info {
		@include border;
		@include w-m-p;
	}
}

</style>