# Generated by Django 3.1.3 on 2021-05-05 01:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('L3App', '0007_auto_20210505_0356'),
    ]

    operations = [
        migrations.AlterField(
            model_name='etudiant',
            name='Tuteur',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='L3App.professeur'),
        ),
        migrations.AlterField(
            model_name='etudiant',
            name='status',
            field=models.CharField(choices=[('Afficher', 'Afficher'), ('cacher', 'cacher')], default='Afficher', max_length=10),
        ),
    ]