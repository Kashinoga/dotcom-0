// In your store setup file
import { writable } from 'svelte/store';

const initialInventory = [
	{
		items: ['Basic Tent', 'Basic Stove', 'Basic Cot']
	}
];

const baseCampBuildInitialInventory = [
	{ name: 'Basic Tent', materials: [{ name: 'Wood', quantity: '1' }] },
	{ name: 'Basic Wood Bed', materials: [{ name: 'Wood', quantity: '1' }] }
];

export const baseCampInventory = writable(initialInventory);
export const baseCampBuildInventory = writable(baseCampBuildInitialInventory);
