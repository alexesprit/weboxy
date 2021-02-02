import type { OxyFuelUsage } from '@/model/OxyFuelUsage';

export interface OxyFuelCalculator {
	calculateUsage(thickness: number, cutLength: number): OxyFuelUsage;
	getThicknessSupported(): ReadonlyArray<number>;
}
