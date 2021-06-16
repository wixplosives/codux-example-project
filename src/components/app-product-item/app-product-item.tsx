import React from 'react';
import { classes, style } from './app-product-item.st.css';
import { FlexLayout } from '../../common-classes/flex-layout/flex-layout';
import { CommonClasses } from '../../common-classes/common-classes/common-classes';
import { ImageView } from '../image-view/image-view';
import { StarsRating } from '../stars-rating/stars-rating';
import { classes as classes0, style as style0 } from '../../common-classes/flex-layout/flex-layout.st.css';


export const AppProductItem = React.memo(() => {




    return (
        <div
            className={style(classes.root, FlexLayout.column.default)}
        >
            <div>
                <ImageView resizeMode={'contain'} positionVertical={'center'} positionHorizontal={'center'} src={'https://static.wixstatic.com/media/d759b6_d1773d716a4746d8b70eb7c15112000e~mv2.png'} />
            </div>
            <button className={classes.addToCartButton}>Button</button>
            <div className={classes0.flexRowAlignToStart}>
                <h1 className={classes.title}>I'm a product</h1>
            </div>
            <div className={classes0.flexRowAlignToEnd}>
                <StarsRating rating={3}>
                </StarsRating>
            </div>
        </div>
    );
});
