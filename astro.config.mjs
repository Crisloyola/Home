import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
   vite: {
    plugins: [tailwindcss()],
  },
  // add yur domain name here
  site: 'https://hdigital.site',  // Aquí puedes colocar el nombre de tu sitio.
  title: 'HomeDigital',              // Cambia esto a tu nombre de empresa
  description: 'Desarrollo web moderno y personalizado',
});