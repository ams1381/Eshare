import { Alert, SafeAreaView, StyleSheet, Text, TouchableNativeFeedback, View } from "react-native"
import { useEffect, useState } from "react";
import { BottomTabBar } from "../../components/common/Tabbar";
import HeaderComponent from "../../components/common/Header";
import { Drawer } from "../../components/common/Drawer";
import { CommonStyles } from "../../styles/CommonStyles";
import { Skeleton } from '@rneui/themed';
import { Icon } from "../../components/common/Icon";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";

export default ExamPage = () => {
  const data = [
    { key: '1', label: 'الفبا' , icon : 'Alphabets' },
    { key: '2', label: 'عدد ریاضی' , icon : 'math' },
    { key: '3', label: 'زمان' , icon : 'clock' },
    { key: '4', label: 'انسان' , icon : 'human' },
    { key: '5', label: 'جغرافیا' , icon : 'earth' },
    { key: '6', label: 'حیوان' , icon : 'animals' },
    { key: '7', label: 'اشاره های مهرورزان' , icon : 'handsshadow' },
  ];
    const [ SideDrawerOpen , setSideDrawerOpen ] = useState(false);
  return (
    <SafeAreaView>
      <View style={CommonStyles.container}>
        <HeaderComponent setSideDrawerOpen={setSideDrawerOpen} headerText='کلمه' />
        { <View style={{ position : 'absolute' , top : 0 , zIndex : 99999 }}>
          <Drawer drawerActive={SideDrawerOpen} setSideDrawerOpen={setSideDrawerOpen} />
          </View>  }
          <View style={WordPageStyles.WordPageContainer}>
            <View style={WordPageStyles.WordPageInnerContainer}>
            <ScrollView contentContainerStyle={{
              justifyContent : 'center',
              alignItems : 'center',
              gap : 20,
              paddingTop : 20,
            }} style={WordPageStyles.scrollContainer}>
              <FlatList
                data={data}
                numColumns={2} // Set the number of columns to 2
                renderItem={({ item }) => (
                  <View onTouchEnd={() => Alert.alert('این گزینه هنوز فعال نشده','',[{
                    text : 'حله'
                  }])}
                   style={WordPageStyles.WordItemContainer}>
                    <TouchableNativeFeedback>
                      <View style={WordPageStyles.WordItem}>
                        <Text>{item.label}</Text>
                        <Icon name={item.icon} />
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                )}
                keyExtractor={item => item.key}
              />
             </ScrollView>
            </View>
            
          </View>
         <BottomTabBar currentTab={'word'} />
      </View>
      
    </SafeAreaView>
    
  );
}
const WordPageStyles = StyleSheet.create({
  WordPageContainer : {
    marginTop : 20,
    width : '100%',
    justifyContent : 'center',
    alignItems : 'center'
  },
  WordPageInnerContainer : {
    width : '90%',
    justifyContent : 'center',
    flexDirection : 'row',
    flexWrap : 'wrap',
    gap : 20,
  },
  scrollContainer : {
    // flex: 1,
    maxHeight : 550,
    overflow : 'scroll'
  },
  WordItemContainer : {
    width : 130,
    height : 130,
    backgroundColor : '#d4e6ff',
    borderRadius : 30 ,
    overflow : 'hidden',
    alignItems : 'center',
    justifyContent : 'center' ,
    marginLeft : 10,
    marginRight : 10,
    marginTop : 15,
  },
  WordItem : {
    backgroundColor : '#d4e6ff',
    borderColor : '#fff',
    borderWidth : 2.5,
    borderRadius : 30 ,
    width : '95%',
    height : '95%',
    alignItems : 'center',
    justifyContent : 'space-around'
  },
  WordItemText : {

  }
})