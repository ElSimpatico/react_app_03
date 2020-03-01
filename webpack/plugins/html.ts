import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

export const htmlWebpack = new HtmlWebpackPlugin({
    template: resolve(__dirname, '../../src/index.html')
});
