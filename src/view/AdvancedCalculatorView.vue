<template>
	<div class="row">
		<div class="group-container col-xs-12 col-sm-6">
			<input-group>
				<template v-slot:header>{{ $t('top-flange') }}</template>

				<flange-values-input
					v-model:jointsNumber.number="topFlangeJointsNumber"
					v-model:thickness.number="topFlangeThickness"
					:thicknessList="thicknessList"
				/>
			</input-group>
		</div>

		<div class="group-container col-xs-12 col-sm-6">
			<input-group>
				<template v-slot:header>{{ $t('bottom-flange') }}</template>

				<flange-values-input
					v-model:jointsNumber.number="bottomFlangeJointsNumber"
					v-model:thickness.number="bottomFlangeThickness"
					:thicknessList="thicknessList"
				/>
			</input-group>
		</div>
	</div>

	<div class="row">
		<div class="group-container col-xs-12 col-sm-6">
			<input-group>
				<template v-slot:header>{{ $t('web-plates') }}</template>

				<flange-values-input
					v-model:jointsNumber.number="webPlateJointsNumber"
					v-model:thickness.number="webPlateThickness"
					:thicknessList="thicknessList"
				/>

				<web-plates-input
					v-model:fullPenetrationTop="isFullPenetrationTop"
					v-model:fullPenetrationBottom="isFullPenetrationBottom"
				></web-plates-input>
			</input-group>
		</div>

		<div class="group-container col-xs-12 col-sm-6">
			<input-group>
				<template v-slot:header>{{ $t('girder-parameters') }}</template>

				<girder-values-input
					v-model:width.number="girderWidth"
					v-model:height.number="girderHeight"
					v-model:length.number="girderLength"
				></girder-values-input>
			</input-group>
		</div>
	</div>

	<oxy-fuel-usage-comp
		:oxygenUsage="oxyFuelUsage.oxygen"
		:fuelUsage="oxyFuelUsage.fuel"
		:fuelName="fuelGasName"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import FlangeValuesInput from '@/component/FlangeValuesInput.vue';
import GirderValuesInput from '@/component/GirderValuesInput.vue';
import WebPlatesInput from '@/component/WebPlatesInput.vue';
import OxyFuelUsageComp from '@/component/OxyFuelUsage.vue';
import InputGroup from '@/component/InputGroup.vue';

import { useOxyFuelCalculatorContext } from '@/provider/OxyFuelCalculatorProvider';
import { useAdvancedCalculator } from '@/composable/UseAdvancedCalculator';

export default defineComponent({
	props: {
		fuelGasName: {
			type: String,
			required: true,
		},
	},

	components: {
		FlangeValuesInput,
		GirderValuesInput,
		OxyFuelUsageComp,
		WebPlatesInput,
		InputGroup,
	},

	setup() {
		const calculatorRef = useOxyFuelCalculatorContext();
		return useAdvancedCalculator(calculatorRef);
	},
});
</script>

<style lang="scss" scoped>
.group-container {
	margin-bottom: 1rem;
}
</style>
