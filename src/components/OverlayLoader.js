import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'

const OverlayLoader = () => {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator
                color="black"
                size="large"
            />
        </View>
    )
}

export default OverlayLoader

const styles = StyleSheet.create({
    wrapper: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center'
    }
})