# Generated by Django 3.1.3 on 2021-05-08 01:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('L3App', '0019_auto_20210508_0256'),
    ]

    operations = [
        migrations.AlterField(
            model_name='etudiant',
            name='Groupes',
            field=models.ManyToManyField(blank=True, null=True, related_name='Etudiants', to='L3App.Groupe'),
        ),
        migrations.AlterField(
            model_name='etudiant',
            name='status',
            field=models.CharField(choices=[('Afficher', 'Afficher'), ('cacher', 'cacher')], default='Afficher', max_length=10),
        ),
    ]