<template>
	<custom-input
		:value="height"
		@input="$emit('update:height', $event.target.value)"
	>
		<template v-slot:label>Height (mm)</template>
	</custom-input>

	<custom-input
		:value="width"
		@input="$emit('update:width', $event.target.value)"
	>
		<template v-slot:label>Width (mm)</template>
	</custom-input>

	<custom-input
		:value="length"
		@input="$emit('update:length', $event.target.value)"
	>
		<template v-slot:label>Length (mm)</template>
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
