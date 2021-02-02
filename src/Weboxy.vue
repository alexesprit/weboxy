<template>
	<div class="container">
		<app-header />
		<advanced-calculator-view fuelGasName="propane" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AdvancedCalculatorView from '@/view/AdvancedCalculatorView.vue';
import AppHeader from '@/component/AppHeader.vue';

import { useOxyFuelCalculatorProvider } from '@/provider/OxyFuelCalculatorProvider';
import { OxyPropaneCalculator } from '@/model/OxyPropaneCalculator';

export default defineComponent({
	components: {
		AdvancedCalculatorView,
		AppHeader,
	},

	setup() {
		useOxyFuelCalculatorProvider(new OxyPropaneCalculator());
	},
});
</script>

<style lang="scss">
@import '@/style/index.scss';

.container {
	max-width: 48em;
	margin: 0 auto;
	padding: 2rem;

	@media (max-width: 48em) {
		max-width: 30em;
	}
}

.row {
	&:not(:last-child) {
		margin-bottom: 1rem;
	}
}
</style>
