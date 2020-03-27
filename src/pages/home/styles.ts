import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapped: {
            border: '1px solid black'
        },

        mapWrapper: {
            position: 'relative',
            width: '100%',
            height: '100%'
        }
    })
);
