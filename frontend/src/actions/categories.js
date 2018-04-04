import * as API from '../utils/api';
import { GET_CATEGORIES } from './types';

export const getCategories = (categories) => {
    return {
        type: GET_CATEGORIES,
        categories: categories
    };
}

export const fetchCategories = () => (dispatch) =>
    API.fetchCategories().then(data =>
        dispatch(getCategories(data.categories))
    );
