import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    image: string;
}

interface ViewProductProps {
    route: {
        params: {
            product: Product;
        };
    };
}

const ViewProduct: React.FC<ViewProductProps> = ({ route }) => {
    const { product } = route.params;
    const navigation = useNavigation();

    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <SafeAreaView />
                <Header text={"Product"} onPress={() => navigation.goBack()} />
                <Image resizeMode='contain' source={{ uri: product.image }} style={styles.productImage} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>${(+product.price).toFixed(2)}</Text>
                    <Text style={styles.rating}>Rating: {product?.rating?.rate} ⭐</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
                <CustomButton text='Add to cart' onPress={() => navigation.goBack()} />
            </ScrollView>
        </>
    )
}

export default ViewProduct
