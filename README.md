# Quran App

A modern Quran reading application built with Next.js, featuring:

- Surah browsing with dynamic API data
- Ayah-by-ayah reading with Arabic text and English translation
- Search by translation text
- Copy and bookmark actions for ayahs
- Reading preferences with persistent font and size settings

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Axios
- React Icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

- `src/app/page.tsx` - home page
- `src/app/readQuran` - Quran reading routes
- `src/app/components/home` - home page sections
- `src/app/components/surah` - surah and ayah UI
- `src/app/components/ui` - shared layout components
- `src/app/lib/axios.js` - API client

## API

The app uses the Al Quran Cloud API for surah lists, ayah content, and translations.

## Deploy

The app is ready for deployment on Vercel or any Node.js hosting platform that supports Next.js.
