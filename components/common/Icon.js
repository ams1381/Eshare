import { Image, StyleSheet } from "react-native";
import React from "react"; // Make sure to import React

export const Icon = ({ name }) => {
    const IconStyle = StyleSheet.create({
      Icon: {
        width: 25,
        height: 25,
        transform : name == 'close' ? 'rotate(45deg)' : 'none'
      },
    });
    const iconImages = {
        HomeIcon: require('../../assets/icons/HomeIcon.png'),
        MenuToggle : require('../../assets/icons/MenuToggle.png'),
        Search : require('../../assets/icons/Search.png'),
        Favorites : require('../../assets/icons/Favorites.png'),
        ExamIcon : require('../../assets/icons/Exam.png'),
        Alphabets : require('../../assets/icons/Alphabets.png'),
        Hearings : require('../../assets/icons/Hearings.png'),
        Puzzle : require('../../assets/icons/Puzzle.png'),
        images : require('../../assets/icons/images.png'),
        Video : require('../../assets/icons/Video.png'),
        phoneNumber : require('../../assets/icons/phoneNumber.png'),
        otpCode : require('../../assets/icons/otpCode.png'),
        Music : require('../../assets/icons/Music.png'),
        messages : require('../../assets/icons/messages.png'),
        signLang : require('../../assets/icons/signLang.png'),
        characters : require('../../assets/icons/characters.png'),
        close : require('../../assets/icons/close.png'),
      };
  return (
    <Image
      resizeMode="contain"
      source={iconImages[name]}
      style={IconStyle.Icon}
    />
  );
};

