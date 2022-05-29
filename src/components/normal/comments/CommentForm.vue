<template>
	<the-button
			v-if="isUserWantToAddComment === false"
			@click="handleOpenForm"
	>
		Add comment
	</the-button>
	<section v-show="isUserWantToAddComment === true" class="form">
		<input
				type="text"
				v-model="dto.name"
				class="form__item"
				placeholder="Enter your name">
		<input
				type="email"
				v-model="dto.email"
				class="form__item"
				placeholder="Enter your email">
		<input
				type="text"
				v-model="dto.body"
				class="form__item"
				placeholder="And comment!"/>
		<div class="buttons">
			<the-button
					class="form__button"
					@click="handleAppendComment"
					@keyup.enter="handleAppendComment"
			>
				Send comment
			</the-button>
			<the-button
					class="form__button"
					@click="isUserWantToAddComment = false">
				Close form
			</the-button>
		</div>
	</section>

</template>

<script setup>
import TheButton from '../TheButton.vue';
import { nextTick, reactive, ref, toRaw } from "vue";
import { useCommentsStore } from "../../../stores/comments";
import { useRoute } from "vue-router";
import { clearFormFields } from "../../../utils/clearFormFiields";

const route = useRoute();

const commentsStore = useCommentsStore();
const {addCommentToPost} = commentsStore;

const isUserWantToAddComment = ref(false);
const dto = reactive({
	name: '',
	email: '',
	body: ''
})

const handleAppendComment = () => {
	if (dto.name === '' || dto.email === '' || dto.body === '') {
		alert('Fill all the fields, pls!');
	} else {
		addCommentToPost(route.params.postId, toRaw(dto)).then(() => {
			isUserWantToAddComment.value = false;
			clearFormFields(dto);
		})
	}
}

const handleOpenForm = () => {
	isUserWantToAddComment.value = true;
	nextTick(() => {
			window.scrollTo(0, document.querySelector('.comments').scrollHeight);
	})
}


</script>

<style scoped lang="scss">
@import '../../../style/variables';

.form {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: $mbm-40px-1vw;

	&__item {
		border: none;
		background-color: $main-black-color;
		color: $white-color;
		padding: 20px;
		width: 40%;
		resize: none;
		margin-bottom: 20px;
	}

	&__button {
		margin-bottom: 0;
		padding: 10px;
	}

	.buttons {
		display: flex;
		column-gap: 20px;
	}
}

</style>