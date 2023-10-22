import { useFonts } from 'expo-font';
import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { DrawerStyles } from '../../styles/Drawer';

const DrawerAnimation = (props) => {
    const translateX = useRef(new Animated.Value(-504)).current; // Initial value for translateX
  
    useEffect(() => {
      if (props.drawerActive) {
        Animated.timing(translateX, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(translateX, {
          toValue: -504,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }
    }, [translateX, props.drawerActive]);
  
    return (
      <Animated.View
        style={{
          ...props.style,
          top : 0,
          height : '100vh' ,
          width : 250 ,
          zIndex : 1111,
          overflow : 'hidden' ,
          position : 'absolute',
          transform: [{ translateX }],
        }}
      >
        {props.children}
      </Animated.View>
    );
  };

export const Drawer = ({ drawerActive , setSideDrawerOpen }) => {
  const [loaded] = useFonts({
    'IRANSANS' : require('../../assets/fonts/GlobalFont.ttf'),
  });

  if (!loaded) {
    return null;
  }
    return  (
    <DrawerAnimation drawerActive={drawerActive}>
      
    <View style={DrawerStyles.DrawerContainer}>
        <View style={DrawerStyles.DrawerHeader} onTouchStart={() => setSideDrawerOpen(false)}>
            <Text style={DrawerStyles.DrawerClose}>
              x بستن
              </Text>
        </View>
        <View>
          <View style={DrawerStyles.DrawerItem}>
            <Text>
                  خرید برنامه
              </Text>
          </View>
          <View style={DrawerStyles.DrawerItem} >
            <Text>
                تماس با ما
            </Text>
          </View>
            <View style={DrawerStyles.DrawerItem}>
              <Text>
                درباره ما
            </Text>
            </View>
            
        </View>
    </View>
    </DrawerAnimation>)
}
