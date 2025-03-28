import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';
import { images } from '@/constants/images';

type Props = {
  movie: TrendingMovie;
  index: number;
};

const TrendingCard: React.FC<Props> = ({ movie, index }) => {
  return (
    <Link href={`/movies/${movie.movie_id}`} asChild>
      <TouchableOpacity className={'w-32 relative pl-5'}>
        <Image
          source={{ uri: movie.poster_url }}
          className={'w-32 h-48 rounded-lg'}
          resizeMode={'cover'}
        />

        <View className={'absolute bottom-9 -left-3.5 px-2 py-1 rounded-full'}>
          <MaskedView
            maskElement={
              <Text className={'font-bold text-white text-6xl'}>
                {index + 1}
              </Text>
            }
          >
            <Image
              source={images.rankingGradient}
              className={'size-14'}
              resizeMode={'cover'}
            />
          </MaskedView>
        </View>

        <Text
          className={'text-sm font-bold mt-2 text-light-200'}
          numberOfLines={2}
        ></Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
