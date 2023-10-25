import { useReducer, useState } from "react"
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from "react-native"
import { axiosInstance } from "../../utils/axios"
import { ProfileInfoStyles } from "../../styles/Login/Profile"
import Toast from "react-native-toast-message"

const ProfileReducer = (State,ACTION) => {
    switch(ACTION.ACTION)
    {
        case 'name_changed':
            return {
                ...State,
                'first_name' : ACTION.newName
            }
        case 'last_name_changed':
            return {
                ...State, 
                'last_name' : ACTION.newLastName
            }
    }
    return State
}
const ToastMessage = (Toast , message , messageStatus) => {
    Toast.show({
      type: messageStatus, 
      position: 'top',
      text1: message,
    });
  } 
export const UserInfoForm = ({ MeData }) => {
    const [ initialData , dispatcher ] = useReducer(ProfileReducer,MeData);
    const [ saveChangesLoading , setSaveChangesLoading ] = useState(false);
    const ProfileSaveChanges = async () => {
        try {
            setSaveChangesLoading(true)
            await axiosInstance.put('https://api.eshareh-app.ir/kernel-api/users/me/',initialData);
            setSaveChangesLoading(false)
        }
        catch(err) {
            setSaveChangesLoading(false);
            ToastMessage(Toast ,'خطا در ثبت تغییرات', 'error')
        }
        
    }

    return (<>
        <View style={ProfileInfoStyles.Container}>
                
                <View style={ProfileInfoStyles.InnerContainer}>
                    <View style={ProfileInfoStyles.ProfileItem}>
                        <View style={ProfileInfoStyles.ProfileItemTextContainer}>
                            <Text>نام</Text>
                        </View>
                        <View style={ProfileInfoStyles.ProfileItemInputContainer}>
                            <View style={ProfileInfoStyles.ProfileItemInputInnerContainer}>
                                <TextInput value={initialData.first_name} 
                                onChangeText={Name => dispatcher({ ACTION : 'name_changed' , newName : Name })}
                                    style={ProfileInfoStyles.ProfileItemInput} placeholder="نام کاربر" />
                            </View>
                        </View>
                    </View>
                    <View style={ProfileInfoStyles.ProfileItem}>
                        <View style={ProfileInfoStyles.ProfileItemTextContainer}>
                            <Text>نام خانوادگی</Text>
                        </View>
                        <View style={ProfileInfoStyles.ProfileItemInputContainer}>
                            <View style={ProfileInfoStyles.ProfileItemInputInnerContainer}>
                                <TextInput value={initialData.last_name}
                                    onChangeText={LastName => dispatcher({ ACTION : 'last_name_changed' , newName : LastName })}
                                    style={ProfileInfoStyles.ProfileItemInput} placeholder="نام خانوادگی کاربر" />
                            </View>
                        </View>
                    </View>
                    <View style={ProfileInfoStyles.ProfileItem}>
                        <View style={ProfileInfoStyles.ProfileItemTextContainer}>
                            <Text>شماره تلفن</Text>
                        </View>
                        <View style={ProfileInfoStyles.ProfileItemInputContainer}>
                            <View style={ProfileInfoStyles.ProfileItemInputInnerContainer}>
                                <TextInput defaultValue="true" value={initialData.username} 
                                style={ProfileInfoStyles.ProfileItemInput} placeholder="شماره تلفن کاربر" />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={ProfileInfoStyles.ProfileSaveButtonContainer}>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(
                        '#d4e6ff',false
                        )}>
                        <View onTouchEnd={() => ProfileSaveChanges()} style={ProfileInfoStyles.SaveButtonInnerContainer}>
                            { saveChangesLoading ? <ActivityIndicator color="#d4e6ff" /> : <Text>
                            ذخیره
                            </Text>}
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
        
    )
}
