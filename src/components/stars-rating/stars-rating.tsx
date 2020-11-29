import React from 'react';
import { style, classes } from './stars-rating.st.css';
import { FlexLayout } from '../../common-classes/flex-layout/flex-layout';

export interface StarsRatingProps {
    rating: number;
    className?: string;
}

export const StarsRating = React.memo<StarsRatingProps>((props) => {
    const { rating, className } = props;

    const normalizedRating = Math.min(Math.max(rating, 0), 5);

    return (
        <div className={style(classes.root, className, FlexLayout.row.alignToCenter)}>
            {Array.from(Array(5), (_, index) => (
                <i
                    title={`${normalizedRating}/5`}
                    key={index}
                    className={style(
                        classes.star,
                        { isHighlighted: index + 1 <= normalizedRating },
                        'fas fa-star'
                    )}
                />
            ))}
        </div>
    );
});
