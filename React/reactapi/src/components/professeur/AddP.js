import React from 'react';
import {Link} from 'react-router-dom';

class AddP extends React.Component{
    constructor(){
        super();
        this.state={
            Nom_Prenom:'',
            Email:'',
            Matieres:'',
            Nb_Heures_Td:'',
            Nb_Heures_Cm:''
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm(this);
    }

    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    submitForm(){
        fetch('http://127.0.0.1:8000/Professeur/',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState({
            Nom_Prenom:'',
            Email:'',
            Matieres:'',
            Nb_Heures_Td:'',
            Nb_Heures_Cm:''
        });
    }

    render(){
        return (
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Nom et Prenom</th>
                        <td>
                        <input value={this.state.Nom_Prenom} name="Nom_Prenom" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                        <input value={this.state.Email} name="Email" onChange={this.changeHandler} type="email" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th> Matieres </th>
                        <td> 
                            <select value={this.state.Matieres} name="Matieres" onChange={this.changeHandler} className="form-control">
                            <option value="Python">Python</option>
                            <option value="SQL">SQL</option>
                            <option value="Java">Java</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>Nb_Heures_Cm</th>
                        <td>
                        <input value={this.state.Nb_Heures_Cm} name="Nb_Heures_Cm" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Nb_Heures_Td</th>
                        <td>
                        <input value={this.state.Nb_Heures_Td} name="Nb_Heures_Td" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <Link to={'/Professeur'} className="btn btn-dark" type="submit" onClick={this.submitForm}>Envoyer
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default AddP;