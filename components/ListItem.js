import { useState } from 'react';
import { StyleSheet, Text, View, Switch, Image } from 'react-native';
import Toggle from 'react-native-toggle-input'
import ToggleSwitch from 'toggle-switch-react-native'

export default function ListItem({ title, description, icon}) {
    const [toggle, setToggle] = useState(false);
    const toggleSwitch = () => setToggle(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.iconCtn}>
                <Image source={icon} style={styles.icon}/>
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{description}</Text>
            </View>

            {/* Create a toggle */}
            <View style={styles.switch}>
                <ToggleSwitch
                    isOn={toggle}
                    onColor="#00A272"
                    offColor="#F2F4F7"
                    size="large"
                    onToggle={toggleSwitch}
                    />
            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    subContainer: {
        padding: 10,
        margin: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 15,
        color: '#676767',
    },
    iconCtn: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    switch: {
        marginLeft: 'auto',
    },
});