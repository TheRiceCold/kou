ARG BUN_VERSION=alpine
FROM oven/bun:$BUN_VERSION

WORKDIR /app
COPY src ./src

COPY public ./public
COPY package.json bun.lockb ./
COPY tsconfig.json .eslintrc.json next.config.js postcss.config.js tailwind.config.ts ./

CMD bun i && bun --bun run dev
