import React from 'react'
import { Text, StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import { fontSizes, spacing } from '../../utils/sizes'
import { RoundedButton } from '../../components/RoundedButton'

const HistoryItem = ({ item, index }) => {
    // console.log("item.status ", item.status);
    return (
        <Text style={historyItemStyles(item.status)}>
            {item.subject}
        </Text>
    );
}

const FocusHistory = ({ focusHistory, onClear }) => {

    const clearHistory = () => {
        onClear();
    };

    return (
        <>
            <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>

                {
                    !!focusHistory.length &&
                    <>
                        <Text style={styles.title}>
                            Things we've focused on
                        </Text>

                        <FlatList
                            style={{ flex: 1 }}
                            contentContainerStyle={{ flex: 1, alignItems: 'center' }}
                            data={focusHistory}
                            renderItem={HistoryItem}
                        />
                        <View style={styles.clearContainer}>
                            <RoundedButton size={75} title="Clear" onPress={() => clearHistory()} />
                        </View>
                    </>
                }
            </SafeAreaView>

        </>
    )

}

const historyItemStyles = (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: 15,
});

const styles = StyleSheet.create({
    historyItem: (status) => ({
        color: status > 1 ? 'red' : 'green',
        fontSize: fontSizes.md,
    }),
    title: {
        color: 'white',
        fontSize: fontSizes.lg,
    },
    clearContainer: {
        alignItems: 'center',
        padding: spacing.md,
    }
});

export default FocusHistory

