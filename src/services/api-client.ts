import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "72dccb0afd7741eba4b9ac10a18b1418"
    }
})