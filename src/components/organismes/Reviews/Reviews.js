import React from 'react';
import { AppContainer, Button } from '../../atoms';
import { Divider, Rating, RatingStarIcon, ReviewsContainer, ReviewsItem, ReviewsItemButtons, ReviewsItemDate, ReviewsItemName, ReviewsItems, ReviewsItemText } from './Reviews.styles';

const Reviews = ({ content }) => {
    return (
        <AppContainer>
            <ReviewsContainer>
                <h2>
                    Отзывы
                </h2>
                <ReviewsItems>
                    {
                        content.map((item, index) => (
                            <ReviewsItem key={index}>
                                <ReviewsItemDate>
                                    {item.date}
                                </ReviewsItemDate>
                                <Rating>
                                    <RatingStarIcon src='/assets/icons/starYellow.svg' alt='' />
                                    <RatingStarIcon src='/assets/icons/starYellow.svg' alt='' />
                                    <RatingStarIcon src='/assets/icons/starYellow.svg' alt='' />
                                    <RatingStarIcon src='/assets/icons/starYellow.svg' alt='' />
                                    <RatingStarIcon src='/assets/icons/starYellow.svg' alt='' />
                                </Rating>
                                <ReviewsItemName>
                                    {item.name}
                                </ReviewsItemName>
                                <ReviewsItemText>
                                    {item.review}
                                </ReviewsItemText>
                                <Divider />
                            </ReviewsItem>
                        ))
                    }
                    <ReviewsItemButtons>
                        <Button>Смотреть ещё</Button>
                        <Button white >Оставить отзыв</Button>
                    </ReviewsItemButtons>
                </ReviewsItems>
            </ReviewsContainer>
        </AppContainer>
    );
}

export default Reviews;
