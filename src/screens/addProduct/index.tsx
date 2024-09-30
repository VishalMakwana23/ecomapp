import { Alert, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/reducers/productsSlice'
import { Constants } from '../../common'
import Header from '../../components/Header'

const AddProduct: React.FC = (props) => {

    const { length } = props.route.params

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = () => {
        const payload = {
            id: length + 1,
            title: title,
            price: price,
            category: category,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rating: {
                rate: rating,
                count: 0
            }
        }
        if (title && category && price && rating) {
            dispatch(addProduct(payload));
            Alert.alert(Constants.APPNAME, "Product Added Successfully");
            props.navigation.goBack();
        }
        else {
            Alert.alert(Constants.APPNAME, "Please fill all the details");
        }
    };


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <SafeAreaView />
            <Header text='Add New Product' onPress={() => props.navigation.goBack()} />
            <TextInput
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
                style={styles.input}
            />
            <TextInput
                placeholder="Category"
                value={category}
                onChangeText={setCategory}
                style={styles.input}
            />
            <TextInput
                placeholder="Price"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
                style={styles.input}
            />
            <TextInput
                placeholder="Rating (1-5)"
                value={rating}
                onChangeText={setRating}
                keyboardType="numeric"
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Add Product</Text>
            </TouchableOpacity>
        </ScrollView>

    )
}

export default AddProduct

