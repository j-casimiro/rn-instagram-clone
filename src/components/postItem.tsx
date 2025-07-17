import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
  MoreHorizontal,
  MessageCircle,
  Heart,
  Send,
  Bookmark,
} from 'lucide-react-native';

type Post = {
  username: string;
  location: string;
  caption: string;
};

export default function PostItem({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Image
          style={styles.avatar}
          source={require('../../assets/post.jpg')}
        />
        <View>
          <Text style={{ fontWeight: '600' }}>{post.username}</Text>
          <Text style={{ fontWeight: '400' }}>{post.location}</Text>
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
          <Text style={{ fontWeight: '600' }}>
            {post.username.toLowerCase().replace(/ /g, '.')}{' '}
          </Text>
          {post.caption}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
