import React from 'react';
import { Link } from 'react-router-dom';


class Semestre extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/Semestre/')
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
        fetch('http://127.0.0.1:8000/Semestre/'+id+'/',{
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
                <td>{emp.Ues}</td>
                <td colSpan="2">
                    <Link to={'updates/'+emp.id} className="btn btn-info mr-2">Update</Link>
                    <button onClick={()=>this.deleteData(emp.id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                    <Link className="navbar-brand" to="">Semestre</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button> 
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link" to="/adds">Add</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Ues</th>
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

export default Semestre;