import axios from "axios"
const url = "https://jsonplaceholder.typicode.com/users";

const fetchGetUsers = () => {
    axios.get(url)
        .then(res => {
            console.log(res.data);
            return res
        })
};

export default fetchGetUsers;
