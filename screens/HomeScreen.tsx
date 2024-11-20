import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles';
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
  const navigation = useNavigation();

  //   define state for featured categories
  const [featuredCategories, setFeaturedCategories] = useState([]);

  // for when the UI loads
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // for when the functional component actually loads
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured"] {
        ...,
        restaurants[] -> {
            ...,
            dishes[] ->
        }
    }`,
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="bg-white pt-5">
      {/* Header */}

      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image
          source={{
            uri: 'https://www.shutterstock.com/image-vector/food-delivery-man-riding-red-600nw-1327144634.jpg',
          }}
          className="w-7 h-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CC85" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CC85" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
        <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon color="#00CC85" />
      </View>

      {/* body */}
      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        {featuredCategories?.map(
          (category: {
            _id: string;
            name: string;
            short_description: string;
          }) => (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          ),
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
