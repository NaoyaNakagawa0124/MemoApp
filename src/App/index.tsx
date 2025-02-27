import { View, Text, StyleSheet } from 'react-native';
const Index =() => {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text>
                        MemoApp
                    </Text>
                    <Text>
                        ログアウト
                    </Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>買い物リスト</Text>
                    <Text>2025年2月27日</Text>
                </View>
                <View>
                </View>
            </View>
            <View>
                <Text>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Index

