# E-Farm Fullstack Challenge

## Part 1: Display Top 10 HackerNews Stories

Create a simple app that shows the top 10 stories from HackerNews.

### Steps:

- **Use these HackerNews API endpoints:**
  - **Fetch Story IDs:** `https://hacker-news.firebaseio.com/v0/topstories.json`
  - **Fetch Story Details:** `https://hacker-news.firebaseio.com/v0/item/${id}.json`
- Start building the frontend in [src/frontend/App.tsx](./src/frontend/App.tsx).

### Tips:

- **Start simple**: Make it work, then make it nice.
- **Talk about your work**: Explain what you're doing to help us understand your choices.
- **Look up as needed**: It's okay to search online if you're stuck, but try to figure things out with the team first.
- **Use tools you know**: Use libraries that save you time. Don't start from scratch.

## Quickstart

Install dependencies.

```bash
npm ci
```

Start the frontend in dev mode.

```bash
npm run dev:frontend
```

Start the backend in dev mode. (Only for Part 2).

```bash
npm run dev:backend
```

## Part 2 (Optional)

**Ignore this until you have solved Part 1.**

Intersperse ads every 3 stories.

- Apparently, someone already implemented a function for this in [src/frontend/advertisement.ts](./src/frontend/advertisement.ts), but you may have to fix one or two things.
- You will have to start the backend in a separate terminal.
- The final story order should look like:

```
story
story
story
ad
story
story
story
ad
... etc
```
