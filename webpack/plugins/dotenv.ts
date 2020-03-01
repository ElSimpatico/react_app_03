import dotenvPlugin from 'dotenv-webpack';
import _dotenv from 'dotenv';
import { resolve } from 'path';

export const dotenv = (env: string = '') => {
    const envPath = resolve(
        __dirname,
        `../../env/.env.${env}`.replace(/\.$/, '')
    );
    const _env = _dotenv.config({ path: envPath }).parsed;

    console.log('=======================================');
    console.log('== ENVIRONMENT VARIABLES ==============');
    console.log('environment:', env || 'empty -> production');
    console.log(`dotenv file: ${envPath}`);
    console.log(`.env: ${JSON.stringify(_env, null, 2)}`);
    console.log('=======================================');
    console.log('=======================================');

    return new dotenvPlugin({
        path: envPath,
        safe: true,
        systemvars: true
    });
};
