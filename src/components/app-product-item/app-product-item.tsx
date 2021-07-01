import React from 'react';
import { classes, style } from './app-product-item.st.css';
import { StarsRating } from '../stars-rating/stars-rating';
import { FlexLayout } from '../../common-classes/flex-layout/flex-layout';
import { ImageView } from '../image-view/image-view';
import { CommonClasses } from '../../common-classes/common-classes/common-classes';

export interface AppProductItemProps {
    /** Where the image is located */
    imageUrl: string;
    /** Model of product */
    modelName?: string;
    /** ID of product */
    productId: string;
    /** Title of product */
    productTitle: string;
    /** Product cost */
    price: string;
    /** Toggles the 'new' button on and off */
    isNew?: boolean;
    /** Average ratings, depicted by stars */
    reviewsAverageRating?: number; 
    /** Number of submitted reviews */
    reviewsCount?: number; 
    /** Function for when the add to cart button is clicked */
    onAddToCartButtonClick?: (productId: string) => void; 
    /** True/False state for if the product has been added to the user's cart */
    isAddedToCart?: boolean;
    /** Class to pass to the component's root */
    className?: string;
}
/** This component represents a single product item. */
export const AppProductItem = React.memo<AppProductItemProps>((props) => {
    const {
        productId,
        productTitle,
        modelName,
        imageUrl,
        reviewsCount,
        reviewsAverageRating,
        onAddToCartButtonClick,
        isAddedToCart = false,
        price,
        isNew = false,

        className,
        ...htmlAttributes
    } = props;

    const normalizedRating =
        reviewsAverageRating !== undefined
            ? Math.min(Math.max(reviewsAverageRating, 0), 5)
            : undefined;

    const productUrl = `/product/${productId}`;

    return (
        <div
            {...htmlAttributes}
            className={style(classes.root, FlexLayout.column.default, className)}
        >
            <div className={style(classes.sectionMain, CommonClasses.positioned)}>
                <a href={productUrl} className={CommonClasses.resetDefaultStyle}>
                    <ImageView
                        src={imageUrl}
                        className={style(classes.productImage)}
                        positionHorizontal={'center'}
                        positionVertical={'center'}
                    />
                </a>
                <div
                    className={style(
                        classes.addToCartButton,
                        { isAddedToCart: isAddedToCart },
                        CommonClasses.button,
                        FlexLayout.centerContent
                    )}
                    onClick={() => {
                        if (onAddToCartButtonClick) {
                            onAddToCartButtonClick(productId);
                        }
                    }}
                >
                    {isAddedToCart ? 'Remove From Cart' : 'Add To Cart'}
                </div>
                {isNew ? (
                    <div className={style(classes.bannerNew, FlexLayout.centerContent)}>New</div>
                ) : null}
            </div>
            <div className={FlexLayout.row.alignToStart}>
                <div className={FlexLayout.fillRemainingHorizontalSpace}>
                    <div className={style(classes.title, CommonClasses.button)}>
                        <a href={productUrl} className={CommonClasses.resetDefaultStyle}>
                            {productTitle}
                        </a>
                    </div>
                    <div className={style(classes.modelName)}>{modelName}</div>
                </div>
                <div className={style(FlexLayout.column.alignToEnd)}>
                    <div className={style(classes.priceLabel)}>{price}</div>
                    {normalizedRating !== undefined ? (
                        <div className={style(classes.rating)}>
                            <StarsRating
                                className={style(classes.starsRating)}
                                rating={normalizedRating}
                            />
                            {reviewsCount !== undefined ? (
                                <div className={style(classes.reviewsCount, {})}>
                                    ({reviewsCount} reviews)
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                </div>
            </div>
            <div
                className={style(classes.sectionModelNameAndRating, FlexLayout.row.alignToStart)}
            ></div>
        </div>
    );
});
