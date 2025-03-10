import axios from 'axios';

const CATEGORY_URL = 'http://localhost:9797/exp-mng/category';
const ID_URL = 'http://localhost:9797/exp-mng/category-id';

export const saveCategory = (category) => {
    return axios.post(CATEGORY_URL, category);
};
export const updateCategory = (category) => {
    return axios.post(CATEGORY_URL, category);
};
export const displayAllCategories = () => {
    return axios.get(CATEGORY_URL);
};
export const displayCategoryById = (id) => {
    return axios.get(CATEGORY_URL+'/'+ id);
};
export const deleteCategoryById = (id) => {
    return axios.delete(CATEGORY_URL+'/'+ id);
};
export const generateCategoryId = () => {
    return axios.get(ID_URL);
};
// export const displayCategoryByName=(name)=>{
//     return axios.get(OTHER_URL+'/'+name);
// };
