# Generated by Django 3.1.3 on 2021-05-05 01:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('L3App', '0006_auto_20210505_0340'),
    ]

    operations = [
        migrations.AlterField(
            model_name='etudiant',
            name='status',
            field=models.CharField(choices=[('cacher', 'cacher'), ('Afficher', 'Afficher')], default='Afficher', max_length=10),
        ),
    ]
