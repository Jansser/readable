export const fetchCategories = () => {
    return fetch('http://localhost:3001/categories', {
        headers: { Authorization: 'whatever-you-want' }
    }).then(response => response.json())
        //.then(data => { return data.map(data.categories, 'name') })
}