import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { _T } from '../locales'

const EmptyComponent = ({
    message = ""
}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text variant='bodyLarge'>
                {message}
            </Text>
        </View>
    )
}

export default EmptyComponent

const styles = StyleSheet.create({})