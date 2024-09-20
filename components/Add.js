import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Pressable } from 'react-native';

const Add = ({ add }) => {
    const [task, set] = useState('');

    const handleadd = () => {
        add(task);
        set('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task"
                value={task}
                onChangeText={set}
            />
            <Pressable style={styles.button} onPress={handleadd}>
                <Text style={styles.text}>Save</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'Blue',
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        marginRight: 10,
        padding: 5,
        fontSize: 10,
    },
});

export default Add;
