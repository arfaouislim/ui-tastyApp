import * as types from "./actionTypes";

//RECIPES ACTIONS -----------------------------------------------

export const fetchRecipes = (recipes) => ({
  type: types.FETCH_RECIPES,
  payload: { recipes },
});

export const addRecipe = (recipe) => ({
  type: types.ADD_RECIPE,
  payload: { recipe },
});

export const updateRecipe = (id, data) => ({
  type: types.UPDATE_RECIPE,
  payload: { id, data },
});

export const deleteRecipe = (id) => ({
  type: types.DELETE_RECIPE,
  payload: { id },
});

export const findRecipe = (searchValue) => ({
  type: types.FIND_RECIPE,
  payload: { searchValue },
});

//USERS ACTIONS -----------------------------------------------
export const login = (user, jwt) => ({
  type: types.LOGIN,
  payload: { user, jwt },
});

export const signUp = (user, jwt) => ({
  type: types.SIGNUP,
  payload: { user, jwt },
});

export const logout = () => ({
  type: types.LOGOUT,
  payload: {},
});
