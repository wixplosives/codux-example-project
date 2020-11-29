import React from 'react';

export interface UserInfo {
    username: string;
    fullName: string;
    imageUrl?: string;
}

export const LoggedInUserContext = React.createContext<UserInfo | null>(null);

class UserStoreSingleton {
    public getLoggedInUser(): UserInfo | null {
        return null;
    }
}

export const UserStore = new UserStoreSingleton();
