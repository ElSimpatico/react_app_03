import { resolve, join } from 'path';
import { Configuration } from 'webpack';

import { CleanWebpack, htmlWebpack } from './plugins';

const rootDir = resolve(__dirname, '../src');

const commonConfiguration: Configuration = {
    context: rootDir,
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    entry: [join(rootDir, '/index.tsx')],
    output: {
        path: resolve(__dirname, '../build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [CleanWebpack, htmlWebpack]
};

export default commonConfiguration;
