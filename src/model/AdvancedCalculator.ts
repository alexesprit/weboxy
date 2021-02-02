import type { OxyFuelCalculator } from '@/model/OxyFuelCalculator';
import type { OxyFuelUsage } from '@/model/OxyFuelUsage';

export interface FlangeValues {
	readonly width: number;
	readonly thickness: number;
	readonly jointCount: number;
}

export interface WebPlateValues {
	readonly height: number;
	readonly thickness: number;
	readonly jointCount: number;
	readonly length: number;
	readonly longSeamCount: number;
}

export class AdvancedCalculator {
	private totalCutWidth = new Map<number, number>();

	constructor(private oxyFuelCalculator: OxyFuelCalculator) {}

	addFlangeValues(values: FlangeValues): void {
		const { width, thickness, jointCount } = values;

		this.addCutLength(thickness, width * jointCount * 2);
	}

	addWebPlateValues(values: WebPlateValues): void {
		const { height, jointCount, thickness, length, longSeamCount } = values;

		this.addCutLength(thickness, height * jointCount * 2);
		this.addCutLength(thickness, length * longSeamCount);
	}

	calculateUsage(): OxyFuelUsage {
		const totalUsage = { oxygen: 0, fuel: 0 };

		console.log(this.totalCutWidth.entries());

		for (const [thickness, cutLength] of this.totalCutWidth.entries()) {
			const usage = this.oxyFuelCalculator.calculateUsage(
				thickness,
				cutLength
			);

			totalUsage.oxygen += usage.oxygen;
			totalUsage.fuel += usage.fuel;
		}

		return totalUsage;
	}

	getThicknessSupported(): ReadonlyArray<number> {
		return this.oxyFuelCalculator.getThicknessSupported();
	}

	reset(): void {
		this.totalCutWidth.clear();
	}

	private addCutLength(thickness: number, cutLength: number): void {
		const currentCutLength = this.totalCutWidth.get(thickness) ?? 0;
		this.totalCutWidth.set(thickness, currentCutLength + cutLength);
	}
}
