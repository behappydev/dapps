import 'dotenv/config';
require('dotenv/config');
// ...existing code...
export default {
  expo: {
    name: "EcommerceApp",
    slug: "EcommerceApp",
    version: "1.0.0",
    android: {
      package: "com.behappydev.ecommerceapp",
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY
        }
      }
    },
    ios: {
      bundleIdentifier: "com.behappydev.ecommerceapp.ios",
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
      }
    },
    extra: {
      API_KEY: process.env.API_KEY,
      AUTH_DOMAIN: process.env.AUTH_DOMAIN,
      DATABASE_URL: process.env.DATABASE_URL,
      PROJECT_ID: process.env.PROJECT_ID,
      STORAGE_BUCKET: process.env.STORAGE_BUCKET,
      MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
      APP_ID: process.env.APP_ID,
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      eas: {
        projectId: "680a9f97-2001-497f-8d03-8f9aa75cd122"
      }
    }
  }
};
