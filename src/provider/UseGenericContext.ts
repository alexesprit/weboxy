import { inject } from 'vue';

export function useGenericContext<T>(key: symbol): T {
	const dependency = inject(key);
	if (dependency) {
		return dependency as T;
	}

	throw new Error(`${key.toString()} dependency is not available`);
}
