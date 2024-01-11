import * as Contacts from 'expo-contacts';

export const requestPermission = async () => {
    return Contacts.requestPermissionsAsync();
}

export const getContacts = async () => {
    return Contacts.getContactsAsync({
        fields: [
            ...Object.values(Contacts.Fields)
        ],
    });
}

export const requestAndGetContacts = async () => {
    const { status } = await requestPermission() 
    if (status === 'granted') {
        const { data } = await getContacts()
        return data
    }
}