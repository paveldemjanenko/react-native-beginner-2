import React, { useState } from 'react';
import {
    FlatList,
    Text,
    View,
    TouchableOpacity,
    Modal,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import Card from '../shared/card';
import ReviewForm from './reviewForm';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }: any): JSX.Element {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [reviews, setReviews] = useState([
        {
            title: 'Zelda, Breath of Fresh Air',
            rating: 5,
            body: 'lorem ipsum',
            key: '1',
        },
        {
            title: 'Gotta Catch Them All (again)',
            rating: 4,
            body: 'lorem ipsum',
            key: '2',
        },
        {
            title: 'Not So "Final" Fantasy',
            rating: 3,
            body: 'lorem ipsum',
            key: '3',
        },
    ]);

    const addReview = (review: any) => {
        review.key = Math.random().toString();
        setReviews(currentReviews => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    };

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modelContent}>
                        <MaterialIcons
                            name="close"
                            size={24}
                            style={{
                                ...styles.modalToggle,
                                ...styles.modalClose,
                            }}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('ReviewDetails', item)
                        }>
                        <Card>
                            <Text style={globalStyles.titleText}>
                                {item.title}
                            </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modelContent: {
        flex: 1,
    },
});
