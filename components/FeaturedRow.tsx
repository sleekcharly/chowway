import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';

type Props = {
  id: string;
  title: string;
  description: string;
};

type RestaurantProps = {
  _id: number;
  image: {};
  address: string;
  name: string;
  dishes: string[];
  rating: number;
  short_description: string;
  genre: string;
  long: number;
  lat: number;
};

const FeaturedRow = ({ id, title, description }: Props) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == 'featured' && _id == $id] {
        ...,
        restaurants[]-> {
            ...,
            dishes[]->,
            type-> {
                name
            }
        }
      }[0]
    `,
        { id },
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CC88" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants.map((restaurant: RestaurantProps) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.genre}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
        {/* RestaurantCards... */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
