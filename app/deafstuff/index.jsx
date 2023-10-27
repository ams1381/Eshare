import { SafeAreaView, StyleSheet, Text, TouchableNativeFeedback, View } from "react-native"
import { useEffect, useRef, useState } from "react";
import { BottomTabBar } from "../../components/common/Tabbar";
import { Drawer } from "../../components/common/Drawer";
import HeaderComponent from "../../components/common/Header";
import { CommonStyles } from "../../styles/CommonStyles";
import * as Animatable from 'react-native-animatable';
import { Icon } from "../../components/common/Icon";

const animationStyles = {
    fadeIn: 'fadeIn',
    slideInUp: 'slideInUp',
  };
export default ExamPage = () => {
    const [ SideDrawerOpen , setSideDrawerOpen ] = useState(false);
    const item1Ref = useRef();
    const item2Ref = useRef();
    const item3Ref = useRef();
    const item4Ref = useRef();
    const item5Ref = useRef();


    useEffect(() => {
        // You can trigger the animations in the useEffect or based on user interactions
        animateDeafItems();
      }, []);
    
      const animateDeafItems = () => {
        // You can trigger different animations for each item
        const animationDuration = 1000; // Animation duration in milliseconds
    
    
        if (item1Ref.current) 
          item1Ref.current.slideInUp(animationDuration);
    
        if (item2Ref.current) 
          item2Ref.current.slideInUp(animationDuration + 200); // Delay the animation
    
        if (item3Ref.current) 
          item3Ref.current.slideInUp(animationDuration + 400); // Delay the animation
    
        if (item4Ref.current) 
          item4Ref.current.slideInUp(animationDuration + 600); // Delay the animation
      };

  return (
    <SafeAreaView>
      <View style={CommonStyles.container}>
        <HeaderComponent setSideDrawerOpen={setSideDrawerOpen} headerText='امور ناشنوایان' />
        { <View style={{ position : 'absolute' , top : 0 , zIndex : 99999 }}>
          <Drawer drawerActive={SideDrawerOpen} setSideDrawerOpen={setSideDrawerOpen} />
          </View>  }
          <View style={DeafPageStyles.deafContentContainer}>
      <Animatable.View
        ref={item1Ref}
        style={DeafPageStyles.deafItemContainer}
        animation={animationStyles.fadeIn}
        duration={1000}
      >
        <TouchableNativeFeedback>
          <Animatable.View style={DeafPageStyles.deafItem}>
            <View style={DeafPageStyles.deafItemTextContainer}>
              <Text style={DeafPageStyles.deafItemText}>سرود ناشنوایان</Text>
            </View>
            <Icon name={'Music'} />
          </Animatable.View>
        </TouchableNativeFeedback>
      </Animatable.View>

      <Animatable.View
        ref={item2Ref}
        style={DeafPageStyles.deafItemContainer}
        animation={animationStyles.fadeIn}
        duration={1000}
      >
        <TouchableNativeFeedback>
          <Animatable.View style={DeafPageStyles.deafItem}>
            <View style={DeafPageStyles.deafItemTextContainer}>
              <Text style={DeafPageStyles.deafItemText}>مکالمه</Text>
            </View>
            <Icon name={'messages'} />
          </Animatable.View>
        </TouchableNativeFeedback>
      </Animatable.View>

      <Animatable.View
        ref={item3Ref}
        style={DeafPageStyles.deafItemContainer}
        animation={animationStyles.fadeIn}
        duration={1000}
      >
        <TouchableNativeFeedback>
          <Animatable.View style={DeafPageStyles.deafItem}>
            <View style={DeafPageStyles.deafItemTextContainer}>
              <Text style={DeafPageStyles.deafItemText}>زبان اشاره ایرانی</Text>
            </View>
            <Icon name={'signLang'} />
          </Animatable.View>
        </TouchableNativeFeedback>
      </Animatable.View>

      <Animatable.View
        ref={item4Ref}
        style={DeafPageStyles.deafItemContainer}
        animation={animationStyles.fadeIn}
        duration={1000}
      >
        <TouchableNativeFeedback>
          <Animatable.View style={DeafPageStyles.deafItem}>
            <View style={DeafPageStyles.deafItemTextContainer}>
              <Text style={DeafPageStyles.deafItemText}>شخصیت ها</Text>
            </View>
            <Icon name={'characters'} />
          </Animatable.View>
        </TouchableNativeFeedback>
      </Animatable.View>
    </View>
      <BottomTabBar currentTab={'deaf'} />
      </View>
     
     
    </SafeAreaView>
    
  );
}
export const DeafPageStyles = StyleSheet.create({
    deafContentContainer : {
        rowGap : 7 ,
        marginTop : 30,
        alignItems : 'center'
    } ,
    deafItemContainer : {
        padding : 1.5,
        borderColor : '#53535349',
        borderWidth : 0.7,
        borderTopRightRadius : 30 ,
        borderBottomLeftRadius : 30,
        width : '85%',
        overflow : 'hidden'
    },
    deafItem : {
        backgroundColor : '#d4e6ff' ,
        flexDirection : 'row-reverse',
        justifyContent : 'center',
        alignItems : 'center',
        borderColor : '#53535349',
        borderWidth : 0.7,
        borderTopRightRadius : 30 ,
        borderBottomLeftRadius : 30,
        gap : 30,
        // padding : '14px 94px',
        width : '100%',
        height : 67
    },
    deafItemTextContainer : {
        width : '60%'
    },
    deafItemText : {
        fontSize : 20 ,
        color : '#535353'
    }
})