import React from 'react';
import { FlexLayout } from '../../common-classes/flex-layout/flex-layout';
import { CommonClasses } from '../../common-classes/common-classes/common-classes';

export interface AppProductItemProps {
    productTitle: string;
    className?: string;
}

export const AppProductItem = ((props: AppProductItemProps) => {
    const {
        productTitle,
        className,
        ...htmlAttributes
    } = props;


    return (
        <div
            {...htmlAttributes}
        >
            
            <div className={FlexLayout.row.alignToStart}>
                <div className={FlexLayout.fillRemainingHorizontalSpace}>
                    <div>
                        <a className={CommonClasses.resetDefaultStyle}>
                            {productTitle}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
});

