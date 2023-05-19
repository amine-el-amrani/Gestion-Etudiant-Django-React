import React from 'react';
import { Link } from 'react-router-dom';

class UpdateG extends React.Component{
    constructor(){
        super();
        this.state={
            Nom:'',
            Sous_Groupe:''
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
        fetch('http://127.0.0.1:8000/Groupe/'+id+ '/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                Nom:data.Nom,
                Sous_Groupe:data.Sous_Groupe
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    // Submit Form
    submitForm(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/Groupe/'+id+'/',{
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
                        <th>Nom</th>
                        <td>
                            <input value={this.state.Nom} name="Nom" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Sous Groupe</th>
                        <td>
                            <input value={this.state.Sous_Groupe} name="Sous_Groupe" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <Link to={'/Groupe'} className="btn btn-dark"type="submit" onClick={this.submitForm}> Update </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default UpdateG;