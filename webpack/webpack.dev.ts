import Merge from 'webpack-merge';
import WebpackCommon from './webpack.common';

import { HotModuleReplacementPlugin } from 'webpack';
import { dotenv } from './plugins';

export default Merge(WebpackCommon, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [new HotModuleReplacementPlugin(), dotenv('dev')],
    devServer: {
        historyApiFallback: true,
        hot: true
    }
});
