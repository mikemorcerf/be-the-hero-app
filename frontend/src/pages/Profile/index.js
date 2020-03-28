import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const orgId = localStorage.getItem('orgId');
    const orgName = localStorage.getItem('orgName');

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: orgId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [orgId] );

    async function handleDeleteIncident(id) {
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: orgId,
                }
            });
        } catch {
            alert('Error when trying to delete incident. Please try again.');
        }

        setIncidents(incidents.filter(incident => incident.id !== id));
    }

    async function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Welcome, {orgName}</span>

                <Link className="button" to="/incidents/new">Register new incident</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Registered incidents</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>Incident:</strong>
                        <p>{incident.title}</p>

                        <strong>Description:</strong>
                        <p>{incident.description}</p>

                        <strong>Cost:</strong>
                        <p>{Intl.NumberFormat('us-EN', { style: 'currency', currency: 'USD'}).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}