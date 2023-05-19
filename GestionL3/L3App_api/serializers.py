from rest_framework import serializers
from L3App.models import *

class GroupeField(serializers.RelatedField):
    def to_representation(self, value):
        return '%s' % (value.Nom)

class UesField(serializers.RelatedField):
    def to_representation(self, value):
        return '%s' % (value.Nom)

class EtudiantsField(serializers.RelatedField):
    def to_representation(self, value):
        return '%s ' % (value.Nom_Prenom )
        
class ProfesseurField(serializers.RelatedField):
    def to_representation(self, value):
        return '%s ' % (value.Nom_Prenom)

class MatiereField(serializers.RelatedField):
    def to_representation(self, value):
        return '%s' % ( value.Nom)

class EtudiantSerializer(serializers.ModelSerializer):
    Groupes = GroupeField(many=True, read_only=True)
    Tuteur = ProfesseurField(many=True, read_only = True)
    class Meta : 
        model = Etudiant
        fields = ("__all__")


class GroupeSerializer(serializers.ModelSerializer):
    Etudiants = serializers.SlugRelatedField(many = True, slug_field= 'Nom_Prenom', queryset= Etudiant.EtudiantsObjects.all())
    class Meta:
        model = Groupe
        fields = ['id', 'Nom', 'Sous_Groupe', 'Etudiants']



class MatiereSerializer(serializers.ModelSerializer):
    Ues = serializers.SlugRelatedField(many = True, slug_field= 'Nom', queryset= Ue.objects.all())
    Professeurs = ProfesseurField(many=True, read_only=True)
    class Meta : 
        model = Matiere
        fields = ('id', 'Nom','Coef' ,'Total_Heures_Cm','Total_Heures_Td','Ues', 'Professeurs')




class ProfesseurSerializer(serializers.ModelSerializer):
    Matieres = serializers.SlugRelatedField(many = True, slug_field= 'Nom', queryset= Matiere.objects.all())
    Etudiants = serializers.SlugRelatedField(many = True, slug_field= 'Nom_Prenom', queryset= Etudiant.EtudiantsObjects.all())
    class Meta : 
        model = Professeur
        fields = ("__all__")


class SemestreSerializer(serializers.ModelSerializer):
    Ues = UesField(many=True, read_only=True)
    class Meta : 
        model = Semestre
        fields = ('id', 'Nom', 'Ues')


class UeSerializer(serializers.ModelSerializer):
    class Meta : 
        Matieres = MatiereField(many=True, read_only=True)
        Semestres = serializers.SlugRelatedField(many = True, slug_field= 'Nom', queryset= Semestre.objects.all())
        model = Ue
        fields = ('Nom', 'Semestres' , 'Matieres')