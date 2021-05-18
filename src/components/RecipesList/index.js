//@react
import React, { useEffect, useState } from "react";
//@react-native
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
//@redux
import { useSelector, useDispatch } from "react-redux";
//@constants
import { URL } from "../../constants";
//@components
import Popup from "../Popup";
import RecipeItem from "../recipeItem";
import RecipeCard from "../RecipeCard";
//@services
import {
  getRecipesService,
  deleteRecipeService,
  addRecipeService,
  updateRecipeService,
} from "../../services/recipies";
//@selectors
import { selectRecipes } from "../../redux/selectors";

export default function RecipesList({ navigation }) {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const recipes = useSelector(selectRecipes);

  useEffect(() => {
    componentDidMount();
  }, []);

  const componentDidMount = () => {
    dispatch(getRecipesService());
  };

  return (
    <>
      <ScrollView horizontal={true} style={styles.container}>
        {recipes.map((recipe) => {
          return (
            <RecipeItem
              style={"V-Box"}
              key={recipe.id}
              recipe={recipe}
              navigation={navigation}
              onView={() => {
                setIsVisible(true);
                setSelectedRecipe(recipe);
              }}
              /* onEdit={() => {
                setSelectedRecipe(recipe);
                navigation.navigate("Edit Recipe", {
                  recipe: recipe,
                });
              }}

              
              onDelete={() => {
                setSelectedRecipe(recipe);
                setIsVisible(true);
              }}

              onView={() => {
                navigation.navigate("Recipe Card", {
                  recipe: recipe,
                });
              }}*/
            />
          );
        })}
      </ScrollView>

      {isVisible && (
        <RecipeCard
          selectedRecipe={selectedRecipe}
          isVisible={isVisible}
          recipe={selectedRecipe}
          onExit={() => {
            setIsVisible(false);
          }}
        />
      )}

      {/* <SafeAreaView style={styles.safeArea} />*/}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,

    //marginBottom: 150,
    //marginTop: 5,
    //paddingLeft: 5,
  },
});
