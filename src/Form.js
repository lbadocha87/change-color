import { useState } from "react";

const Form = () => {


    const [formData, setFormData] = useState({name: '', email: '', age:''});


    const updateFormData = event => {
        setFormData(prevData=>{
            return {...prevData, [event.target.name]: event.target.value}
        })
    }

    const signUp = (e) => {
        e.preventDefault();
        let user = formData;

        console.log(`Wysyłam dane usera ` + user.name);
    }
    return (
        <form onSubmit={signUp}>
            <input type="text" onChange={updateFormData} placeholder="name" value={formData.name} name="name" />
            <input type="email" onChange={updateFormData}  placeholder="emial" value={formData.email} name="email"/>
            <input type="number" onChange={updateFormData}  placeholder="age" value={formData.age} name="age"/>
            <button>Wyslij</button>
        </form>
    );
}

export default Form;