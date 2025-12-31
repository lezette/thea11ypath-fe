/// <reference types="vite/client" />

declare global {
  interface ImportMetaEnv {
    readonly VITE_STRAPI_URL: string;
    readonly MODE?: string;
    readonly BASE_URL?: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}