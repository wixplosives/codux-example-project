import React from 'react';
import { classes, style as style0 } from './app-product-item.st.css';
// import { FlexLayout } from '../../common-classes/flex-layout/flex-layout';
// import { CommonClasses } from '../../common-classes/common-classes/common-classes';
import { ImageView } from '../image-view/image-view';
import { classes as classes0, style } from '../../common-classes/flex-layout/flex-layout.st.css';
import { StarsRating } from '../stars-rating/stars-rating';
import { classes as classes1 } from '../stars-rating/stars-rating.st.css';

export interface AppProductItemProps {
   productTitle: string;
   /** Product cost */
   originalPrice: string;
currentPrice: string;
   /** Toggles the 'new' button on and off */
   isAddedToCart?: boolean;
   }


export const AppProductItem = React.memo<AppProductItemProps>((props) => {
   const {
       
       productTitle,
       isAddedToCart = false,
       originalPrice,
	   currentPrice,
       ...htmlAttributes
   } = props;


    return (
        <div
            className={classes.root}
        >
            <div className={style(classes0.flexColumnAlignToCenter, classes.main)}>
                <ImageView resizeMode={'contain'} positionVertical={'center'} positionHorizontal={'center'} src={'https://cdn.shopify.com/s/files/1/2170/8465/products/STEVEMADDEN-SHOES_RHODE_BLACK-LEATHER_600x.jpg?v=1616454947'} className={classes.productImage} />
            </div>
            <div className={style0(classes.addToCartButton, classes0.flexCenterContent)}>Add To Cart</div>
            <div className={style(classes0.flexRowStretch, classes0.footer)}>

                <div className={style(classes0.flexColumnAlignToStart)}>
                    <a href="/" className={classes.productLink}>
                        <h1 className={classes.productTitle}>{productTitle}</h1></a>
                </div>
                <div className={classes0.flexColumnAlignToEnd}>
                    <div className={classes0.flexRowAlignToStart}>
                        <h1 className={style(classes.productPrice, classes.origPrice)}>{originalPrice}</h1>
                        <h1 className={style(classes.productPrice, classes.newPrice)}>{currentPrice}</h1>
                    </div>
                    <StarsRating rating={3} className={classes.starsRating} /></div></div>
        </div>
    );
});


