import React, { useContext } from 'react'
import { Platform, StyleSheet } from 'react-native'
import { getHeaderTitle } from '@react-navigation/elements';
import { Text, Appbar, Menu, useTheme } from 'react-native-paper';
import { _T } from '../locales';
import { SupportedLanguages } from '../constants';
import LocalizationContext from '../context/localization';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const CustomNavigationBar = ({ navigation, route, options, back }) => {
    const [visible, setVisible] = React.useState(false);
    const theme = useTheme()
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const title = getHeaderTitle(options, route.name);

    const { locale, rtl, onChangeLanguage } = useContext(LocalizationContext) || {}

    return (
        <Appbar.Header elevated>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={title != "" ? <Text variant="titleLarge">{title}</Text> : null}>
            </Appbar.Content>
            {/* <Appbar.Action 
                icon="alphabetical-variant"
                onPress={}
             />
             <Appbar.Action 
                icon="abjad-arabic"
             /> */}
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <Appbar.Action icon={MORE_ICON} onPress={openMenu} />
                }>

                {
                    Object.keys(SupportedLanguages).map((item,index) => {
                        return (
                            <Menu.Item
                                key={index.toString()}
                                onPress={() => { onChangeLanguage(SupportedLanguages[item].code) }}
                                title={SupportedLanguages[item].nativeName}
                            />
                        )
                    })
                }
                {/* <Menu.Item
                    onPress={() => { onChangeLanguage(SupportedLanguages.en.code) }}
                    title={SupportedLanguages.en.nativeName}
                />
                <Menu.Item
                    onPress={() => { onChangeLanguage(SupportedLanguages.ur.code) }}
                    title={SupportedLanguages.ur.nativeName}
                /> */}
            </Menu>
        </Appbar.Header>
    );
}

export default CustomNavigationBar

const styles = StyleSheet.create({})