FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY vite.config.ts ./
COPY app ./app
EXPOSE 5173
ENV HOST=0.0.0.0
CMD ["npx", "remix", "vite:dev", "--host", "0.0.0.0", "--port", "5173"]
