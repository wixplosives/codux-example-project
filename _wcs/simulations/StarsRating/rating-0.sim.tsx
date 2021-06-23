import { createSimulation } from '@wixc3/wcs-core';
import { StarsRating } from '../../../src/components/stars-rating/stars-rating';
import { FontAwesomeLoader } from '../../setup/font-awesome-loader';

export default createSimulation({
    name: 'Rating 0',
    componentType: StarsRating,
    props: {
        rating: 5,
    },
    setup: [FontAwesomeLoader],
    environmentProps: {},
});
