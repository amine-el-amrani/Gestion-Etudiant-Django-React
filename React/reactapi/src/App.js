import React from 'react';
import './bootstrap.min.css';
import {Switch,Route,Link} from 'react-router-dom';

import Groupe from './components/groupe/Groupe';
import UpdateG from './components/groupe/UpdateG';
import AddG from './components/groupe/AddG';

import Semestre from './components/semestre/Semestre';
import UpdateS from './components/semestre/UpdateS';
import AddS from './components/semestre/AddS';

import Etudiant from './components/etudiant/Etudiant';
import UpdateE from './components/etudiant/UpdateE';
import AddE from './components/etudiant/AddE';

import Professeur from './components/professeur/Professeur';
import UpdateP from './components/professeur/UpdateP';
import AddP from './components/professeur/AddP';

import Matiere from './components/matiere/Matiere';
import UpdateM from './components/matiere/UpdateM';
import AddM from './components/matiere/AddM';

function App(){
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <Link className="navbar-brand" to="">Gestion L3</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Etudiant">Etudiant</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Professeur">Professeur</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Groupe">Groupe</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Semestre">Semestre</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Matiere">Matiere</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/Groupe" component={Groupe} exact />
        <Route path="/addg" component={AddG} exact_path />
        <Route path="/updateg/:id" component={UpdateG} exact />

        <Route path="/Semestre" component={Semestre} exact />
        <Route path="/adds" component={AddS} exact_path />
        <Route path="/updates/:id" component={UpdateS} exact />

        <Route path="/Etudiant" component={Etudiant} exact />
        <Route path="/adde" component={AddE} exact_path />
        <Route path="/updatee/:id" component={UpdateE} exact />

        <Route path="/Professeur" component={Professeur} exact />
        <Route path="/addp" component={AddP} exact_path />
        <Route path="/updatep/:id" component={UpdateP} exact />

        <Route path="/Matiere" component={Matiere} exact />
        <Route path="/addm" component={AddM} exact_path />
        <Route path="/updatem/:id" component={UpdateM} exact />

      </Switch>
    </div>
  );
}

export default App;
