// In your store setup file
import { writable } from 'svelte/store';

const initialInventory = [
	{
		tools: ['Basic Axe', 'Basic Knife']
	}
];

export const playerInventory = writable(initialInventory);
