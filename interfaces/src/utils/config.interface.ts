import type { PWANextConfigOptions } from '../pwa/pwa.interface';
import type { NextConfig } from 'next';

export interface AppNextConfigOptions {
  appName: string;
  sentryProject: string;
  redirects?: NextConfig['redirects'];
  headers?: NextConfig['headers'];
  sassOptions?: NextConfig['sassOptions'];
  env?: NextConfig['env'];
  output?: NextConfig['output'];
  pwa?: PWANextConfigOptions;
}
