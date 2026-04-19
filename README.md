# Quran App

Quran App is a modern Quran reading experience built with Next.js. It provides surah browsing, ayah-by-ayah reading, English translation display, search, bookmarks, and reading preferences with persistent settings.

## Overview

This project is designed for smooth Quran reading on desktop and mobile. It combines dynamic API data with a focused UI for reading, searching, and saving ayahs.

## Key Features

- Browse all surahs from the Quran Cloud API
- Read Arabic ayahs with English translation
- Search ayahs by translation text or ayah number
- Copy ayah text with one click
- Bookmark ayahs for later reading
- Customize Arabic and translation font sizes
- Save reading preferences in local storage
- Responsive layout for mobile and desktop

## Tech Stack

- Next.js 16
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

Open the app at:

```text
http://localhost:3000
```

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run start` - start the production server
- `npm run lint` - run ESLint

## Project Structure

- `src/app/page.tsx` - home page
- `src/app/readQuran` - Quran reading routes
- `src/app/components/home` - hero, featured surahs, and stats sections
- `src/app/components/surah` - surah cards and ayah cards
- `src/app/components/ui` - shared UI components
- `src/app/lib/axios.js` - API client

## Data Source

The application uses the Al Quran Cloud API for surah lists, ayah content, and translations.

## Deployment

The project is ready to deploy on Vercel or any platform that supports Next.js applications.
