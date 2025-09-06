import { StyleSheet } from "react-native";
import { Colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hearder:{
    width:"100%",
    flex:1,
    alignItems:"center",
    justifyContent:"center",

  },
  boxTitle:{
        backgroundColor: Colors.gray[300],
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        

  },
  title:{
    color: Colors.black,
    fontSize:24,
    fontFamily: fontFamily.extrabold,


  },
  subtitle:{
     color: Colors.black,
    fontSize:14,
    fontFamily: fontFamily.medium,

  },
  ticket:{
    backgroundColor: Colors.white,
   
    width:"100%",
    borderRadius:22,
    overflow:"hidden",
    paddingBottom:24,
  },
  content:{
    padding:20,

  },
  flight:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:52,

  },
  duration:{
    alignItems:"center"

  },
  hours:{
    color: Colors.gray[800],
    fontSize:14,
    fontFamily:fontFamily.regular,


  },
  lebal:{
    color: Colors.gray[400],
    fontSize:12,
    textTransform:"uppercase",
    fontFamily:fontFamily.regular,
  },
  name:{
    color: Colors.black,
    fontSize:24,
    fontFamily:fontFamily.bold,

  },
  details:{
    marginTop:54,

  },
   inline:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between"

  },
  footer:{
        width:"100%",
        padding:20,
        flexDirection:"row",
        gap:22,


  },
  footerComtnt:{
        gap:24,
        flex:1,

  },



});

