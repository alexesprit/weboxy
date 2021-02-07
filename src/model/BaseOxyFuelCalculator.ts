import { OxyFuelCalculator } from '@/model/OxyFuelCalculator';
import { OxyFuelUsage } from '@/model/OxyFuelUsage';

/**
 * [Oxygen, Fuel] usage per one meter.
 */
export type OxyFuelFactor = [number, number];
export type OxyFuelFactorMap = Record<number, OxyFuelFactor>;

export class BaseOxyFuelCalculator implements OxyFuelCalculator {
	constructor(private oxyFuelFactors: OxyFuelFactorMap) {}

	calculateUsage(thickness: number, cutLength: number): OxyFuelUsage {
		if (!(thickness in this.oxyFuelFactors)) {
			throw new Error(`Unsupported thickness: ${thickness}`);
		}

		const [oxygenFactor, fuelFactor] = this.oxyFuelFactors[thickness];

		const oxygenUsagePerMeter =
			oxygenFactor * oxygenConversionFactor * startCuttingFactor;
		const fuelUsagePerMeter = fuelFactor * startCuttingFactor;

		const oxygen = (cutLength * oxygenUsagePerMeter) / 1000;
		const fuel = (cutLength * fuelUsagePerMeter) / 1000;

		return { oxygen, fuel };
	}

	getThicknessSupported(): readonly number[] {
		return Object.keys(this.oxyFuelFactors).map((key) =>
			Number.parseInt(key)
		);
	}
}

const oxygenConversionFactor = 1.33;
const startCuttingFactor = 1.2;
