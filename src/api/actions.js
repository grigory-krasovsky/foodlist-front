import axios from 'axios';
import {baseUrl} from "../constants";

export const getCourses = (updateState) => {
    axios.get(`${baseUrl}/courses`)
        .then(data => {
            console.log(data.data)
            updateState(data.data)
        })
}