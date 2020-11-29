import React from 'react';
import type { IProduct } from '../../stores/products-store';
import { classes, style } from './products-list.st.css';
import { AppProductItem, AppProductItemProps } from '../app-product-item/app-product-item';

export interface ProductsListProps {
    products: IProduct[];
    onAddToCartButtonClick?: AppProductItemProps['onAddToCartButtonClick'];
    productsInCart?: string[];
}

export const ProductsList = React.memo<ProductsListProps>((props) => {
    const { products = [], productsInCart, onAddToCartButtonClick } = props;

    const productItems = products.map((product) => {
        return (
            <AppProductItem
                key={product.productId}
                imageUrl={product.imageUrl}
                modelName={product.modelName}
                productId={product.productId}
                productTitle={product.productTitle}
                price={product.price}
                isNew={product.isNew}
                reviewsAverageRating={product.reviewsAverageRating}
                reviewsCount={product.reviewsCount}
                onAddToCartButtonClick={onAddToCartButtonClick}
                isAddedToCart={productsInCart && productsInCart.includes(product.productId)}
            />
        );
    });

    return <div className={style(classes.root, {})}>{productItems}</div>;
});
