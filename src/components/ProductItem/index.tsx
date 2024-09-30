import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Images } from '../../common';

interface ProductItemProps {
    product: {
        id: string;
        title: string;
        price: number;
        category: string;
        image: string;
        rating: string;
    };
    onDelete: (id: string) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onDelete }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product?.image }} style={styles.image} resizeMode="contain" />
            <View style={styles.details}>
                <Text style={styles.name}>{product?.title}</Text>
                <Text style={styles.category}>{product?.category}</Text>
                <Text style={styles.price}>${(+product?.price)?.toFixed(2)}</Text>
                <Text style={styles.rating}>⭐ {product?.rating?.rate}</Text>
                <TouchableOpacity onPress={() => onDelete(product?.id)}>
                    <Image source={Images.TRASH} style={styles.deleteIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        marginVertical: 8,
        borderRadius: 12,
        backgroundColor: Colors.WHITE,
        shadowColor: Colors.BLACK,
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2, // For Android shadow
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 12,
        marginRight: 16,
    },
    details: {
        flex: 1,
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.BLACK,
    },
    category: {
        fontSize: 14,
        color: Colors.GRAY,
        marginVertical: 4,
    },
    price: {
        fontSize: 16,
        color: Colors.GREEN,
        fontWeight: '600',
    },
    rating: {
        fontSize: 14,
        color: Colors.ORANGE,
    },
    deleteIcon: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        height: 20,
        width: 20,
        tintColor: Colors.RED
    }
});

export default ProductItem;
