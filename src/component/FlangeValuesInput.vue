<template>
	<custom-input
		:modelValue="jointsNumber"
		@input="$emit('update:jointsNumber', $event.target.value)"
	>
		<template v-slot:label>Number of joints</template>
	</custom-input>

	<custom-select
		:modelValue="thickness"
		:options="thicknessList"
		@input="$emit('update:thickness', $event.target.value)"
	>
		<template v-slot:label>Thickness (mm)</template>
	</custom-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CustomInput from '@/component/input/CustomInput.vue';
import CustomSelect from '@/component/input/CustomSelect.vue';

export default defineComponent({
	components: { CustomInput, CustomSelect },
	props: {
		jointsNumber: {
			type: Number,
			required: true,
		},
		thickness: {
			type: Number,
			required: true,
		},
		thicknessList: {
			type: Array,
			required: true,
		},
	},
	emits: ['update:jointsNumber', 'update:thickness'],
});
</script>
