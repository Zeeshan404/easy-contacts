import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, useTheme } from 'react-native-paper'
import { _T } from '../locales'
import useContactStore from '../stores'
import ContactList from '../components/ContactList'

const All = () => {
    const { contacts } = useContactStore();
    const { colors, fonts } = useTheme()
    // console.log('contacts', contacts)
    // const onlyTen = contacts.slice(0, 10).sort((a,b)=> a.name.charAt(0) > b.name.charAt(0))
    // const onlyTen = contacts.sort((a,b)=> a.id < b.id)
    // console.log('contacts', contacts.length)
    // console.log('onlyTen', onlyTen.length)
    
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <ContactList 
                data={contacts}
            />
        </View>
    )
}

export default All

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
