import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        infoWindowContentWrapper: {
            width: '150px',
            height: '100px',
            '& div': {
                height: '100%'
            }
        }
    })
);
