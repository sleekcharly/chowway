import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

type Props = {
  title: string;
  imgUrl: string;
};

const CategoryCard = ({ title, imgUrl }: Props) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
