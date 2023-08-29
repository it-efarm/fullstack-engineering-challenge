# E-Farm Fullstack Challenge

## The Challenge: Part 1

Build a quick POC that displays the **top 10 stories of hackernews**.

- Make use of the public [hackernews API](https://github.com/HackerNews/API),
  specifically, you can use the [topstories endpoint](https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty).
- You can find the entry point into the frontend in `src/frontend/App.tsx`.

## Some Tips

- **Keep it simple**. Focus on solving the challenge before making your code
  beautiful or fast. Time flies fast.
- **Talk us through your thought process**. This helps us understand your
  approach, and catch problems before you spend time on implementation.
- **It's OK if some things are not intuitive**. You can, of course, look things up, but
  before you rush to google, let's first see if we can solve the problem together.
- **Use libraries and tools that you know and make you fast**. You don't have
  to write things from scratch. If you know a good library to solve a problem,
  use it!

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

## The Challenge: Part 2 (Optional)

**Ignore this until you have solved Part 1.**

Intersperse sponsored stories every 3 stories, using the `withAds` function from `src/frontend/advertisement.ts`.

It should look like:

```
story
story
story
ad
story
... etc
```
