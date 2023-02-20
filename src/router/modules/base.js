export default [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/HomeView.vue'),
		meta: { title: '首页' },
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/AboutView.vue'),
		meta: { title: '关于' },
	},
];
