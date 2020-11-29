import React from 'react';
import { style, classes } from './shopping-cart.st.css';
import { CommonClasses } from '../../common-classes/common-classes/common-classes';

export interface ShoppingCartProps {
    className?: string;
    itemsCount: number;
}

export const ShoppingCart = React.memo<ShoppingCartProps>((props) => {
    const { className, itemsCount } = props;

    return (
        <a href={'#'} className={style(classes.root, className)}>
            <div className={CommonClasses.positioned}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21.5">
                    <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        className={style(classes.shape)}
                    >
                        <path d="M.5 6v13.5A1.5 1.5 0 002 21h15a1.5 1.5 0 001.5-1.5V6z" />
                    </g>
                    <g fill="none" fillRule="evenodd" stroke="#000">
                        <path d="M14.917 5.5c0-2.761-2.425-5-5.417-5s-5.417 2.239-5.417 5" />
                    </g>
                </svg>
                {itemsCount ? <div className={style(classes.itemsCount)}>{itemsCount}</div> : null}
            </div>
        </a>
    );
});
