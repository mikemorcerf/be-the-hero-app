import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail(){
        navigation.navigate('Detail');
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total of <Text style={styles.headerTextBold}>0 incidents.</Text>
                </Text>
            </View>

            <Text style={styles.title}>
                Welcome!
            </Text>
            <Text style={styles.description}>
                Choose one of the incidents below and save the day.
            </Text>

            <FlatList 
                data={[1, 2, 3, 4, 5]}
                style={styles.incidentList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>
                            ORG:
                        </Text>
                        <Text style={styles.incidentValue}>
                            ORGNAME
                        </Text>

                        <Text style={styles.incidentProperty}>
                            Incident:
                        </Text>
                        <Text style={styles.incidentValue}>
                            Cadelinha ran over.
                        </Text>

                        <Text style={styles.incidentProperty}>
                            Cost:
                        </Text>
                        <Text style={styles.incidentValue}>
                            $120.00
                        </Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={navigateToDetail}
                        >
                            <Text style={styles.detailsButtonText}>
                                See more details
                            </Text>
                            <Feather name="arrow-right" size={16} color='#e02041' />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    );
}