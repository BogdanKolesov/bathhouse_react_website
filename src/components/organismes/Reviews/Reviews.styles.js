import styled from 'styled-components';
import { COLOR_DARK, COLOR_LITEGRAY } from '../../../constants/colors';
import { Button } from '../../atoms';

export const ReviewsContainer = styled.section`
    margin-top: 80px;
    
    h2{
        color: ${COLOR_DARK};
        font-size: 60px;
    }
`
export const ReviewsItems = styled.div`
    display: flex;
    flex-direction: column;
`
export const ReviewsItem = styled.div`
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    position: relative;
`
export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgba(75, 75, 75, 0.7);
    margin-top: 30px;
`
export const ReviewsItemDate = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
    color: ${COLOR_LITEGRAY};
`
export const ReviewsItemIcon = styled.div`

`
export const Rating = styled.div`

`
export const RatingStarIcon = styled.img`

`

export const ReviewsItemName = styled.div`
    margin-top: 12px;
    font-size: 20px;
    font-weight: bold;
`
export const ReviewsItemText = styled.div`
    margin-top: 10px;
    font-size: 16px;
`

export const ReviewsItemButtons = styled.div`
    margin: 0 auto;
    margin-top: 50px;

    ${Button}:first-child{
        margin-right: 40px;
    }
`