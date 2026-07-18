import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 0,
  reporter: [['html', { open: 'never' }], ['list']],

  use: {
    baseURL: process.env.BASE_URL || 'https://example.com',
    trace: 'retain-on-failure',
    // This is the key setting - Playwright auto-captures a screenshot
    // and saves it under test-results/** whenever a test fails.
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
