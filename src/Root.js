import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import { CommonActions } from '@react-navigation/native';

import { Text, BottomNavigation, Appbar, Menu, Divider, Button, IconButton, MD3Colors, useTheme, TouchableRipple } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { _T } from './locales';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';


const CustomNavigationBar = ({ navigation, route, options, back }) => {
    const [visible, setVisible] = React.useState(false);
    const theme = useTheme()

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const title = getHeaderTitle(options, route.name);


    return (
        <Appbar.Header elevated>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
             <Appbar.Content title={title != "" ? <Text variant="titleLarge">{title}</Text> : null}>
             </Appbar.Content>
             {/* <Appbar.Action icon={'cog'} onPress={openMenu}/> */}

            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <Appbar.Action icon={MORE_ICON} onPress={openMenu}/>
                }>
                 <Menu.Item leadingIcon="cog" onPress={() => {}} title="Settings" />
                <Menu.Item onPress={() => { }} title="Item 2" />
                <Divider />
                <Menu.Item onPress={() => { }} title="Item 3" />
            </Menu>
        </Appbar.Header>
    );
}

const Tab = createBottomTabNavigator();

const Root = () => {

    // return null
    return (
        <Tab.Navigator
            screenOptions={{
                header: (props) => <CustomNavigationBar {...props} />,
            }}
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                        } else {
                            navigation.dispatch({
                                ...CommonActions.navigate(route.name, route.params),
                                target: state.key,
                            });
                        }
                    }}
                    renderIcon={({ route, focused, color }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({ focused, color, size: 24 });
                        }

                        return null;
                    }}
                    getLabelText={({ route }) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.title;

                        return label;
                    }}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: _T("all"),
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="contacts" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: _T("favorites"),
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="star-four-points" size={size} color={color} />;
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default Root

function HomeScreen() {
    return (
        <View style={styles.container}>
        <Button onPress={()=>{}} mode="elevated">Home</Button>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text variant="displayLarge">Settings!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


