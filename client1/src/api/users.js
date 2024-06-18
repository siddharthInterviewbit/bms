const { axiosInstance } = require('./index');

export const LoginUser = async (value) => {
    console.log(value);
    try {
        const response = await axiosInstance.post('api/users/login', value);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const RegisterUser = async (value) => {
    try {
        const response = await axiosInstance.post('api/users/register', value);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// api/users/login => localhost:3000/api/users/login -> without proxy
// api/users/login => localhost:8081/api/users/login -> with proxy