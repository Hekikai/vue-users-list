<template>
	<div :class="$style.container">
		<button :class="$style.btn">
			<slot></slot>
		</button>
	</div>
</template>

<script setup>

</script>

<style module lang="scss">
@import "../../style/variables";

.container {
	display: flex;
	justify-content: center;
	height: max(44px, 1vw);
	margin-bottom: $mbm-40px-1vw;
	background-color: $main-black-color;
	border: 1px solid #0D1E4B;
	cursor: pointer;

	.btn {
		font: 600 11px/15px;
		color: $white-color;
		border: none;
		background-color: $main-black-color;
		cursor: pointer;
	}
}
</style>