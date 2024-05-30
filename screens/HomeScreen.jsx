import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
        <Pressable onPress={() => navigation.navigate("Add")} style={styles.addButton}>
            <Text>Add</Text>
        </Pressable>
        
        {/* Card of your images that you need to loop through */}
        <View style={styles.card}>
            <Image
                style={styles.img}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }} />

            <Text>Image Title</Text>
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
    addButton:{
        padding:20,
        backgroundColor:'green',
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center',
    }
})