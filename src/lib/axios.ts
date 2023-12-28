import axios from "axios";

const user = 'RodrigoTRS'

export const api = axios.create({
    baseURL: 'https://api.github.com/users/' + user,
})