<template>
	<div class="form-group">
		<label class="form-group__label">
			<input
				class="form-group__input"
				type="checkbox"
				v-model="inputValue"
			/>
			<i class="form-group__icon"></i>
			<slot name="label"></slot>
		</label>
	</div>
</template>

<script>
import { defineCustomInput } from '@/component/input/useCustomInput';

export default defineCustomInput();
</script>

<style lang="scss" scoped>
.form-group {
	&__input {
		clip: rect(0, 0, 0, 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		position: absolute;
		width: 1px;
	}

	&__input:checked + &__icon {
		background: #3b4c6f;
		border-color: #3b4c6f;

		&::before {
			background-clip: padding-box;
			border: 0.15rem solid #fff;
			border-left-width: 0;
			border-top-width: 0;
			content: '';
			height: 9px;
			left: 50%;
			margin-left: -3px;
			margin-top: -6px;
			position: absolute;
			top: 50%;
			transform: rotate(45deg);
			width: 6px;
		}
	}

	&__icon {
		border-radius: 0.1rem;
		border: 0.05rem solid #bcc3ce;
		cursor: pointer;
		display: inline-block;
		height: 1rem;
		left: 0;
		margin-right: 0.5rem;
		position: relative;
		top: 0.1rem;
		transition-duration: 0.3s;
		transition-property: background-color, border, box-shadow, color;
		width: 1rem;
	}

	&__label {
		cursor: pointer;
	}
}
</style>
