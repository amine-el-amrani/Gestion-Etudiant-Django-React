from django.contrib import admin
from django.urls import path, include
from L3App_api.views import *
from rest_framework import routers
from L3App.models import *

router=routers.DefaultRouter()

router.register(r'Etudiant',EtudiantViewSet, basename='Etudiant')
router.register(r'Groupe',GroupeViewset)
router.register(r'Professeur',ProfesseurViewset)
router.register(r'Matiere',MatiereViewset)
router.register(r'Semestre',SemestreViewset)
router.register(r'Ue',UeViewset)
urlpatterns = [
    path('',include(router.urls)),

]