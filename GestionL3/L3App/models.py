from django.db import models
from django.utils.safestring import mark_safe
from django.template.defaultfilters import truncatechars
from django.utils.html import format_html

options = {
    ('cacher', 'cacher'),
    ('Afficher', 'Afficher'),
}

class Etudiant(models.Model):
    class EtudiantsObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset() .filter(status='Afficher')
            
    N_Etudiant = models.CharField(max_length=200, blank=True, null=True)
    Ine = models.CharField(max_length=200, blank=True, null=True)
    Nom_Prenom = models.CharField(max_length=300,blank=True, null=True )
    Email = models.EmailField(max_length=200, blank=True, null=True)
    Date_de_naissance = models.DateField('date de naissance')
    Pays_de_naissance = models.CharField(max_length=200, blank=True, null=True)
    Ville_de_naissance = models.CharField(max_length=200, blank=True, null=True)
    Adresse = models.CharField(max_length=200,blank=True, null=True)
    status = models.CharField(max_length= 10, choices=options, default='Afficher')
    Objects = models.Manager()
    EtudiantsObjects = EtudiantsObjects()
    
    def __str__(self):
        return str(self.Nom_Prenom)


class Groupe(models.Model):
    Nom = models.CharField(max_length=200, blank=True, null=True)
    Sous_Groupe = models.CharField(max_length=200, blank=True, null=True)
    Etudiants = models.ManyToManyField(Etudiant, related_name="Groupes", blank = True)

    def __str__(self):
        return self.Nom +' '+ self.Sous_Groupe


class Semestre(models.Model):
    Nom = models.CharField(max_length=200, blank=True, null=True)
    def __str__(self):
        return self.Nom


class Ue(models.Model):
    Nom = models.CharField(max_length=500, blank=True, null=True)
    Semestres = models.ManyToManyField(Semestre, related_name="Ues", blank = True)
    def __str__(self):
        return self.Nom

class Matiere(models.Model):
    Nom = models.CharField(max_length=200, blank=True, null=True)
    Coef = models.FloatField(blank=True, null=True)
    Total_Heures_Cm = models.FloatField(blank=True, null=True)
    Total_Heures_Td = models.FloatField(blank=True, null=True)
    Ues = models.ManyToManyField(Ue, related_name="Matieres", blank = True)
    def __str__(self):
        return self.Nom

class Professeur(models.Model):
    Nom_Prenom = models.CharField(max_length=300,blank=True, null=True )
    Email = models.EmailField(max_length=200, blank=True, null=True)
    Date_de_naissance = models.DateField('date de naissance')
    Ville = models.CharField(max_length=200, blank=False, null=True)
    Adresse = models.CharField(max_length=200,blank=True, null=True)
    Matieres = models.ManyToManyField(Matiere, related_name="Professeurs", blank = True)
    Nb_Heures_Cm = models.FloatField(blank=True, null=True)
    Nb_Heures_Td = models.FloatField(blank=True, null=True)
    Etudiants = models.ManyToManyField(Etudiant, related_name="Tuteur", blank = True)
    def __str__(self):
        return str(self.Nom_Prenom)




class Affectation(models.Model):
    Matiere = models.ForeignKey(Matiere,  on_delete=models.CASCADE, blank = True, null = True)
    Groupe = models.ForeignKey(Groupe,  on_delete=models.CASCADE, blank = True, null = True)
    #Etudiant = models.ForeignKey(Etudiant,  on_delete=models.CASCADE, blank = True, null = True)
    Professeur = models.ForeignKey(Professeur,  on_delete=models.CASCADE, blank = True, null = True)
    Semestre = models.ForeignKey(Semestre,  on_delete=models.CASCADE, blank = True, null = True)
    Ue = models.ForeignKey(Ue,  on_delete=models.CASCADE, blank = True, null = True)
    Note = models.FloatField(max_length=10,blank=True, null=True)
    def __str__(self):
        return str(self.Note)
