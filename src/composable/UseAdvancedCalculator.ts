import { computed, Ref, ref } from 'vue';

import { AdvancedCalculator } from '@/model/AdvancedCalculator';
import { OxyFuelCalculator } from '@/model/OxyFuelCalculator';

export function useAdvancedCalculator(calc: OxyFuelCalculator) {
	const [topFlangeJointsNumber, topFlangeThickness] = usePlateValues();
	const [bottomFlangeJointsNumber, bottomFlangeThickness] = usePlateValues();
	const [webPlateJointsNumber, webPlateThickness] = usePlateValues();

	const { girderWidth, girderHeight, girderLength } = useGirderParameters();

	const isFullPenetrationTop = ref(false);
	const isFullPenetrationBottom = ref(false);

	const advancedCalculator = new AdvancedCalculator(calc);

	const longSeamCount = computed(() => {
		return (
			(isFullPenetrationTop.value ? 2 : 0) +
			(isFullPenetrationBottom.value ? 2 : 0)
		);
	});

	const oxyFuelUsage = computed(() => {
		advancedCalculator.reset();

		if (topFlangeThickness.value > 0) {
			advancedCalculator.addFlangeValues({
				width: girderWidth.value,
				jointCount: topFlangeJointsNumber.value,
				thickness: topFlangeThickness.value,
			});
		}

		if (bottomFlangeThickness.value > 0) {
			advancedCalculator.addFlangeValues({
				width: girderWidth.value,
				jointCount: bottomFlangeJointsNumber.value,
				thickness: bottomFlangeThickness.value,
			});
		}

		if (webPlateThickness.value > 0) {
			advancedCalculator.addWebPlateValues({
				height: girderHeight.value,
				jointCount: webPlateJointsNumber.value * 2,
				thickness: webPlateThickness.value,
				length: girderLength.value,
				longSeamCount: longSeamCount.value,
			});
		}

		return advancedCalculator.calculateUsage();
	});

	const thicknessList = computed(() =>
		advancedCalculator.getThicknessSupported()
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
