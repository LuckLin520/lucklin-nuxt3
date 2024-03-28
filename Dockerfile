# 第一阶段
FROM node:18.19.1

# 创建工作目录
RUN mkdir -p /app
WORKDIR /app

# 复制项目文件和目录到容器中
COPY . /app

ARG BUILD_ENV
ARG BUILD_PORT
# 安装依赖项并构建应用程序
RUN npm install pnpm -g --registry https://registry.npmmirror.com
RUN pnpm install --registry https://registry.npmmirror.com
RUN pnpm build:${BUILD_ENV}

# 暴露端口
EXPOSE ${BUILD_PORT}

# 设置入口点为启动脚本
ENTRYPOINT ["pnpm", "start"]

