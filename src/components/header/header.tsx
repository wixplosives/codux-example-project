import React from 'react';
import ReactDOM from 'react-dom';
import { style, classes } from './header.st.css';
import { FlexLayout } from '../../common-classes/flex-layout/flex-layout';
import { UserStatus } from '../user-status/user-status';
import { useContext, useState } from 'react';
import { LoggedInUserContext } from '../../stores/user-store';
import { Menu, MenuProps } from '../menu/menu';
import { Logo } from '../logo/logo';
import { ShoppingCart, ShoppingCartProps } from '../shopping-cart/shopping-cart';
import { CommonClasses } from '../../common-classes/common-classes/common-classes';
import { MobileAppMenu } from '../mobile-app-menu/mobile-app-menu';

export interface HeaderProps {
    className?: string;
    menuItems: MenuProps['menuItems'];
    shoppingCartItemsCount: ShoppingCartProps['itemsCount'];
}

export const Header = React.memo<HeaderProps>((props) => {
    const { className, menuItems, shoppingCartItemsCount } = props;

    const loggedInUser = useContext(LoggedInUserContext);

    const [menuIsShown, setMenuIsShown] = useState(false);

    const onMenuButtonClick: React.MouseEventHandler = () => {
        setMenuIsShown(true);
    };

    const onMobileMenuCloseButtonClick = () => {
        setMenuIsShown(false);
    };

    return (
        <>
            <div className={style(classes.root, className)}>
                <div
                    className={style(
                        classes.mainHeader,
                        CommonClasses.positioned,
                        FlexLayout.row.alignToCenter
                    )}
                >
                    <div className={style(classes.menuButton)} onClick={onMenuButtonClick}>
                        <div className={classes.menuButtonBar} />
                        <div className={classes.menuButtonBar} />
                        <div className={classes.menuButtonBar} />
                    </div>
                    <div className={style(classes.appLogo)}>
                        <Logo />
                        <div className={style(classes.logoText)}>Luxury Watches</div>
                    </div>
                    <div
                        className={style(
                            classes.menu,
                            FlexLayout.centerContent,
                            FlexLayout.fillRemainingHorizontalSpace
                        )}
                    >
                        <Menu menuItems={menuItems} layout={'horizontal'} />
                    </div>
                    <div
                        className={style(
                            FlexLayout.row.alignToCenter,
                            FlexLayout.horizontallyJustifyToEnd
                        )}
                    >
                        <ShoppingCart
                            className={style(classes.shoppingCart)}
                            itemsCount={shoppingCartItemsCount}
                        />
                        <UserStatus className={style(classes.userStatus)} userInfo={loggedInUser} />
                    </div>
                </div>
            </div>
            {menuIsShown
                ? ReactDOM.createPortal(
                      <MobileAppMenu
                          className={style(classes.mobileAppMenu, {})}
                          menuItems={menuItems}
                          onCloseButtonClick={onMobileMenuCloseButtonClick}
                      />,
                      document.body
                  )
                : null}
        </>
    );
});
