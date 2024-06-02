import react from '@vitejs/plugin-react-swc';
import {defineConfig, loadEnv} from 'vite';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), eslint(), svgr()],
    server: {
      // this ensures that the browser opens upon server start
      open: true,
      // this sets a default port to 3000
      port: 3000,
      fs: {
        cachedChecks: false,
      },
    },
    base: mode === 'production' ? `/${env.BASE_URL}/` : '/',
  };
});
