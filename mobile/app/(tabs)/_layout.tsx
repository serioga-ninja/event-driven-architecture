import { Tabs } from 'expo-router';
import type { ImageSourcePropType } from 'react-native';
import { View } from 'react-native';
import { Image, ImageBackground, Text } from 'react-native';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';
import type { FC } from 'react';

type TabIconProps = {
  isFocused: boolean;
  icon: ImageSourcePropType;
  title: string;
};

const TabIcon: FC<TabIconProps> = ({ isFocused, icon, title }) => {
  if (isFocused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0d23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 0,
          borderColor: '#0f0d23',
        },
      }}
    >
      <Tabs.Screen
        name={'index'}
        options={{
          headerShown: false,
          title: 'Home',

          tabBarIcon: ({ focused }) => (
            <TabIcon isFocused={focused} icon={icons.home} title={'Home'} />
          ),
        }}
      />
      <Tabs.Screen
        name={'search'}
        options={{
          headerShown: false,
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <TabIcon isFocused={focused} icon={icons.search} title={'Search'} />
          ),
        }}
      />
      <Tabs.Screen
        name={'saved'}
        options={{
          headerShown: false,
          title: 'Saved',
          tabBarIcon: ({ focused }) => (
            <TabIcon isFocused={focused} icon={icons.save} title={'Saved'} />
          ),
        }}
      />
      <Tabs.Screen
        name={'profile'}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              isFocused={focused}
              icon={icons.person}
              title={'Profile'}
            />
          ),
        }}
      />
    </Tabs>
  );
}
