import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native"

const CharacterDetail = ({ route }) => {

    const { image, name, species, episodesNumbers } = route.params;
    const [episodeList, setEpisodeList] = useState([]);

    useEffect(() => {
        getDataFromAPI()
    }, []);

    const getDataFromAPI = async () => {

        let episodeData = []
        const apiURL = `https:rickandmortyapi.com/api/episode/${episodesNumbers}`

        const response = await fetch(apiURL);
        const json = await response.json();

        // transfering the data to an array if the json is only one object
        if(Array.isArray(json)){
            episodeData = json
        }else{
            episodeData = [].concat(json)
        }
        setEpisodeList(episodeData)
    }

    const ItemDivider = () => {
        return (
            <View style={{ height: 18, width: "100%" }} />
        )
    }

    const renderItem = ({ item }) => (
        <View style={{ marginLeft: 8 }}>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.textInList}>{item.episode}</Text>
                <Text style={styles.textInList}>: </Text>
                <Text style={styles.textInList}>{item.name}</Text>
            </View>
            <View>
                <Text style={styles.textInList}>Original Air Date: {item.created}</Text>
            </View>
        </View>
    )

    return (
        <View>
            <View style={styles.constainer}>
                <Text style={styles.pageTitle}>Character Details</Text>
                <Image
                    style={styles.characterImage}
                    source={{ url: image }} />
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.text}>{species}</Text>
                <Text style={styles.episodList}>Episodes List:</Text>
                <FlatList
                    style={{ marginTop: 10 }}
                    data={episodeList}
                    keyExtractor={(item) => { return item.id }}
                    renderItem={renderItem}
                    ItemSeparatorComponent={ItemDivider}
                />
            </View>
        </View>
    )

}

export default CharacterDetail

const styles = StyleSheet.create({
    constainer: {
        borderWidth: 1,
        borderColor: "black",
        borderStyle: 'solid',
        marginBottom: 15,
        marginRight: 30,
        marginLeft: 30,
        marginTop: 10,
        height: 800
    },
    pageTitle: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20
    },
    characterImage: {
        width: '100%',
        height: 250,
    },
    nameText: {
        fontSize: 15,
        marginBottom: 5,
        marginTop: 3,
        paddingLeft: 8
    },
    text: {
        fontSize: 15,
        marginBottom: 8,
        paddingLeft: 8
    },
    episodList: {
        fontSize: 15,
        marginBottom: 8,
        paddingLeft: 8,
        fontWeight: "bold"
    },
    textInList: {
        fontSize: 15,
    }
})