import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import StoryItem from '../components/storyItem';
import { Camera, Send } from 'lucide-react-native';
import PostItem from '../components/postItem';

const postsData = [
  {
    id: '1',
    username: 'Jehu Casimiro',
    location: 'Tokyo, Japan',
    caption: 'This is a sample post caption, just like on Instagram!',
  },
  {
    id: '2',
    username: 'Jehu Casimiro',
    location: 'Tokyo, Japan',
    caption: 'Another sample post caption!',
  },
  {
    id: '3',
    username: 'Jehu Casimiro',
    location: 'Tokyo, Japan',
    caption: 'Yet another post caption!',
  },
];

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
        <FlatList
          data={postsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PostItem post={item} />}
          scrollEnabled={false}
        />
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
});
