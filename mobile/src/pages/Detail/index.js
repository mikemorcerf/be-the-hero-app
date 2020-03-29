import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import * as WebBrowser from 'expo-web-browser';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;

    const message = `Hello ${incident.name}, I'm reaching out because I'd like to help out with the incident "${incident.title}" with the amount of ${Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(incident.value)}.`;

    function navigateBack(){
        navigation.goBack();
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Hero for incident: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        });
    }

    function callPhone() {
        let phoneNumber = '';
        if (Platform.OS === 'android') {
          phoneNumber = `tel:\$\{${incident.phone}}`;
        }
        else {
          phoneNumber = `telprompt:\$\{${incident.phone}}`;
        }
        Linking.openURL(phoneNumber);
    }

    async function accessWebsite() {
        await WebBrowser.openBrowserAsync('https://'+incident.website);
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
                    Organization:
                </Text>
                <Text style={styles.incidentValue}>
                    {incident.name} located in {incident.city}, {incident.state}.
                </Text>

                <Text style={styles.incidentProperty}>
                    Incident:
                </Text>
                <Text style={styles.incidentValue}>
                    {incident.title}.
                </Text>

                <Text style={styles.incidentProperty}>
                    Description:
                </Text>
                <Text style={styles.incidentValue}>
                    {incident.description}.
                </Text>

                <Text style={styles.incidentProperty}>
                    Cost:
                </Text>
                <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(incident.value)}
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
                    <TouchableOpacity style={styles.action} onPress={callPhone}>
                        <Text style={styles.actionText}>
                            Call
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>
                            Email
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={accessWebsite}>
                        <Text style={styles.actionText}>
                            Website
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}