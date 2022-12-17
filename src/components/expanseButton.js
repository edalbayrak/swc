import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { AnimatedFAB } from "react-native-paper";
import { navigate } from "../navigationRef";

const ExpanseButton = ({ data }) => {
    const [isExtended, setIsExtended] = useState(true);
    const onScroll = ({ nativeEvent }) => {
        const currentScrollPosition =
            Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

        setIsExtended(currentScrollPosition <= 0);
    };

    return (
        <View style={{ flex:1 }}>
            <FlatList
                onScroll={onScroll}
                data={data}

            />
            <AnimatedFAB
                icon={"plus"}
                label={"Add Expanse"}
                extended={isExtended}
                animateFrom={"right"}
                iconMode={"static"}
                style={styles.fabstyle}
                onPress={() => navigate("Expanse")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    fabstyle: {
        bottom: 10,
        right: 5,
        position: "absolute"     
    }
});

export default ExpanseButton;