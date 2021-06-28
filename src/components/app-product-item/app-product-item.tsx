import React from 'react';
import { classes } from './app-product-item.st.css';
// import { FlexLayout } from '../../common-classes/flex-layout/flex-layout';
// import { CommonClasses } from '../../common-classes/common-classes/common-classes';
import { ImageView } from '../image-view/image-view';
import { classes as classes0, style } from '../../common-classes/flex-layout/flex-layout.st.css';
import { StarsRating } from '../stars-rating/stars-rating';


export const AppProductItem = React.memo(() => {




    return (
        <div
            className={classes.root}
        >
            <div className={style(classes0.flexColumnAlignToCenter, classes.main)}>
                <ImageView resizeMode={'contain'} positionVertical={'center'} positionHorizontal={'center'} src={'https://cdn.shopify.com/s/files/1/2170/8465/products/STEVEMADDEN-SHOES_RHODE_BLACK-LEATHER_600x.jpg?v=1616454947'} className={classes.productImage} />
            </div>
            <div className={style(classes0.flexColumnAlignToStart, classes.footer)}>
                <h1 className={classes.productTitle}>RHODE BLACK LEATHER</h1>
                <div className={classes0.flexRowAlignToStart}>
                    <h1 className={classes.productOrigPrice}>$84.95</h1>
                    <h1 className={classes.productPrice}>$59.99</h1>
                </div>
                <StarsRating rating={5} className={classes.starsRating} /></div>
        </div>
    );
});


