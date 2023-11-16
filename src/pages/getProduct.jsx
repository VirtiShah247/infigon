import axios from "axios";
import { Products } from "../component/products";

const Getproduct = () => {

    const apiUrl = 'https://dev.api.infigon.app/user/get-profile';
    const accessToken = localStorage.getItem("access_token");

    axios({
        url: apiUrl,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(response => {
            // Handle the response data
            console.log(response.data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
    return <>
        <div>
            <Products />
        </div>
    </>
}
export default Getproduct;