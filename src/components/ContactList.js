import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ContactItem from './ContactItem';
import { Text } from 'react-native-paper';
import { _T } from '../locales';
import EmptyComponent from './EmptyComponent';
import { Spacing } from '../utils/design';
import ItemSeparator from './ItemSeparator';

const ContactList = ({
    data = []
}) => {
    const renderItem = ({ item, index }) => {
        return (
            <ContactItem
                title={item.name}
                phoneNumber={item.phoneNumbers?.[0]?.number}
            />
        )
    }
    return (
        <FlatList
            contentContainerStyle={{ flexGrow: 1, paddingHorizontal:Spacing.horizontal.s12 }}
            style={{ flex: 1 }}
            data={data}
            keyExtractor={(item, index) => (index.toString())}
            renderItem={renderItem}
            ItemSeparatorComponent={<ItemSeparator />}
            ListEmptyComponent={
                <EmptyComponent message={_T("no_contact_found")} />
            }
        />
    )
}

export default ContactList

const styles = StyleSheet.create({})