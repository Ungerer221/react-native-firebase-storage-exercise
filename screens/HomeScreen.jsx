import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { getAllIMemories } from '../services/database';

const HomeScreen = ({ navigation }) => {

    const [memories, setMemories] = useState([]);

    const handleGettingOfData = async () => {
        var allData = await getAllIMemories("Images");
        setMemories(allData);
        console.log("All Memories: " + allData);
    };

    useFocusEffect(useCallback(() => {
        handleGettingOfData()
        return () => {

        }
    }, []))


    return (
        <ScrollView style={styles.container}>
            <Pressable onPress={() => navigation.navigate("Add")} style={styles.addButton}>
                <Text>Add</Text>
            </Pressable>

            {/* Card of your images that you need to loop through */}
            <View style={styles.card}>
                {
                    memories.map((item, i) => (
                        <View>
                            <Image
                                style={styles.img} key={i}
                                source={{uri: item.link,}} />
                            <Text>{item.name}</Text>
                        </View>

                    ))

                }
            </View>

        </ScrollView>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    card: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20
    },
    img: {
        width: '100%',
        height: 200,
        objectFit: 'cover'
    },
    addButton: {
        padding: 20,
        backgroundColor: 'green',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    }
})