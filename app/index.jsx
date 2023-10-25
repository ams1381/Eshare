import { StyleSheet, Text, ImageBackground , View, SafeAreaView, TextInput, Button, TouchableOpacity, ActivityIndicator } from "react-native";
import { Link } from 'expo-router'
import HeaderComponent from "../components/common/Header";
import { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Drawer } from "../components/common/Drawer";
import { BottomTabBar } from "../components/common/Tabbar";
import { CommonStyles } from "../styles/CommonStyles";
import Persian from 'persianjs';
import { Icon } from "../components/common/Icon";
import axios from 'axios';
import Toast from 'react-native-toast-message';
import { LoginForm } from "../styles/Login/loginStyles";
import { axiosInstance } from "../utils/axios";
import { UserInfoForm } from "../components/auth/UserInfoForm";

const ToastMessage = (Toast , message , messageStatus) => {
  Toast.show({
    type: messageStatus, 
    position: 'top',
    text1: message,
  });
} 
export default function Page() {
  const [ LoginState , setLoginState ] = useState('PhoneNumber');
  const [ SideDrawerOpen , setSideDrawerOpen ] = useState(false);
  const [ phoneNumber , setPhoneNumber ] = useState(null);
  const [ otpSMS , setOTP ] = useState(null);
  const [ ConfirmButtonLoading , setConfirmButtonLoading ] = useState(false);
  const [ isLoggedIn , setIsLoggedIn ] = useState(false);
  const [ MeData , setMeData ] = useState(null);
  useEffect(() => {
    const Authentication = async () => {
      try 
      {
       let { data } = await axiosInstance.get('https://api.eshareh-app.ir/kernel-api/users/me/');
       setMeData(data)
       setLoginState('loggedIn');
      }
      catch(err)
      {
        if(err.response && err.response.status == 401)
          setLoginState('PhoneNumber')
      }
    }
    Authentication();
    // setLoginState('PhoneNumber')
  },[isLoggedIn])
  const ConfirmPhoneNumber = async () => {
 
    if(!phoneNumber || !phoneNumber.length)
    {
      ToastMessage(Toast,'لطفا شماره تلفن خود را وارد کنید','error')
      return;
    }
    setConfirmButtonLoading(true) 
    try 
    {
      await axiosInstance.post('https://api.eshareh-app.ir/auth/sign-in/', {
        phone_number : Persian(phoneNumber).englishNumber().toString()
      })
    ToastMessage(Toast,'پیامک با موفقیت ارسال شد','success')
    setLoginState('OTP')
    setConfirmButtonLoading(false) 
    }
    catch(err)
    {
      setConfirmButtonLoading(false) 
      if(!err.response)
      {
        ToastMessage(Toast,'خطا در شبکه','error')
        return
      }
        
      if(err.response.status == 400)
        ToastMessage(Toast,'لطفا شماره تلفن را به درستی وارد کنید','error')
      else
        ToastMessage(Toast,'مشکل سمت سرور','error')
    }
  }
  const ConfirmOTP = async () => {
    
    if(!otpSMS || !otpSMS.length)
    {
      ToastMessage(Toast,'لطفا کد ارسال شده را وارد کنید','error')
      return;
    }
    setConfirmButtonLoading(true) 
    try 
    {
     let { data } = await axios.post('https://api.eshareh-app.ir/auth/auth/',{
      phone_number : Persian(phoneNumber).toEnglishNumber().toString(),
      code : Persian(otpSMS).toEnglishNumber().toString()
    })
    setConfirmButtonLoading(false) 
    axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + data.access;
    setIsLoggedIn(true)
    }
    catch(err)
    {
      if(!err.response)
      {
        ToastMessage(Toast,'خطا در شبکه','error')
        return
      }
      setConfirmButtonLoading(false) 
      if(err.response.status == 400)
        ToastMessage(Toast,err.response.errors[0].message,'error')
        // ToastMessage(Toast,'لطفا شماره تلفن را به درستی وارد کنید','error')
      else
        ToastMessage(Toast,'مشکل سمت سرور','error')
    }
  } 
  return (
    <>
    <SafeAreaView>
      <View style={{
        ...CommonStyles.container ,
        }}>
        <HeaderComponent setSideDrawerOpen={setSideDrawerOpen} headerText='خانه' />
        { <View style={{ position : 'absolute' , top : 0 , zIndex : 99999 }}>
          <Drawer drawerActive={SideDrawerOpen} setSideDrawerOpen={setSideDrawerOpen} />
          </View>  }
          { LoginState == 'loggedIn' ? <UserInfoForm MeData={MeData} /> 
          : <View style={LoginForm.FormContainer}>
            <View style={LoginForm.InputContainer} >
             { LoginState == 'PhoneNumber' ? 
                <TextInput maxLength={12} style={LoginForm.LoginInput} 
                  value={phoneNumber ? Persian(phoneNumber).englishNumber().toString() : ''}
                  onChangeText={setPhoneNumber} placeholder={"شماره موبایل"} /> : <TextInput maxLength={4} style={LoginForm.LoginInput} 
                  value={otpSMS ? Persian(otpSMS).englishNumber().toString() : ''}
                  onChangeText={setOTP} 
                  placeholder={"کد ارسال شده"} />}
              <View style={LoginForm.PhoneIcon}>
                { LoginState == 'PhoneNumber' ? <Icon name={'phoneNumber'} /> : <Icon name={'otpCode'} /> }
              </View>
            </View>
            <TouchableOpacity onPress={LoginState == 'PhoneNumber' ?  ConfirmPhoneNumber : ConfirmOTP}
              style={LoginForm.ConfirmButton}>
                {
                  ConfirmButtonLoading ? <ActivityIndicator color="white" /> : 
                  <Text  style={{ color: 'white', textAlign: 'center' , fontSize : 18 }}>
                    {LoginState == 'PhoneNumber' ? 'ارسال کد تایید' : 'ثبت'}
                    </Text>
                }
            </TouchableOpacity>
          </View>}
      </View>
      <BottomTabBar />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      
    </SafeAreaView>
    </>
    
    
  );
}
