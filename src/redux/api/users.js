/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import axios from 'axios';

export const getAllUsers = async() =>{
    // const base_url = "https://jsonplaceholder.typicode.com"
    const base_url = "http://localhost:4000"
    
    return await axios({
        method: "GET",
        url: `${base_url}/employee`,
        responseType: "json",
        headers: {
            "content-type": "application/json",
        },
    });
};  

export const deleteEmployee = async(id) =>{
    const base_url = "http://localhost:4000"

    return await axios({
        method: "DELETE",
        url:`${base_url}/employee/${id}`,
        responseType: "json",
    });
};

export const postEmployee = async (payload) =>{
        console.log({payload})
        const url = `http://localhost:4000/insert`
        const data = {
            name: payload.name,
            organisation: payload.organisation,
            designation: payload.designation,
            age: payload.age,
            city: payload.city,
            pincode: payload.pincode
        }

        await axios({
            method: 'POST',
            url: url,
            data: data,
            headers: {
                "Content-type": 'application/json'
            }
        }).then((res) => {
            console.log(res)
        }).catch(e => console.log(e))
};
    
export const editEmployee = async(id, state) =>{
    console.log({id, state})
    const url = `http://localhost:4000/update/${id}`
    const data = {
            name: state.name,
            organisation: state.organisation,
            designation: state.designation,
            age: state.age,
            city: state.city,
            pincode: state.pincode
    }
    return await axios ({
        method: "PUT",
        url: url,
        data: data,
        responseType: "json",
        headers: {
                "content-type": "application/json",
            },
    }).then((res) => {
        console.log("put operation",res)
    }).catch(e => console.log(e))
}


// https://jsonplaceholder.typicode.com/photos

export const getPhotos = async() =>{
    const base_url = "https://jsonplaceholder.typicode.com/albums/1"
    // const base_url = "http://localhost:4000"
    
    return await axios({
        method: "GET",
        url: `${base_url}/photos`,
        responseType: "json",
        headers: {
            "content-type": "application/json",
        },
    });
};

export const fetchPosts = async() =>{
    // const base_url = "https://jsonplaceholder.typicode.com"
    const base_url = "https://jsonplaceholder.typicode.com"
    
    return await axios({
        method: "GET",
        url: `${base_url}/posts`,
        responseType: "json",
        headers: {
            "content-type": "application/json",
        },
    });
}; 








// export const editEmployee = async(id) =>{
//     console.log({id})
//     const base_url = "http://localhost:4000";
    
//     await axios ({
//         method: "PUT",
//         url: (`${base_url}/update/${id}`,{
//             name,
//             organisation,
//             designation,
//             age,
//             city,
//             pincode,
            
//         }),
//         responseType: "json",
//         headers: {
//                 "content-type": "application/json",
//             },
//     })
// }