import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { URL } from "../../constants";
import { useDispatch } from "react-redux";
import {
  uploadMediaService,
  deleteUploadedMediaService,
  getRecipesService,
  updateRecipeService,
} from "../../services/recipies";

export default function EditRecipe({ navigation, route }) {
  const dispatch = useDispatch();
  const [recipeName_Input, setRecipeName_Input] = useState("");
  const [recipeIngredients_Input, setRecipeIngredients_Input] = useState("");
  const [recipeImage_ID, setRecipeImage_ID] = useState(null);
  const [uploaderImage, setUploaderImage] = useState("");

  const { recipe } = route.params;

  useEffect(() => {
    setRecipeName_Input(recipe.name);
    setRecipeIngredients_Input(recipe.ingredients);
    if (recipe.image) {
      setRecipeImage_ID(recipe.image.id);
      setUploaderImage(URL.STRAPI_LOCALHOST + recipe.image.url);
    } else setRecipeImage_ID(null);
  }, []);

  async function handle_UploadPhoto() {
    // Display the camera to the user and wait for them to take a photo or to cancel
    // the action
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (result.cancelled) {
      return;
    }

    if (!result.cancelled) {
      setUploaderImage(result.uri);
    }
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = result.uri;
    //console.log("image name >>> ", localUri);

    let filename = localUri.split("/").pop();
    // console.log("image name >>> ", filename);

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append("files", { uri: localUri, name: filename, type });

    uploadMediaService(formData)
      .then((response) => {
        setRecipeImage_ID(response.id);
        console.log(" 2 >>>>", recipeImage_ID);
        return response;
      })
      .catch((err) => console.log("Error", err));
  }

  async function handle_DeleteUploadedPhoto(id) {
    deleteUploadedMediaService(id)
      .then((response) => {
        setRecipeImage_ID(null);
        return response;
      })
      .catch((err) => console.log("Error", err));
  }

  return (
    <View style={styles.container}>
      <View style={styles.allInputs_Container}>
        <View style={styles.input_Container}>
          <Text style={styles.label}>Image :</Text>

          <View style={styles.upload_Section}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.upload_Btn}
              onPress={
                recipeImage_ID
                  ? () => {
                      handle_DeleteUploadedPhoto(recipeImage_ID);
                      setRecipeImage_ID(null);
                      handle_UploadPhoto();
                    }
                  : handle_UploadPhoto
              }
            >
              {/*Single file selection button*/}
              <Text
                style={{ marginRight: 10, fontSize: 12, fontWeight: "bold" }}
              >
                Upload
              </Text>
              <Entypo name="attachment" size={24} color="black" />
            </TouchableOpacity>
            {recipeImage_ID && (
              <View>
                <Image
                  source={{
                    uri: uploaderImage,
                  }}
                  style={styles.imageIconStyle}
                />
                <AntDesign
                  name="closecircle"
                  size={20}
                  color="black"
                  style={styles.close_Btn}
                  onPress={() => handle_DeleteUploadedPhoto(recipeImage_ID)}
                />
              </View>
            )}
          </View>
        </View>
        <View style={styles.input_Container}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setRecipeName_Input}
            value={recipeName_Input}
          />
        </View>

        <View style={styles.input_Container}>
          <Text style={styles.label}>Ingredients :</Text>
          <TextInput
            style={styles.textArea}
            onChangeText={setRecipeIngredients_Input}
            multiline={true}
            numberOfLines={5}
            value={recipeIngredients_Input}
          />
        </View>
        <View style={styles.btns_Container}>
          <TouchableOpacity
            style={styles.cancel_Btn}
            onPress={() => {
              setRecipeIngredients_Input("");
              setRecipeName_Input("");
              navigation.navigate("Home");
              dispatch(getRecipesService());
            }}
          >
            <Text style={styles.btn_Txt}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.confirm_Btn}
            onPress={() => {
              dispatch(
                updateRecipeService(recipe.id, {
                  name: recipeName_Input,
                  image: recipeImage_ID ? { id: recipeImage_ID } : null,
                  ingredients: recipeIngredients_Input,
                })
              );
              navigation.navigate("Home");
              dispatch(getRecipesService());
              setRecipeIngredients_Input("");
              setRecipeName_Input("");
            }}
          >
            <Text style={styles.btn_Txt}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input_Container: {
    flexDirection: "row",
    padding: 10,
    alignContent: "flex-start",
  },

  allInputs_Container: {
    borderRadius: 20,
    padding: 20,
  },

  upload_Section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  upload_Btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "dotted",
    padding: 10,
    borderRadius: 10,
    padding: 10,
    borderRadius: 10,
    width: 120,
    backgroundColor: "#F0FBFC",
  },
  imageIconStyle: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  close_Btn: {
    position: "absolute",
    right: -10,
    top: -10,
  },

  label: {
    width: "30%",
    marginRight: 10,
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  input: {
    width: "70%",
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F0FBFC",
    borderStyle: "dotted",
  },

  textArea: {
    width: "70%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F0FBFC",
    borderStyle: "dotted",
  },

  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingBottom: 20,
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 30,
  },
  btns_Container: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
  },

  btn_Txt: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },

  confirm_Btn: {
    //flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#79dcf1",
    width: "50%",
    borderRadius: 10,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  cancel_Btn: {
    backgroundColor: "#ccc",
    width: "30%",
    borderRadius: 10,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  //***************************************** */
});
