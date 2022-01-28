import { createSimulation } from '@wixc3/react-simulation';
import { StarsRating } from '../../../src/components/stars-rating/stars-rating';
import { FontAwesomeLoader } from '../../setup/font-awesome-loader';

export default createSimulation({
    name: 'Rating 5',
    componentType: StarsRating,
    props: {
        rating: 5,
    },
    setup: [FontAwesomeLoader],
    environmentProps: {},
});
