import React, { useContext } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { getHeaderTitle } from '@react-navigation/elements';
import { CommonActions } from '@react-navigation/native';
import { Text, BottomNavigation, Appbar, Menu, Button, useTheme } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { _T } from './locales';
import { SupportedLanguages } from './constants';
import LocalizationContext from './context/localization';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import All from './screens/All';
import Favorites from './screens/Favorites';
const Tab = createBottomTabNavigator();

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
                                onPress={() => { onChangeLanguage(SupportedLanguages.en.code) }}
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


const Root = () => {
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
                name={_T("all")}
                component={All}
                options={{
                    tabBarLabel: _T("all"),
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="contacts" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name={_T("favorites")}
                component={Favorites}
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

// renderLabel={(props) => {
//     const { route, color, focused } = props
//     const { options } = descriptors[route.key];
//     const label =
//         options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//                 ? options.title
//                 : route.title;
//     return (
//             <Text
//                 variant="titleMedium"
//                 style={{
//                     fontFamily:"eThin",
//                     fontSize:20,
//                     // width: '100%',
//                     // height: 30,
//                     minHeight:30,
//                     textAlignVertical:'center',
//                     textAlign: 'center',
//                     // color: color,
//                     // backgroundColor: 'red',
//                     // fontSize: 20,
//                     // textAlign: 'center',
//                 }}
//             >
//                 {label}
//             </Text>
//     )
// }}

{/* <Tab.Screen
            name={_T("all")}
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="contacts" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name={_T("favorites")}
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="star-four-points" color={color} size={26} />
              ),
            }}
          /> */}

// import React, { useContext } from 'react'
// import { Platform, ScrollView, StyleSheet, View } from 'react-native'
// import { getHeaderTitle } from '@react-navigation/elements';
// import { CommonActions } from '@react-navigation/native';
// import { Text, BottomNavigation, Appbar, Menu, Divider, Button, IconButton, MD3Colors, useTheme, TouchableRipple } from 'react-native-paper';
// import Icon from '@expo/vector-icons/MaterialCommunityIcons';
// import { _T } from './locales';
// import { SupportedLanguages } from './constants';
// import LocalizationContext from './context/localization';
// createBottomTabNavigator()
// import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// export const CustomNavigationBar = ({ navigation, route, options, back }) => {
//     const [visible, setVisible] = React.useState(false);
//     const theme = useTheme()
//     const openMenu = () => setVisible(true);
//     const closeMenu = () => setVisible(false);
//     const title = getHeaderTitle(options, route.name);

//     const { locale, rtl, onChangeLanguage } = useContext(LocalizationContext) || {}

//     return (
//         <Appbar.Header elevated>
//             {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
//              <Appbar.Content  title={title != "" ? <Text variant="titleLarge" >{title}</Text> : null}>
//              </Appbar.Content>
//              {/* <Appbar.Content  
//                 title={title}>
//              </Appbar.Content> */}

//              {/* <Appbar.Action 
//                 icon="alphabetical-variant"
//                 onPress={}
//              />
//              <Appbar.Action 
//                 icon="abjad-arabic"
//              /> */}
//             <Menu
//                 visible={visible}
//                 onDismiss={closeMenu}
//                 anchor={
//                     <Appbar.Action icon={MORE_ICON} onPress={openMenu}/>
//                 }>
//                 <Menu.Item
//                     onPress={() => { onChangeLanguage(SupportedLanguages.en.code) }}
//                     title={SupportedLanguages.en.nativeName}
//                 />
//                 <Menu.Item
//                     onPress={() => { onChangeLanguage(SupportedLanguages.ur.code) }}
//                     title={SupportedLanguages.ur.nativeName}
//                 />
//         </Menu>
//         </Appbar.Header>
//     );
// }

// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

// export const MusicRoute = () => {
//     return (
//         <View style={{flex:1}}>
//             <Text>Music</Text>
//         </View>
//     )
// }

// const AlbumsRoute = () => {
//     return (
//         <View style={{flex:1}}>
//             <Text>Albums</Text>
//         </View>
//     )
// }
// const RecentsRoute = () => {
//     return (
//         <View style={{flex:1}}>
//             <Text>Recent</Text>
//         </View>
//     )
// }
// const NotificationsRoute = () => {
//     return (
//         <View style={{flex:1}}>
//             <Text>Notifications</Text>
//         </View>
//     )
// }
// const Root = () => {
//     const [index, setIndex] = React.useState(0);
//     const [routes] = React.useState([
//         { key: 'albums', title: _T('all'), focusedIcon: 'album' },
//         { key: 'music', title: _T("favorites"), focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
//         { key: 'recents', title: _T("settings"), focusedIcon: 'history' },
//         // { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
//     ]);

//     const renderScene = BottomNavigation.SceneMap({
//         music: MusicRoute,
//         albums: AlbumsRoute,
//         recents: RecentsRoute,
//         notifications: NotificationsRoute,
//     });

//     return (
//         <BottomNavigation
//             // shifting
//             label
//             // sceneAnimationEasing={Easing.linear}
//             navigationState={{ index, routes }}
//             onIndexChange={setIndex}
//             renderScene={renderScene}
//             // renderLabel={(props) => {
//             //     // const { route, color, focused } = props
//             //     // const { options } = descriptors[route.key];
//             //     // const label =
//             //     //     options.tabBarLabel !== undefined
//             //     //         ? options.tabBarLabel
//             //     //         : options.title !== undefined
//             //     //             ? options.title
//             //     //             : route.title;
//             //     return (
//             //         <Text
//             //             variant="labelMedium"
//             //             style={{ fontFamily:'uThin', width: '100%',textAlign: 'center', color: props.color }}
//             //         >
//             //             {props.route.title}
//             //         </Text>
//             //     )
//             // }}
//         />
//     );
// };

// export default Root;

