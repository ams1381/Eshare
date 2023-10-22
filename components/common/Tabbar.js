import { StyleSheet, Text, TouchableNativeFeedback, TouchableWithoutFeedback, View } from "react-native"
import { Icon } from "./Icon"
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { TabStyles } from "../../styles/Tabbar";

export const BottomTabBar = ({ currentTab }) => {
    const router = useRouter();
    const [loaded] = useFonts({
        'IRANSANS' : require('../../assets/fonts/GlobalFont.ttf'),
      });
    if(!loaded)
       return

    return <View style={TabStyles.TabsContainer}>
        <View style={TabStyles.TabInnerContainer}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(
              '#ddebff',false
            )}>
                <View onTouchEndCapture={() => setTimeout(() => router.push('/word'),100)} style={{
                    ...TabStyles.TabItem ,
                    borderTopLeftRadius : 40,
                    borderBottomLeftRadius : 40,
                    backgroundColor : currentTab == 'word' ? '#d4e6ff' : 'none'
                    }}>
                <Text style={{ color : '#355c7d' , fontSize : 12 }}>
                    کلمه
                </Text>
                <Icon name={'Alphabets'} /> 
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(
              '#ddebff',false
            )}>
                <View onTouchEndCapture={() => setTimeout(() => router.push('/deafstuff'),100) } style={{
                    ...TabStyles.TabItem ,
                    backgroundColor : currentTab == 'deaf' ? '#d4e6ff' : 'none' ,
                    }}>
                    <Text style={{ color : '#355c7d' , fontSize : 12 }}>
                    امور ناشنوایان
                    </Text>
                <Icon name={'Hearings'} /> 
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(
              '#ddebff',false
            )}>
                <View  onTouchEndCapture={() => setTimeout(() => router.push('/sentence'),100) } style={{
                    ...TabStyles.TabItem , 
                    backgroundColor : currentTab == 'sentence' ? '#d4e6ff' : 'none' ,
                    }}>
                        <Text  style={{ color : '#355c7d' , fontSize : 12 }}>
                            جمله سازی
                        </Text>
                        <Icon name={'Puzzle'} />
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(
              '#ddebff',false
            )}>
                <View onTouchEndCapture={() => setTimeout(() => router.push('/exam'),100)} style={{
                    ...TabStyles.TabItem , 
                    backgroundColor : currentTab == 'exam' ? '#d4e6ff' : 'none' ,
                    borderTopEndRadius : 40 ,
                    borderBottomEndRadius : 40
                    }}>
                        <Text style={{ color : '#355c7d' , fontSize : 12 }}>
                            آزمون
                        </Text>
                        <Icon name={'ExamIcon'} />
                </View>
        </TouchableNativeFeedback>
        </View>
    </View>
}
