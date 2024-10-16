import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ContactItem from './ContactItem';
import { Text } from 'react-native-paper';
import { _T } from '../locales';
import EmptyComponent from './EmptyComponent';
import { Spacing } from '../utils/design';
import ItemSeparator from './ItemSeparator';
import { FlashList } from '@shopify/flash-list';

const ContactList = ({
    data = []
}) => {
    const renderItem = ({ item, index }) => {
        if(item.name === "Usman Abbasi"){
            console.log(item.image.uri)
        }
        return (
            <ContactItem
                image={item?.image?.uri || null}
                title={item.name}
                phoneNumber={item.phoneNumbers?.[0]?.number}
            />
        )
    }
    return (
        <FlashList
            contentContainerStyle={{ paddingHorizontal: Spacing.horizontal.s12, paddingVertical:Spacing.horizontal.s12 }}
            estimatedItemSize={50}
            data={data}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparator}
            ListEmptyComponent={<EmptyComponent message={_T("no_contact_found")} />}
        />
    )
}

export default ContactList

const styles = StyleSheet.create({})