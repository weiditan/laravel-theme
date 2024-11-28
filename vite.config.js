import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'src/scss/theme.scss',
                'src/js/theme.js',
            ],
            refresh: true,
        }),
    ],
    build: {
        outDir: 'dist',
        manifest: true,
    },
});
