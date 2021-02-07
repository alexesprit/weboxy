<template>
	<custom-input
		:modelValue="height"
		@input="$emit('update:height', $event.target.value)"
	>
		<template v-slot:label>{{ $t('height') }} ({{ $t('mm') }})</template>
	</custom-input>

	<custom-input
		:modelValue="width"
		@input="$emit('update:width', $event.target.value)"
	>
		<template v-slot:label>{{ $t('width') }} ({{ $t('mm') }})</template>
	</custom-input>

	<custom-input
		:modelValue="length"
		@input="$emit('update:length', $event.target.value)"
	>
		<template v-slot:label>{{ $t('length') }} ({{ $t('mm') }})</template>
	</custom-input>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CustomInput from '@/component/input/CustomInput.vue';

export default defineComponent({
	components: { CustomInput },
	props: {
		height: {
			type: Number,
			required: true,
		},
		width: {
			type: Number,
			required: true,
		},
		length: {
			type: Number,
			required: true,
		},
	},
	emits: ['update:height', 'update:width', 'update:length'],
});
</script>

<style lang="scss" scoped></style>
