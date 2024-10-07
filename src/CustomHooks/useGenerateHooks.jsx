import React from 'react'
import { endpoints } from '../Helper/Api'
import axios from 'axios'

export default async function Token() {
    const response = await axios.post(endpoints.generate_token, { secure_pass: import.meta.env.VITE_SECURE_PASS })
    return (response?.data?.token);
    
}
