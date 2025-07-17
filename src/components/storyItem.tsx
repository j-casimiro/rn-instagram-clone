import { View, Image, StyleSheet } from 'react-native';

export default function StoryItem() {
  return (
    <View
      style={[
        styles.storyGradient,
        {
          backgroundColor: '#CA1D7E',
          borderWidth: 3,
          borderColor: '#E35157',
        },
      ]}
    >
      <View
        style={{
          backgroundColor: '#F2703F',
          borderRadius: 75 / 2,
          padding: 0,
        }}
      >
        <Image
          source={require('../../assets/favicon.png')}
          style={styles.storyImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  storyGradient: {
    height: 82,
    width: 82,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 41,
    marginHorizontal: 6,
  },
  storyImage: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    alignSelf: 'center',
    borderColor: '#fff',
    borderWidth: 3,
    backgroundColor: '#fff',
  },
});
