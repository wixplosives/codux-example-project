import React from 'react';
import { style, classes, vars } from './image-view.st.css';

export interface ImageViewProps {
    resizeMode?: 'fill' | 'cover' | 'contain';
    positionVertical?: 'top' | 'center' | 'bottom';
    positionHorizontal?: 'left' | 'center' | 'right';
    src: string;
    className?: string;
}

export const ImageView = React.memo<ImageViewProps>((props) => {
    const {
        resizeMode = 'contain',
        positionVertical = 'top',
        positionHorizontal = 'center',
        src,
        className,
    } = props;

    return (
        <img
            className={style(classes.root, className)}
            style={{
                [vars.objectFit]: resizeMode,
                [vars.objectPositionVertical]: positionVertical,
                [vars.objectPositionHorizontal]: positionHorizontal,
            }}
            src={src}
        />
    );
});
