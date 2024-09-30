import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../common'

interface CategoryItemProps {
    category: {
        id: string;
        name: string;
    };
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.name}>{category.name}</Text>
        </TouchableOpacity>
    )
}

export default CategoryItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: Colors.LIGHT_GRAY
    },
    name: {
        color: Colors.BLACK,
        fontWeight: '500'
    }
})