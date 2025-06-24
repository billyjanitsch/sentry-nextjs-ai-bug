# Sentry Next.js AI SDK Bug

## Repro

Install dependencies and run the dev server:

```
npm install
npm run dev
```

Open the application and click the "Check" button. Notice that "Available" appears.

Then, uncomment the Sentry config in `next.config.ts`:

```ts
export default withSentryConfig(nextConfig);
// export default nextConfig;
```

Now, click the "Check" button again. Notice that "Unavailable" appears.
