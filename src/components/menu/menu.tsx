import React from 'react';
import { style, classes } from './menu.st.css';
import { FlexLayout } from '../../common-classes/flex-layout/flex-layout';

export interface MenuItem {
    title: string;
    url: string;
}

export interface MenuProps {
    menuItems: MenuItem[];
    layout: 'horizontal' | 'vertical';
    className?: string;
}

export const Menu = React.memo<MenuProps>((props) => {
    const { menuItems = [], layout, className } = props;

    const menuItemsViews = menuItems.map((menuItem, index) => {
        return (
            <a key={index} className={style(classes.menuItem, {})} href={menuItem.url}>
                {menuItem.title}
            </a>
        );
    });

    const rootFlexLayout =
        layout === 'horizontal' ? FlexLayout.row.alignToCenter : FlexLayout.column.default;
    const cssStateLayout = layout === 'horizontal' ? 'horizontal' : 'vertical';

    return (
        <div className={style(classes.root, { layout: cssStateLayout }, className, rootFlexLayout)}>
            {menuItemsViews}
        </div>
    );
});
