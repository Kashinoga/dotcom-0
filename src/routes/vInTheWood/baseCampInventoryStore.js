// In your store setup file
import { writable } from 'svelte/store';

const initialInventory = [
	{
		items: ['Basic Tent', 'Basic Stove', 'Basic Cot']
	}
];

export const baseCampInventory = writable(initialInventory);
