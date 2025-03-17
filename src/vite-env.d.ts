/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // Добавь другие переменные окружения, если они есть
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
