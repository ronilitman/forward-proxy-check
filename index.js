import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use('/', createProxyMiddleware({ target: 'https://api.vidabet.com', changeOrigin: true }));
app.listen(3002);