import { computed, ComputedRef, Ref, ref } from 'vue';

import { AdvancedCalculator } from '@/model/AdvancedCalculator';

import type { OxyFuelCalculator } from '@/model/OxyFuelCalculator';
import type { OxyFuelUsage } from '@/model/OxyFuelUsage';

const webPlatesCount = 2;

export function useAdvancedCalculator(
	calc: Ref<OxyFuelCalculator>
): AdvancedCalculatorComposable {
	const [topFlangeJointsNumber, topFlangeThickness] = usePlateValues();
	const [bottomFlangeJointsNumber, bottomFlangeThickness] = usePlateValues();
	const [webPlateJointsNumber, webPlateThickness] = usePlateValues();

	const { girderWidth, girderHeight, girderLength } = useGirderParameters();

	const isFullPenetrationTop = ref(false);
	const isFullPenetrationBottom = ref(false);

	const advancedCalculator = computed(
		() => new AdvancedCalculator(calc.value)
	);

	const longSeamsNumberPerWebPlate = computed(() => {
		return (
			(isFullPenetrationTop.value ? 1 : 0) +
			(isFullPenetrationBottom.value ? 1 : 0)
		);
	});

	const oxyFuelUsage = computed(() => {
		advancedCalculator.value.reset();

		if (topFlangeThickness.value > 0) {
			advancedCalculator.value.addFlangeValues({
				width: girderWidth.value,
				jointCount: topFlangeJointsNumber.value,
				thickness: topFlangeThickness.value,
			});
		}

		if (bottomFlangeThickness.value > 0) {
			advancedCalculator.value.addFlangeValues({
				width: girderWidth.value,
				jointCount: bottomFlangeJointsNumber.value,
				thickness: bottomFlangeThickness.value,
			});
		}

		if (webPlateThickness.value > 0) {
			advancedCalculator.value.addWebPlateValues({
				height: girderHeight.value,
				jointCount: webPlateJointsNumber.value * webPlatesCount,
				thickness: webPlateThickness.value,
				length: girderLength.value,
				longSeamCount:
					longSeamsNumberPerWebPlate.value * webPlatesCount,
			});
		}

		return advancedCalculator.value.calculateUsage();
	});

	const thicknessList = computed(() =>
		advancedCalculator.value.getThicknessSupported()
	);

	return {
		oxyFuelUsage,

		topFlangeJointsNumber,
		topFlangeThickness,

		bottomFlangeJointsNumber,
		bottomFlangeThickness,

		webPlateJointsNumber,
		webPlateThickness,

		girderWidth,
		girderHeight,
		girderLength,

		isFullPenetrationTop,
		isFullPenetrationBottom,

		thicknessList,
	};
}

interface AdvancedCalculatorComposable {
	oxyFuelUsage: ComputedRef<OxyFuelUsage>;

	topFlangeJointsNumber: Ref<number>;
	topFlangeThickness: Ref<number>;

	bottomFlangeJointsNumber: Ref<number>;
	bottomFlangeThickness: Ref<number>;

	webPlateJointsNumber: Ref<number>;
	webPlateThickness: Ref<number>;

	girderWidth: Ref<number>;
	girderHeight: Ref<number>;
	girderLength: Ref<number>;

	isFullPenetrationTop: Ref<boolean>;
	isFullPenetrationBottom: Ref<boolean>;

	thicknessList: Ref<ReadonlyArray<number>>;
}

type PlateValues = [Ref<number>, Ref<number>];

interface GirderParameters {
	girderWidth: Ref<number>;
	girderHeight: Ref<number>;
	girderLength: Ref<number>;
}

function usePlateValues(): PlateValues {
	const jointsNumber = ref(0);
	const thickness = ref(0);

	return [jointsNumber, thickness];
}

function useGirderParameters(): GirderParameters {
	const girderWidth = ref(0);
	const girderHeight = ref(0);
	const girderLength = ref(0);

	return { girderWidth, girderHeight, girderLength };
}
