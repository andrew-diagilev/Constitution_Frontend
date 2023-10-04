import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const COLORS = {

    BackgroundNormal: "#bed3d3",
    BackgroundSelect: "#bed3d3",
    BackgroundSuccess: "rgba(176, 197, 199, 0);",
    BackgroundError: "rgba(176, 197, 199, 0);",



    BorderNormal: "#bed3d3",
    BorderSelect: "#bed3d3",
    BorderSuccess: "#00953d",
    BorderError: "#e2000a",

    TextNormal:"#000000",
    TextSelect:"#000000",
    TextSuccess:"#ffffff",
    TextError:"#ffffff",

    RoundLgNormal: "#ffffff",
    RoundLgSelect: "#ffffff",
    RoundLgSuccess: "#00953d",
    RoundLgError: "#e2000a",

    RoundSmNormal: "#ffffff",
    RoundSmSelect: "#8ca2b5",
    RoundSmSuccess: "#00953d",
    RoundSmError: "#e2000a",



    primary: "#000000",
    secondary: '#000000',
    accent: '#3498db',

    success: '#00953d',
    error: '#e2000a',

    black: "#171717",
    white: "#FFFFFF",
    background: "#b0c5c7"
}


export const SIZES = {
    base: 10,
    width,
    height
}