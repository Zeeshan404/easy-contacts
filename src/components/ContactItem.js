import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Avatar, Button, Card, IconButton, useTheme } from 'react-native-paper';
import { hScale, mScale } from '../utils/dimension';
import { _T } from '../locales';
import { Fonts } from '../constants';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const ContactItem = ({
    title = "",
    phoneNumber = ""
}) => {

    const { fonts } = useTheme()

    return (
        <Card onPress={() => { }} style={{ marginHorizontal: 0 }}>

            {/* <Card.Cover source={{ uri: 'https://picsum.photos/200/300?grayscale' }} /> */}

            <Card.Title
                title={title}
                titleNumberOfLines={1}
                subtitle={phoneNumber}
                subtitleNumberOfLines={1}
                left={(props) => {
                    return (
                        <Avatar.Text
                            {...props}
                            // size={hScale(40)}
                            label={title.charAt(0)}
                            labelStyle={{ 
                                fontFamily: fonts.bold.fontFamily
                            }}
                        />
                    )
                }}
            />
            {/* <Card.Content>
                <Text style={{
                    ...fonts.black,
                    backgroundColor: 'red',
                    fontSize: 20,
                    fontFamily: 'eThin'
                }}>
                    {_T("name1")}
                </Text>
                <Text style={{
                    ...fonts.black,
                    backgroundColor: 'tan',
                    fontSize: 30,
                    textAlign: 'justify',
                    fontFamily: 'uThin',
                    // lineHeight: 30
                }}>
                    {_T("name1")}
                </Text>
            </Card.Content> */}
            {/* <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions> */}
        </Card>
    )
}

export default ContactItem

const styles = StyleSheet.create({
    
})

{/* <Text style={{ ...fonts.bold, backgroundColor: 'transparent', fontSize: 20, lineHeight: 30 }}>{_T("name1")}</Text> */}
{/* <Text style={{ ...fonts.medium, backgroundColor: 'transparent', fontSize: 20, lineHeight: 30 }}>{_T("name1")}</Text> */}
{/* <Text style={{ ...fonts.regular, backgroundColor: 'transparent', fontSize: 20, lineHeight: 30 }}>{_T("name1")}</Text> */}
{/* <Text style={{ ...fonts.thin, backgroundColor: 'transparent', fontSize: 20, lineHeight: 30 }}>{_T("name1")}</Text> */}