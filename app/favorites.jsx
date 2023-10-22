import { SafeAreaView, Text, View } from "react-native"
import { BottomTabBar } from "../components/common/Tabbar";
import HeaderComponent from "../components/common/Header";
import { Drawer } from "../components/common/Drawer";
import { useState } from "react";
import { CommonStyles } from "../styles/CommonStyles";

export default ExamPage = () => {
    const [ SideDrawerOpen , setSideDrawerOpen ] = useState(false);
  return (
    <SafeAreaView>
      <View style={CommonStyles.container}>
        <HeaderComponent setSideDrawerOpen={setSideDrawerOpen} headerText='علاقه مندی ها' />
        { <View style={{ position : 'absolute' , top : 0 , zIndex : 99999 }}>
          <Drawer drawerActive={SideDrawerOpen} setSideDrawerOpen={setSideDrawerOpen} />
          </View>  }
      </View>
      <BottomTabBar />
    </SafeAreaView>
    
  );
}