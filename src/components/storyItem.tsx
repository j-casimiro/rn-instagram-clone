import { View, Image, StyleSheet, Text } from 'react-native';
import { useState } from 'react';

export default function StoryItem({ name }: { name: string }) {
  const uri = `https://api.dicebear.com/7.x/adventurer/png?seed=${encodeURIComponent(
    name
  )}&backgroundColor=transparent`;

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
          source={{
            uri: uri,
          }}
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
    overflow: 'hidden',
  },
});
