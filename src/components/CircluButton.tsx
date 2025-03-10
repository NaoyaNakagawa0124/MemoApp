import {View, Text, StyleSheet, type ViewStyle} from 'react-native'

interface Props {
    children: string
    style?: ViewStyle
}

const CircluButton = (props: Props): JSX.Element => {
    const {children, style} = props
    return (
        <View style={[styles.circleButton, style]}>
            <Text style={styles.circleButtonLabel}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circleButton : {
        width : 64,
        height : 64,
        borderRadius : 32,
        backgroundColor : '#467FD3',
        justifyContent : 'center',
        alignItems : 'center',
        position : 'absolute',
        bottom : 40,
        right : 40,
        shadowColor : '#000000',
        shadowOpacity : 0.25,
        shadowRadius : 8,
        shadowOffset : {width : 0, height : 8},
        elevation : 8,
    },

    circleButtonLabel : {
        fontSize : 40,
        color : '#FFFFFF',
        lineHeight : 48,
    }
})

export default CircluButton
