import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import StoryItem from '../components/storyItem';
import {
  Bookmark,
  Camera,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
} from 'lucide-react-native';

const storiesData = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

export default function HomeScreen() {
  const [liked, setLiked] = useState(false);

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.header}>
        <Camera size={28} color="black" />
        <Image
          source={require('../../assets/Instagram_logo.png')}
          style={{ height: 35, width: 100, resizeMode: 'contain' }}
        />
        <Send size={28} color="black" />
      </View>
      <ScrollView>
        <ScrollView
          horizontal
          style={styles.stories}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.storiesRow}>
            {storiesData.map((item) => (
              <StoryItem key={item.id} />
            ))}
          </View>
        </ScrollView>
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image
              style={styles.avatar}
              source={require('../../assets/post.jpg')}
            />
            <View>
              <Text style={{ fontWeight: '600' }}>Jehu Casimiro</Text>
              <Text style={{ fontWeight: '400' }}>Tokyo, Japan</Text>
            </View>
            <View style={styles.postThreeDot}>
              <MoreHorizontal size={24} color="black" />
            </View>
          </View>
          <View style={styles.postImage}>
            <Image
              style={styles.postImageInner}
              source={require('../../assets/post.jpg')}
            />
          </View>
          <View style={styles.postActions}>
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <TouchableOpacity
                onPress={() => setLiked((prev: boolean) => !prev)}
                activeOpacity={0.7}
              >
                <Heart
                  size={28}
                  color={liked ? 'red' : 'black'}
                  fill={liked ? 'red' : 'transparent'}
                />
              </TouchableOpacity>
              <MessageCircle size={28} color="black" />
              <Send size={28} color="black" />
            </View>
            <Bookmark size={28} color="black" />
          </View>
          <View style={styles.postCaption}>
            <Text>
              <Text style={{ fontWeight: '600' }}>jehu.casimiro </Text>
              This is a sample post caption, just like on Instagram!
            </Text>
          </View>
        </View>
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image
              style={styles.avatar}
              source={require('../../assets/post.jpg')}
            />
            <View>
              <Text style={{ fontWeight: '600' }}>Jehu Casimiro</Text>
              <Text style={{ fontWeight: '400' }}>Tokyo, Japan</Text>
            </View>
            <View style={styles.postThreeDot}>
              <MoreHorizontal size={24} color="black" />
            </View>
          </View>
          <View style={styles.postImage}>
            <Image
              style={styles.postImageInner}
              source={require('../../assets/post.jpg')}
            />
          </View>
          <View style={styles.postActions}>
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <TouchableOpacity
                onPress={() => setLiked((prev: boolean) => !prev)}
                activeOpacity={0.7}
              >
                <Heart
                  size={28}
                  color={liked ? 'red' : 'black'}
                  fill={liked ? 'red' : 'transparent'}
                />
              </TouchableOpacity>
              <MessageCircle size={28} color="black" />
              <Send size={28} color="black" />
            </View>
            <Bookmark size={28} color="black" />
          </View>
          <View style={styles.postCaption}>
            <Text>
              <Text style={{ fontWeight: '600' }}>jehu.casimiro </Text>
              This is a sample post caption, just like on Instagram!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stories: {
    height: 100,
    paddingVertical: 8,
  },
  storiesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 4,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#eee',
    marginRight: 8,
  },
  post: {
    flex: 0,
  },
  postHeader: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    marginHorizontal: 12,
  },
  postThreeDot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  postImage: {
    aspectRatio: 1,
    width: '100%',
    overflow: 'hidden',
  },
  postImageInner: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    margin: 10,
  },
  postCaption: {
    height: 70,
    width: '100%',
    marginHorizontal: 12,
  },
});
