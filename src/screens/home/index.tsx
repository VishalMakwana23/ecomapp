import { ActivityIndicator, FlatList, Image, SafeAreaView, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles'
import ProductItem from '../../components/ProductItem';
import CategoryItem from '../../components/CategoryItem';
import { getProducts } from '../../redux/actions/productAction';
import { Images } from '../../common';
import { deleteProduct } from '../../redux/reducers/productsSlice';
import { categoryData } from '../../services/utils';


const Home: React.FC = (props) => {

    const dispatch = useDispatch();
    const productsData = useSelector(state => state.products.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const sortedProducts = useMemo(() => {
        return [...productsData].sort((a, b) => {
            return b.id - a.id;
        });
    }, [productsData]);

    const categoryList = useMemo(() => {
        return (
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={categoryData}
                renderItem={({ item }) => <CategoryItem category={item} />}
                keyExtractor={(item) => item.id}
            />
        );
    }, []);


    const handleDelete = useCallback((id: string) => {
        const index = productsData.findIndex(item => item.id === id);
        if (index !== -1) {
            dispatch(deleteProduct(index));
        }
    }, [dispatch, productsData]);



    return (
        <View style={styles.container}>
            <SafeAreaView />
            <TouchableOpacity
                onPress={() => { props.navigation.navigate("AddProduct", { length: productsData.length }) }}
                style={styles.addBtn}
            >
                <Image source={Images.PLUS} style={styles.plusIcon} />
            </TouchableOpacity>
            <FlatList
                data={sortedProducts}
                ListHeaderComponent={categoryList} // Use memoized category list
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate("ViewProduct", { product: item })} style={{ paddingHorizontal: 10, marginBottom: productsData.length - 1 === index ? 80 : 0 }}>
                        <ProductItem
                            product={item}
                            onDelete={handleDelete} // Use memoized delete handler
                        />
                    </TouchableOpacity>
                )}
                ListEmptyComponent={() => <ActivityIndicator size={'large'} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
export default Home
