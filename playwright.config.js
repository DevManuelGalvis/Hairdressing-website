import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'python -m http.server 3000',
    url: 'http://localhost:3000',
    timeout: 10 * 1000,
    reuseExistingServer: true,
  },
});
