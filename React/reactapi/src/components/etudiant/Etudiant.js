import React from 'react';
import { Link } from 'react-router-dom';



class Etudiant extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/Etudiant/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    deleteData(id){
        fetch('http://127.0.0.1:8000/Etudiant/'+id+'/',{
            method:'DELETE',
            body:JSON.stringify(this.state),
        })
        .then(response=>response)
        .then((data)=>{
            if(data){
                this.fetchData();
            }
        });
    }

    render(){
        const empData=this.state.data;
        const rows=empData.map((emp)=>
            <tr key={emp.id}>
                <td>{emp.N_Etudiant}</td>
                <td>{emp.Nom_Prenom}</td>
                <td>{emp.Email}</td>
                <td>{emp.Date_de_naissance}</td>
                <td>{emp.Tuteur}</td>
                <td>{emp.Groupes}</td>
                <td colSpan="2">
                    <Link to={'updatee/'+emp.id} className="btn btn-info mr-2">Update</Link>
                    <button onClick={()=>this.deleteData(emp.id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                    <Link className="navbar-brand" to="">Etudiant</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="adde">Add</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            <table className="table table-boredered">
                <thead>
                    <tr>
                        <th>N_Etudiant</th>
                        <th>Nom et Prenom</th>
                        <th>Email</th>
                        <th>Date de naissance</th>
                        <th>Tuteur</th>
                        <th>Groupes</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            </div>
        );
    }

}

export default Etudiant;