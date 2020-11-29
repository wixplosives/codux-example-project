import React from 'react';
import { style, classes } from './canvas-stretching-view.st.css';

export const CanvasStretchingView: React.FunctionComponent = ({ children }) => {
    return <div className={style(classes.root, {})}>{children}</div>;
};
