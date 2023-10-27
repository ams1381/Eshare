import { Image, StyleSheet, Text, ImageBackground , View, Button, Alert, StatusBar, Easing } from "react-native"
import { Icon } from "./Icon";
import { Link, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { HeaderStyles } from "../../styles/HeaderStyle";
import { TextInput } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useEffect, useState } from "react";
import { Animated } from "react-native";

const HeaderComponent = ({ setSideDrawerOpen , headerText }) => {
    const router = useRouter();
    const [inputWidth] = useState(new Animated.Value(0));
    const [ searchOpen , setSearchOpen ] = useState(false);
    useEffect(() => {
        if(searchOpen) {
            Animated.timing(inputWidth, {
                toValue: 0,
                duration: 600, 
                useNativeDriver: false,
              }).start();
        }
        else {
            Animated.timing(inputWidth, {
                toValue: 1,
                duration: 600, 
                useNativeDriver: false,
              }).start();
        }
      },[searchOpen])
    const [loaded] = useFonts({
        'IRANSANS' : require('../../assets/fonts/GlobalFont.ttf'),
      });
      if (!loaded) {
        return null;
      }

 
    return <View style={HeaderStyles.container} >
        <StatusBar
        animated={true}
        backgroundColor="#3B83C4"/>
        <Image
          resizeMode="cover" style={HeaderStyles.HeaderBg}
         source={require('../../assets/HeaderBg.png')} />
         <View style={HeaderStyles.HeaderTopPart}>
            <View onTouchStart={() => setSideDrawerOpen(true)}>
                 <Icon  name={'MenuToggle'} />
            </View>
            <View style={HeaderStyles.HeaderIconPack}>
                <View style={{ 
                    alignItems : "flex-end" , justifyContent : 'center' ,
                    flexDirection : 'row'
                     }}>
                   { searchOpen && <Animated.View style={{
                        width: inputWidth.interpolate({
                            inputRange: [0, 1],
                            outputRange: [ 100 , 10 ],
                        }),
                        marginRight : 10,
                   }}>
                        <TextInput style={{
                            backgroundColor : 'white' 
                            , width : 100 , 
                            borderRadius : 15 ,
                            padding : 5,
                            height : 25 ,
                            alignItems : 'center' ,
                            justifyContent : 'center',
                            lineHeight : 25 ,
                            textAlign : "right" ,
                            marginRight : 10
                            }} placeholder='جستجو' />
                    </Animated.View>}
                    <View onTouchEnd={() => setSearchOpen(!searchOpen)}>
                        <Icon name={searchOpen ? 'close' : 'Search'} />    
                    </View>
                </View>
                <View onTouchEnd={() => router.push('/favorites')}>
                    <Icon name={'Favorites'} />
                </View>
                <View onTouchEnd={() => router.push('/')}>
                    <Icon name={'HomeIcon'} />
                </View>
            </View>
            
         </View>
         <View>
            <Text style={HeaderStyles.HeaderTitle}>
            {headerText} 
        </Text>
         </View>
        
    </View>
}
export default HeaderComponent;

