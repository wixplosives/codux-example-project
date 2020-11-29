import React, { useState } from 'react';
import { Header } from '../header/header';
import { ProductsList, ProductsListProps } from '../products-list/products-list';
import { classes, style } from './app-products-collection-page.st.css';
import { BreadCrumbs, BreadCrumbsProps } from '../bread-crumbs/bread-crumbs';
import { SiteMap } from '../../stores/site-map';

export interface AppProductsCollectionPageProps {
    products: ProductsListProps['products'];
    breadCrumbs: BreadCrumbsProps['items'];
}

export const AppProductsCollectionPage = React.memo<AppProductsCollectionPageProps>((props) => {
    const { products, breadCrumbs } = props;

    const [productsInCart, setProductsInCart] = useState<string[]>([]);

    const onAddToCartButtonClick: ProductsListProps['onAddToCartButtonClick'] = (productId) => {
        setProductsInCart((products) => {
            if (products.includes(productId)) {
                return products.filter((existingProductId) => existingProductId !== productId);
            } else {
                return [...products, productId];
            }
        });
    };

    return (
        <div className={style(classes.root, {})}>
            <Header
                className={style(classes.appHeader, {})}
                menuItems={[
                    { title: SiteMap.Collections.title, url: SiteMap.Collections.url },
                    { title: SiteMap.Shop.title, url: SiteMap.Shop.url },
                    { title: SiteMap.About.title, url: SiteMap.About.url },
                ]}
                shoppingCartItemsCount={productsInCart.length}
            />
            <div className={style(classes.pageBody, {})}>
                <BreadCrumbs className={style(classes.breadCrumbs, {})} items={breadCrumbs} />
                <ProductsList
                    products={products}
                    productsInCart={productsInCart}
                    onAddToCartButtonClick={onAddToCartButtonClick}
                />
            </div>
        </div>
    );
});
