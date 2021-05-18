import {
  fetchRecipes,
  deleteRecipe,
  addRecipe,
  updateRecipe,
  findRecipe,
} from "../redux/actions";
import { URL } from "../constants";

//************************************************************************/
const fetchCall = async (url, config = {}) => {
  const req = await fetch(url, config);
  return await req.json();
};
//************************************************************************/
export const getRecipesService = () => async (dispatch) => {
  const res = await fetchCall(`${URL.STRAPI_RECIPES}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return dispatch(fetchRecipes(res));
};
//************************************************************************/

export const deleteRecipeService = (recipe_id) => async (dispatch) => {
  console.log(">>>>>>>", recipe_id);
  const res = await fetchCall(`${URL.STRAPI_RECIPES}/${recipe_id}`, {
    method: "DELETE",
  });
  return dispatch(deleteRecipe(res.id));
};
//************************************************************************/
export const addRecipeService = (recipe) => async (dispatch) => {
  console.log("Service RECIPE >>>>>>>", recipe);

  const res = await fetchCall(`${URL.STRAPI_RECIPES}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });
  console.log("Service RES >>>>>>>", res);

  return dispatch(addRecipe(res));
};
//************************************************************************/
export const updateRecipeService = (recipe_id, data) => async (dispatch) => {
  const res = await fetchCall(`${URL.STRAPI_RECIPES}/${recipe_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return dispatch(updateRecipe(recipe_id, res));
};
//************************************************************************/

/*export const findRecipeService = (searchValue) => async (dispatch) => {
  console.log("query >>>>>", searchValue);
  return dispatch(findRecipe(searchValue));
};*/
//************************************************************************/
export const uploadMediaService = async (formData) => {
  const res = await fetchCall(URL.STRAPI_UPLOAD, {
    method: "POST",
    body: formData,
    headers: {
      "content-type": "multipart/form-data",
    },
  });

  return res[0];
};
//************************************************************************/
export const deleteUploadedMediaService = async (id) => {
  const res = await fetchCall(`${URL.STRAPI_UPLOAD}/files/${id}`, {
    method: "DELETE",
  });
  console.log("res >>>>>>>", res);

  return res;
};
//************************************************************************/
