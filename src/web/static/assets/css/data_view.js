import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "path": {
        "stroke": "DodgerBlue",
        "strokeWidth": 1,
        "fill": "none"
    },
    "axis": {
        "fontSize": 11,
        "fill": "gray"
    },
    "xaxis line": {
        "stroke": "lightgrey"
    },
    "xaxis minor": {
        "strokeOpacity": 0.5
    },
    "xaxis path": {
        "stroke": "#fafafa"
    },
    "yaxis line": {
        "fill": "none",
        "stroke": "lightgrey"
    },
    "yaxis path": {
        "fill": "none",
        "stroke": "lightgrey"
    }
});