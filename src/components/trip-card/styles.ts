import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tripCard: {
            border: '1px solid',
            borderRadius: '2px',
            marginBottom: '5px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px 0 20px',
            height: '100px',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: 'orange'
            }
        },

        selectedTrip: {
            backgroundColor: 'orange'
        },
        tripCardContent: {},
        tripCardItem: {}
    })
);
