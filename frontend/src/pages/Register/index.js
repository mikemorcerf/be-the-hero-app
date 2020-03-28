import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [website, setWebsite] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            phone,
            city,
            state,
            website,
        };

        try{
            const response = await api.post('orgs', data);
            alert(`Your access ID number: ${response.data.id}`);
            history.push('/');
        } catch (err) {
            alert('Error during sign up. Please try again.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Register</h1>
                    <p>Register to access the platform to help people find your organization's incidents.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Go back to Sign in page.
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="ORG's name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="ORG's phone number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <div className="input-group">
                        <input
                            placeholder="City"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            placeholder="State"
                            style={{ width: 100 }}
                            value={state}
                            onChange={e => setState(e.target.value)}
                        />
                    </div>
                    <input
                        type="url"
                        placeholder="ORG's website address"
                        value={website}
                        onChange={e => setWebsite(e.target.value)}
                    />
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}