import React from 'react';
import type { UserInfo } from '../../stores/user-store';
import { style, classes } from './user-status.st.css';
import { CommonClasses } from '../../common-classes/common-classes/common-classes';

export interface UserStatusProps {
    className?: string;
    userInfo?: UserInfo | null;
}

export const UserStatus = React.memo<UserStatusProps>((props) => {
    const { className, userInfo } = props;

    return (
        <a
            href={'#'}
            className={style(classes.root, className, CommonClasses.button, CommonClasses.noWrap)}
        >
            {userInfo ? userInfo.fullName : 'Sign In'}
        </a>
    );
});
