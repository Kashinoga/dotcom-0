// In your store setup file
import { writable } from 'svelte/store';

const initialInventory = [
	{ name: 'Basic Axe', type: 'Tool', quantity: 1 },
	{ name: 'Health Potion', type: 'Consumable', quantity: 3 }
];

/**
 * @param {string} name
 * @param {string} type
 * @param {number} quantity
 */
function addItemToInventory(name, type, quantity) {
	playerInventory.update((inventory) => {
		const existingIndex = inventory.findIndex((item) => item.name === name);

		if (existingIndex !== -1) {
			return [
				...inventory.slice(0, existingIndex),
				{ ...inventory[existingIndex], quantity: inventory[existingIndex].quantity + quantity },
				...inventory.slice(existingIndex + 1)
			];
		} else {
			return [...inventory, { name, type, quantity }];
		}
	});
}

/**
 * @param {string} name
 * @param {number} newQuantity
 */
function updateItemQuantity(name, newQuantity) {
	playerInventory.update((inventory) => {
		const index = inventory.findIndex((item) => item.name === name);
		return [
			...inventory.slice(0, index),
			{ ...inventory[index], quantity: newQuantity },
			...inventory.slice(index + 1)
		];
	});
}

export const playerInventory = writable(initialInventory);
