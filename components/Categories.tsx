import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsVerticalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://mrtsbakery.com.au/cdn/shop/articles/unnamed_388f2e43-0619-438d-9212-2539bf2c70d5_800x.jpg?v=1578206798"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://mrtsbakery.com.au/cdn/shop/articles/unnamed_388f2e43-0619-438d-9212-2539bf2c70d5_800x.jpg?v=1578206798"
        title="Testing 2"
      />
      <CategoryCard
        imgUrl="https://mrtsbakery.com.au/cdn/shop/articles/unnamed_388f2e43-0619-438d-9212-2539bf2c70d5_800x.jpg?v=1578206798"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://mrtsbakery.com.au/cdn/shop/articles/unnamed_388f2e43-0619-438d-9212-2539bf2c70d5_800x.jpg?v=1578206798"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://mrtsbakery.com.au/cdn/shop/articles/unnamed_388f2e43-0619-438d-9212-2539bf2c70d5_800x.jpg?v=1578206798"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://mrtsbakery.com.au/cdn/shop/articles/unnamed_388f2e43-0619-438d-9212-2539bf2c70d5_800x.jpg?v=1578206798"
        title="Testing 3"
      />
    </ScrollView>
  );
};

export default Categories;
