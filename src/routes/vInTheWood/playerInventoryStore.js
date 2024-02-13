// In your store setup file
import { writable } from 'svelte/store';

const initialInventory = [
	{ name: 'Basic Axe', type: 'Tool', quantity: 1 },
	{ name: 'Health Potion', type: 'Consumable', quantity: 3 }
];

export const playerInventory = writable(initialInventory);
