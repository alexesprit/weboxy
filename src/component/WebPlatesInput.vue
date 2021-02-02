<template>
	<div class="checkbox-wrapper">
		<custom-checkbox
			:value="fullPenetrationTop"
			@input="$emit('update:fullPenetrationTop', $event.target.checked)"
		>
			<template v-slot:label>Full penetration (top)</template>
		</custom-checkbox>
	</div>

	<div class="checkbox-wrapper">
		<custom-checkbox
			:value="fullPenetrationBottom"
			@input="
				$emit('update:fullPenetrationBottom', $event.target.checked)
			"
		>
			<template v-slot:label>Full penetration (bottom)</template>
		</custom-checkbox>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CustomCheckbox from '@/component/input/CustomCheckbox.vue';

export default defineComponent({
	components: { CustomCheckbox },
	props: {
		fullPenetrationTop: {
			type: Boolean,
			required: true,
		},

		fullPenetrationBottom: {
			type: Boolean,
			required: true,
		},
	},
	emits: ['update:fullPenetrationTop', 'update:fullPenetrationBottom'],
});
</script>

<style lang="scss" scoped>
.checkbox-wrapper {
	&:not(:last-child) {
		margin-bottom: 0.5rem;
	}
}
</style>
