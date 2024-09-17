import React from 'react'
import { endpoints } from '../Helper/Api'
import axios from 'axios'

export default async function Token() {
    const response = await axios.get(endpoints.generate_token)
    return response?.data?.token
}
