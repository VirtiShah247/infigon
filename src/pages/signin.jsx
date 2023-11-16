import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Fragment, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [detail, setDetail] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetail({ ...detail, [name]: value });
        console.log("change = ", detail.phoneNumber);
    };



    const handleSignIn = async () => {
        try {
            const response = await axios.post('https://dev.api.infigon.app/auth/signin-with-phone-and-password', {
                phoneNumber: detail.phoneNumber,
                password: detail.password,
            });

            // Handle the response data as needed
            console.log('API Response:', response.data.accessToken);
            localStorage.setItem("accessToken", response.data.accessToken);
            navigate('/getproduct');

            // Reset the form after successful API call
            setDetail({});
        } catch (error) {
            // Handle error (e.g., display an error message)
            console.error('API Error:', error);
        }
    };
    return (

        <Fragment>
            <MDBContainer fluid className="p-3 my-5 h-custom">

                <MDBRow>

                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                    </MDBCol>

                    <MDBCol col='4' md='6'>

                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">Sign in</p>
                        </div>

                        <MDBInput wrapperClass='mb-4' id='formControlLg' type='tel' size="lg" value={detail.phoneNumber} name="phoneNumber" onChange={handleChange} />
                        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={detail.password} name="password" onChange={handleChange} />


                        <div className='text-center text-md-start mt-4 pt-2'>
                            <MDBBtn className="mb-0 px-5" size='lg' onClick={handleSignIn}>Signin</MDBBtn>
                        </div>

                    </MDBCol>

                </MDBRow>

                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>
                    <div>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                            <MDBIcon fab icon='facebook-f' size="md" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                            <MDBIcon fab icon='twitter' size="md" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                            <MDBIcon fab icon='google' size="md" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                            <MDBIcon fab icon='linkedin-in' size="md" />
                        </MDBBtn>

                    </div>

                </div>

            </MDBContainer>
        </Fragment>

    )
}
export default Signin;