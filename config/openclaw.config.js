// Complete Openclaw configuration
const config = {
  apiSettings: {
    baseUrl: 'https://api.example.com',
    apiKey: 'your-api-key',
  },
  automationParameters: {
    enableAutomation: true,
    jobInterval: 60000,
  },
  projectGenerationTemplates: {
    default: 'default_template',
    custom: 'custom_template',
  },
  featureFlags: {
    enableFeatureX: true,
    enableFeatureY: false,
  },
};

module.exports = config;