import axios from "axios"
const url = "https://randomuser.me/api/";

const fetchGetUsers = () => {
    axios.get(url)
        .then(res => {
            console.log(res);
            return res
        })
};

export default fetchGetUsers;