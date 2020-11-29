import { FontAwesomeLoader } from './font-awesome-loader';
import { createGoogleFontLoader } from './google-font-loader';

export const CommonSimulationsSetup = [
    FontAwesomeLoader,
    createGoogleFontLoader('Prompt', ['300', '400', '500', '600', '700']),
    createGoogleFontLoader('Caudex', ['400', '700']),
];

if (!document.documentElement.hasAttribute('prevented-links-opening')) {
    document.documentElement.setAttribute('prevented-links-opening', 'true');

    /**
     * Prevent all the links from opening their targets.
     */
    document.documentElement.addEventListener(
        'click',
        (event: MouseEvent) => {
            const anchor = (event.target as Element).closest('a');

            if (anchor) {
                event.preventDefault();
                alert(`Prevented opening a link to '${anchor.getAttribute('href')}'`);
            }
        },
        {
            capture: true,
        }
    );
}
