import React, { useContext } from 'react';
import { style, classes } from './mobile-app-menu.st.css';
import { Menu, MenuProps } from '../menu/menu';
import { FlexLayout } from '../../common-classes/flex-layout/flex-layout';
import { UserStatus } from '../user-status/user-status';
import { LoggedInUserContext } from '../../stores/user-store';

export interface MobileAppMenuProps {
    menuItems: MenuProps['menuItems'];
    onCloseButtonClick?: () => void;
    className?: string;
}

export const MobileAppMenu = React.memo<MobileAppMenuProps>((props) => {
    const { className, menuItems, onCloseButtonClick } = props;

    const loggedInUser = useContext(LoggedInUserContext);

    return (
        <div className={style(classes.root, className, FlexLayout.centerContent)}>
            <div className={style(classes.body, FlexLayout.column.default)}>
                <Menu
                    className={style(classes.appMenu)}
                    menuItems={menuItems}
                    layout={'vertical'}
                />
                <div className={style(classes.separator)} />
                <UserStatus className={style(classes.userStatus)} userInfo={loggedInUser} />
            </div>
            <div className={style(classes.closeButton, {})} onClick={onCloseButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                    <g fillRule="evenodd">
                        <path d="M30.607 10.808l-19.8 19.799-1.414-1.415 19.8-19.799z" />
                        <path d="M30.607 29.192l-1.415 1.415-19.799-19.8 1.415-1.414z" />
                    </g>
                </svg>
            </div>
        </div>
    );
});
