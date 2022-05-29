<template>
	<div :class="$style.container">
		<button :class="$style.btn">
			<slot></slot>
		</button>
	</div>
</template>

<script setup>

const props = defineProps({
	buttonFontSize: {
		type: Number,
		default: 11
	},
	buttonLineHeight: {
		type: Number,
		default: 15
	}
})

const styleObject = {
	fontSize: `${props.buttonFontSize}px`,
	lineHeight: `${props.buttonLineHeight}px`,
}

</script>

<style module lang="scss">
@import "../style/variables";

.container {
	display: flex;
	justify-content: center;
	height: max(50px, 1vw);
	margin-bottom: $mbm-40px-1vw;
	background-color: $main-black-color;
	border: 1px solid #0D1E4B;
	cursor: pointer;

	.btn {
		font-size: v-bind('styleObject.fontSize');
		line-height: v-bind('styleObject.lineHeight');
		font-weight: 600;
		color: $white-color;
		border: none;
		background-color: $main-black-color;
		cursor: pointer;
	}
}
</style>