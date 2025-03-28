import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { images } from '@/constants/images';
import { MovieCard, SearchBar } from '@/components';
import { fetchMovies, updateSearchCount, useFetch } from '@/services';
import { icons } from '@/constants/icons';

type Props = {};

const Search: React.FC<Props> = ({}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery && movies && movies.length > 0 && movies[0]) {
      updateSearchCount(searchQuery, movies[0]);
    }
  }, [movies]);

  return (
    <View className={'flex-1 bg-primary'}>
      <Image
        source={images.bg}
        className={'flex-1 absolute w-full z-0'}
        resizeMode={'cover'}
      />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className={'px-5'}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'center',
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View
              className={'w-full flex-row justify-center mt-20 items-center'}
            >
              <Image source={icons.logo} className={'w-12 h-10'} />
            </View>

            <View className={'my-5'}>
              <SearchBar
                placeholder={'Search movies...'}
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
              />
            </View>

            {moviesLoading && (
              <ActivityIndicator
                size={'large'}
                color={'#0000ff'}
                className={'my-3'}
              />
            )}

            {moviesError && (
              <Text className={'text-red-500 px-5 my-3'}>
                Error: {moviesError.message}
              </Text>
            )}

            {!moviesLoading &&
              !moviesError &&
              searchQuery.trim() &&
              movies?.length! > 0 && (
                <Text className="text-xl text-white font-bold">
                  Search Results for{' '}
                  <Text className="text-accent">{searchQuery}</Text>
                </Text>
              )}
          </>
        }
        ListEmptyComponent={
          !moviesLoading && !moviesError ? (
            <View className="mt-10 px-5 flex-1">
              <Text className="text-center text-white w-full">
                {searchQuery.trim()
                  ? 'No movies found'
                  : 'Start typing to search for movies'}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
