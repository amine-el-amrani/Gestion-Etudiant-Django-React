import React from 'react';
import { Link } from 'react-router-dom';


class Groupe extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/Groupe/')
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
        fetch('http://127.0.0.1:8000/Groupe/'+id+'/',{
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
                <td>{emp.Nom}</td>
                <td>{emp.Sous_Groupe}</td>
                <td>{emp.Etudiants} </td> 
                <td colSpan="2">
                    <Link to={'updateg/'+emp.id} className="btn btn-info mr-2">Update</Link>
                    <button onClick={()=>this.deleteData(emp.id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                    <Link className="navbar-brand" to="">Groupe</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button> 
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link" to="/addg">Add</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Sous_Groupe</th>
                        <th>Etudiants</th>
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

export default Groupe;