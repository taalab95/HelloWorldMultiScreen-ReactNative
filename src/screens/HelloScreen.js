import React from 'react';
import { Text, Button, View } from 'react-native';

export default function HelloScreen ({ navigation }) {
    return (
        <View>
            <Text>Hello Mahmoud</Text>
            <Button 
                title='Go to About Page'
                onPress={() => navigation.navigate('About')}
            />
        </View>
    );
};