import { createGoogleFontLoader } from '../../setup/google-font-loader';

export const UserStatusSimulationsSetup = [
    /**
     * The UserInfo component uses the 'Prompt' font.
     * Therefore, we'll load it in all the component's Boards.
     */
    createGoogleFontLoader('Prompt', ['300', '400', '500']),
];
