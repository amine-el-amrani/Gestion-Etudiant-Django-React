import React from 'react';
import { Link } from 'react-router-dom';

class UpdateP extends React.Component{
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
        this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    fetchData(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/Professeur/'+id+ '/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                Nom_Prenom:data.Nom_Prenom,
                Email:data.Email,
                Matieres:data.Matieres,
                Nb_Heures_Td:data.Nb_Heures_Cm,
                Nb_Heures_Cm:data.Nb_Heures_Td
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    // Submit Form
    submitForm(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/Professeur/'+id,{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
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
                        <th>Matieres</th>
                        <td>
                        <input value={this.state.Matieres} name="Matieres" onChange={this.changeHandler} type="text" className="form-control" />
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

export default UpdateP;