import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import { ROUTES, ApplicationRoute, PATHS } from './shared/routes';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import { theme } from './styles/theme';
import { createReduxStore } from './shared/store';

export function App(): ReactElement<{}> {
    return (
        <Provider store={createReduxStore()}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline>
                    <BrowserRouter>
                        <Switch>
                            {ROUTES.map((route: ApplicationRoute) => {
                                return (
                                    <Route
                                        exact={route.path === PATHS.ROOT}
                                        path={route.path}
                                        key={route.key}
                                        render={props => (
                                            <div>
                                                <route.component {...props} />
                                            </div>
                                        )}
                                    />
                                );
                            })}
                        </Switch>
                    </BrowserRouter>
                </CssBaseline>
            </MuiThemeProvider>
        </Provider>
    );
}
