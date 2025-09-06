import { Colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  label:{
    color: Colors.gray[400],
    fontSize:10,
    textTransform:"uppercase",
    fontFamily: fontFamily.regular,
  },
  value:{
    color: Colors.black,
    fontSize:16,
    fontFamily: fontFamily.medium,
   

  },
 
})
