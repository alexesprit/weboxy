import { OxyFuelCalculator } from '@/model/OxyFuelCalculator';
import { OxyFuelUsage } from '@/model/OxyFuelUsage';

export type FactorMap = Record<number, number>;

export class BaseOxyFuelCalculator implements OxyFuelCalculator {
	constructor(
		private oxygenFactors: FactorMap,
		private fuelFactors: FactorMap
	) {}

	calculateUsage(thickness: number, cutLength: number): OxyFuelUsage {
		if (!(thickness in this.oxygenFactors)) {
			throw new Error(`Unsupported thickness: ${thickness}`);
		}

		if (!(thickness in this.fuelFactors)) {
			throw new Error(`Unsupported thickness: ${thickness}`);
		}

		const oxygenFactor =
			this.oxygenFactors[thickness] *
			oxygenConversionFactor *
			startCuttingFactor;
		const fuelFactor = this.fuelFactors[thickness] * startCuttingFactor;

		const oxygen = (cutLength * oxygenFactor) / 1000;
		const fuel = (cutLength * fuelFactor) / 1000;

		return { oxygen, fuel };
	}

	getThicknessSupported(): readonly number[] {
		return Object.keys(this.oxygenFactors).map((key) =>
			Number.parseInt(key)
		);
	}
}

const oxygenConversionFactor = 1.33;
const startCuttingFactor = 1.2;
