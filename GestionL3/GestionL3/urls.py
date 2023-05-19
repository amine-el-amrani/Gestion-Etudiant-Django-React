
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('Groupe', GroupeView.as_view()),
    #path('', include('L3App.urls')),
    #path('', admin.site.urls, name = 'Admin'),
    path('', include('L3App_api.urls')),
]