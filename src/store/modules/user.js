import { defineStore } from 'pinia';

export const useUserStore = defineStore('userInfo', {
	state: () => ({
		name: '张三',
		age: 0,
	}),
	actions: {
		setAge(val) {
			this.age = val;
		},
	},
});
