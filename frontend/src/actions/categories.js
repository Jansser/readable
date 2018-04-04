import * as API from '../utils/api';

export const GET_CATEGORIES = 'GET_CATEGORIES';

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
