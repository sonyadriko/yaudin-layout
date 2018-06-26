import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

export default class LikesTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="heart" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Likes tab section</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
    }
});