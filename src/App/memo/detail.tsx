import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Header  from '../../components/header';
import CircluButton from '../../components/CircluButton';
import { memo } from 'react';

const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style ={styles.memoTitle}>買い物リスト</Text>
                <Text style ={styles.memoDate}>2025/03/02</Text>
            </View>
            <ScrollView>
            <View style={styles.memoBody}>
                <Text style={styles.memoBodyText}>メモの本文です。</Text>
            </View>
            </ScrollView>
            <CircluButton style={{top: 160, bottom: 'auto'}}> + </CircluButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#FFFFFF',
    },
    memoHeader : {
        backgroundColor : '#467FD3',
        height : 96,
        justifyContent : 'center',
        paddingVertical : 24,
        paddingHorizontal : 19,
    },
    memoTitle : {
        color : '#FFFFFF',
        fontSize : 20,
        lineHeight : 32,
        fontWeight : 'bold',
    },
    memoDate : {
        color : '#FFFFFF',
        fontSize : 12,
        lineHeight : 16
    },
    memoBody : {
        backgroundColor : '#FFFFFF',
        paddingVertical : 32,
        paddingHorizontal : 27,
    },
    memoBodyText : {
        fontSize : 16,
        lineHeight : 24,
        color : '#000000',
    }
})

export default Detail
