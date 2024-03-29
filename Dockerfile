FROM node:18.19.1

RUN mkdir -p /app
WORKDIR /app
COPY . /app

ARG BUILD_ENV
ARG BUILD_PORT

RUN npm install pnpm -g --registry https://registry.npmmirror.com
RUN pnpm install
RUN pnpm build:${BUILD_ENV}

EXPOSE ${BUILD_PORT}

ENTRYPOINT ["pnpm", "start"]