import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// 按需自动引入
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
	base: './',
	plugins: [
		vue(),
		AutoImport({
			resolvers: [AntDesignVueResolver()],
		}),
		Components({
			resolvers: [
				AntDesignVueResolver({
					importStyle: true,
					resolveIcons: true,
				}),
			],
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	css: {
		preprocessorOptions: {
			less: {
				modifyVars: {
					hack: `true; @import (reference) "${resolve('src/styles/variables.less')}";`,
				},
				math: 'strict',
				javascriptEnabled: true,
			},
		},
	},
	server: {
		// 是否开启https
		https: false,
		// 端口号
		port: 3000,
		// 监听所有地址
		host: '0.0.0.0',
		// 服务启动时是否自动打开浏览器
		open: true,
		// 是否允许跨域
		cors: true,
		// 自定义代理规则
		proxy: {},
	},
	build: {
		// 设置最终构件的浏览器兼容目标
		target: 'es2015',
		// 构件后是否生成source map 文件
		sourcemap: false,
		// chunk 大小告警的限制(以kbs为单位)
		chunkSizeWarningLimit: 2000,
		// 启用/禁用 gzip 压缩大小报告
		reportCompressedSize: false,
	},
});
