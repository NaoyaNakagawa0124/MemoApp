import { View, Text, StyleSheet } from 'react-native';

import Header from '../../components/header'

import MemoListItem from '../../components/MemoListItem'

import CircluButton from '../../components/CircluButton';

const List =() => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <MemoListItem />
            </View>
            <View>
                <MemoListItem />
            </View>
            <View>
                <MemoListItem />
            </View>
            <View>
            </View>
            <CircluButton>+</CircluButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#FFFFFF',
    },
})

export default List

