from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import *
from .Forms import *

    
class AdminForm1(ImportExportModelAdmin,admin.ModelAdmin):
    list_display = ['N_Etudiant', 'Ine', 'Nom_Prenom', 'Email', 'Date_de_naissance', 'Pays_de_naissance', 'Ville_de_naissance', 'status']
    form = EtudiantForm
    list_filter = ['Nom_Prenom']
    search_fields = ['Nom_Prenom']
    

class AdminForm5(ImportExportModelAdmin,admin.ModelAdmin):
    list_display = ['Nom_Prenom', 'Email', 'Date_de_naissance', 'Ville', 'Adresse', 'Nb_Heures_Cm','Nb_Heures_Td']
    form = ProfesseurForm
    list_filter = ['Nom_Prenom']
    search_fields = ['Nom_Prenom']


class AdminForm3(ImportExportModelAdmin,admin.ModelAdmin):
    list_display = ['Nom','Coef' ,'Total_Heures_Cm', 'Total_Heures_Td']
    form = MatiereForm
    list_filter = ['Nom','Coef']
    search_fields = ['Nom']


class AdminForm4(ImportExportModelAdmin,admin.ModelAdmin):
    list_display = ['Nom','Sous_Groupe']
    form = GroupeForm
    list_filter = ['Nom','Sous_Groupe']
    search_fields = ['Nom']

class AdminForm6(ImportExportModelAdmin,admin.ModelAdmin):
    list_display = ['Nom']
    form = SemestreForm
    list_filter = ['Nom']
    search_fields = ['Nom']

class AdminForm7(ImportExportModelAdmin,admin.ModelAdmin):
    list_display = ['Nom']
    form = UeForm
    list_filter = ['Nom']
    search_fields = ['Nom']


admin.site.site_header = 'Gestion L3 Administration'
admin.site.register(Etudiant, AdminForm1)
admin.site.register(Professeur, AdminForm5)
admin.site.register(Matiere, AdminForm3)
admin.site.register(Groupe, AdminForm4)
admin.site.register(Semestre,AdminForm6)
admin.site.register(Ue,AdminForm7)
