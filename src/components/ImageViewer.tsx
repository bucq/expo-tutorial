import { View, ImageSourcePropType, StyleSheet,Text } from 'react-native';
import { Image, ImageBackground } from 'expo-image';
import { PropsWithChildren } from 'react';


type Props = PropsWithChildren<{
  imgSource: ImageSourcePropType;
  selectedImage?: string;
}>;

export default function ImageViewer({ imgSource, selectedImage, children}: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return (<ImageBackground source={imageSource} style={styles.image}>
    {children}
  </ImageBackground>);
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
