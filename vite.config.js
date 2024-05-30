import vue from "@vitejs/plugin-vue";

import Sitemap from 'vite-plugin-sitemap'

import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: process.env.VITE_BASE_URL,
	plugins: [
        vue(),
        Sitemap(),
    ],
});
