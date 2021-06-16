import React from 'react';
import { style, classes } from './bread-crumbs.st.css';
import { FlexLayout } from '../../common-classes/flex-layout/flex-layout';

export interface BreadCrumbsItem {
    title: string;
    url: string;
}

export interface BreadCrumbsProps {
    items: BreadCrumbsItem[];
    className?: string;
}

export const BreadCrumbs = React.memo<BreadCrumbsProps>((props) => {
    const { items = [], className } = props;

    const menuItemsViews = items.map((menuItem, index) => {
        const isCurrent = index === items.length - 1;

        if (isCurrent) {
            return (
                <div key={index} className={style(classes.breadCrumbItem, { isCurrent: true })}>
                    {menuItem.title}
                </div>
            );
        } else {
            return (
                <React.Fragment key={index}>
                    <a className={style(classes.breadCrumbItem, {})} href={menuItem.url}>
                        {menuItem.title}
                    </a>
                    <div className={style(classes.separator)}>{`>`}</div>
                </React.Fragment>
            );
        }
    });

    return (
        <div className={style(classes.root, className)}>
            {menuItemsViews}
        </div>
    );
});
