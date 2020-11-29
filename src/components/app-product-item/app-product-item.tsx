import React from 'react';
import { classes, style } from './app-product-item.st.css';
import { StarsRating } from '../stars-rating/stars-rating';
import { FlexLayout } from '../../common-classes/flex-layout/flex-layout';
import { ImageView } from '../image-view/image-view';
import { CommonClasses } from '../../common-classes/common-classes/common-classes';

export interface AppProductItemProps extends React.HTMLAttributes<any> {
    imageUrl: string;
    modelName?: string;
    productId: string;
    productTitle: string;
    price: string;
    isNew?: boolean;

    reviewsAverageRating?: number;
    reviewsCount?: number;

    onAddToCartButtonClick?: (productId: string) => void;
    isAddedToCart?: boolean;
}

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
