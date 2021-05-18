import * as types from "../actionTypes";

export default function recipes(state = [], action) {
  switch (action.type) {
    case types.FETCH_RECIPES:
      return [...action.payload.recipes];
    case types.DELETE_RECIPE:
      return state.filter((recipe) => recipe.id !== action.payload.id);
    case types.FIND_RECIPE:
      return state.filter((recipe) => {
        console.log("recipename-payload>>>", recipe.name, action.payload);

        recipe.name.search(action.payload.searchValue) !== -1;
      });
    case types.ADD_RECIPE:
      return [...state, action.payload.recipe];

    default:
      return state;
  }
}
