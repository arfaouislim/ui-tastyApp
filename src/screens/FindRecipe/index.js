//@react
import React, { useEffect, useState } from "react";
//@react-native
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { Searchbar } from "react-native-paper";

//@redux
import { useSelector, useDispatch } from "react-redux";
//@constants
import { URL } from "../../constants";
//@components
import RecipeItem from "../../components/recipeItem";
//@services
import {
  getRecipesService,
  deleteRecipeService,
  addRecipeService,
  updateRecipeService,
  // findRecipeService,
} from "../../services/recipies";
//@selectors
import { selectRecipes } from "../../redux/selectors";
//@icons
import { FontAwesome5 } from "@expo/vector-icons";

export default function FindRecipe() {
  const dispatch = useDispatch();
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const recipesList = useSelector(selectRecipes);
  const [recipes, setRecipes] = useState(useSelector(selectRecipes));
  const [searchQuery, setSearchQuery] = React.useState("");
  const [findResult, setFindResult] = useState(true);

  const onChangeSearch = (query) => {
    setRecipes(recipesList);
    setSearchQuery(query);
  };

  const handleSearch = () => {
    setRecipes(recipesList);
    const res = [...recipes].filter((recipe) => {
      console.log(
        `query >${searchQuery.toLowerCase()} | res >${recipe.name
          .toLowerCase()
          .search(searchQuery)} |idx >${recipe.name
          .toLowerCase()
          .indexOf(searchQuery.toLowerCase())}  `
      );
      return recipe.name.toLowerCase().search(searchQuery.toLowerCase()) !== -1;
    });

    searchQuery.toLowerCase() === ""
      ? setRecipes(recipesList)
      : setRecipes(res);
    res.length ? setFindResult(true) : setFindResult(false);
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  const componentDidMount = () => {
    dispatch(getRecipesService());
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeSearch}
          value={searchQuery}
          placeholder="Search Bar"
          onKeyPress={handleSearch}
        />
        <View style={styles.searchBtn}>
          <FontAwesome5 name="search" size={24} color="#8F8F8F" />
        </View>

        {/*
        <Searchbar
          style={{ borderRadius: 10 }}
          placeholder="Search"
          onChangeText={onChangeSearch}
          onCancel={() => setRecipes(useSelector(selectRecipes))}
          value={searchQuery}
        />
          */}
      </View>
      <View style={styles.searchResultContainer}>
        {!findResult ? (
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            We didn't find any results !
          </Text>
        ) : (
          <ScrollView style={styles.scrollViewContainer}>
            {recipes.map((recipe) => {
              return (
                <RecipeItem
                  style={"H-Box"}
                  key={recipe.id}
                  recipe={recipe}
                  //navigation={navigation}
                  onView={() => {
                    //setIsVisible(true);
                    //setSelectedRecipe(recipe);
                  }}
                />
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {},
  container: {
    flexDirection: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    paddingBottom: 65,
  },

  searchBarContainer: {
    padding: 10,
    //marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  textInput: {
    width: "85%",
    height: 50,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    backgroundColor: "#F0FBFC",
    borderColor: "#ccc",
  },
  searchBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "15%",
    backgroundColor: "#F0FBFC",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },

  searchResultContainer: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#FFF",
    padding: 10,
    height: "100%",
  },
});
