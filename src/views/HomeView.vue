<template>
	首页
	<a-button type="primary" @click="info">Primary Button</a-button>
	<a-tabs v-model:activeKey="activeKey" type="card">
		<a-tab-pane key="1" tab="Tab Title 1">
			<p>Content of Tab Pane 1</p>
			<p>Content of Tab Pane 1</p>
			<p>Content of Tab Pane 1</p>
		</a-tab-pane>
		<a-tab-pane key="2" tab="Tab Title 2">
			<p>Content of Tab Pane 2</p>
			<p>Content of Tab Pane 2</p>
			<p>Content of Tab Pane 2</p>
		</a-tab-pane>
		<a-tab-pane key="3" tab="Tab Title 3">
			<p>Content of Tab Pane 3</p>
			<p>Content of Tab Pane 3</p>
			<p>Content of Tab Pane 3</p>
		</a-tab-pane>
	</a-tabs>
</template>
<script setup>
import { message } from 'ant-design-vue';

function info() {
	message.info('This is a normal message');
}
</script>
