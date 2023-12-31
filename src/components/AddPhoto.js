import { View, Image, StyleSheet, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const AddPhoto = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.imageBox}>
      {image && <Image style={styles.image} source={{ uri: image }}></Image>}
      <Text style={styles.addButton} onPress={pickImage}>
        <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBox: {
    position: 'relative',
    bottom: 60,
    alignSelf: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
  },
  addButton: {
    position: 'absolute',
    right: -12,
    bottom: 14,
  },
});

export default AddPhoto;
