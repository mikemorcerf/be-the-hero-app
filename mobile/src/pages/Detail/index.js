import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Hello ORG, I\'m reaching out because I\'d like to help out with the incident "Cadelinha ran over" with the amount of $120.00.';

    function navigateBack(){
        navigation.goBack();
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: 'Hero for incident: Cadelinha ran over',
            recipients: ['mikemorcerf@aol.com'],
            body: message,
        });
    }

    function callPhone() {

    }

    function accessWebsite() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0} ]}>
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
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>
                    Save the day!
                </Text>
                <Text style={styles.heroTitle}>
                    Be the hero of this incident.
                </Text>

                <Text style={styles.heroDescription}>
                    Reach out:
                </Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Text style={styles.actionText}>
                            Call
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>
                            Email
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Text style={styles.actionText}>
                            Website
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}