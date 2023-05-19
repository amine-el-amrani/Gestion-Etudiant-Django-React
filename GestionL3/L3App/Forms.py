from django import forms
from .models import *


class EtudiantForm(forms.ModelForm):
    class Meta:
        model = Etudiant
        fields = ['N_Etudiant', 'Ine', 'Nom_Prenom',
        'Email', 
        'Date_de_naissance',
         'Pays_de_naissance', 
         'Ville_de_naissance',
        'Adresse', 'status']
        


class ProfesseurForm(forms.ModelForm):
    class Meta:
        model = Professeur
        fields = ['Nom_Prenom',
        'Email', 
        'Date_de_naissance',
         'Ville',  
        'Adresse',
        'Nb_Heures_Cm','Nb_Heures_Td', 'Matieres', 'Etudiants']



class MatiereForm(forms.ModelForm):
    class Meta:
        model = Matiere
        fields = ['Nom','Coef' ,'Total_Heures_Cm','Total_Heures_Td','Ues']

class GroupeForm(forms.ModelForm):
    class Meta:
        model = Groupe
        fields = ['Nom','Sous_Groupe', 'Etudiants']


class SemestreForm(forms.ModelForm):
    class Meta:
        model = Semestre
        fields = ['Nom']

class UeForm(forms.ModelForm):
    class Meta:
        model = Ue
        fields = ['Nom', 'Semestres']