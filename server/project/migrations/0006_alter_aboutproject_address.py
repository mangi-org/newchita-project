# Generated by Django 4.2.5 on 2023-09-06 15:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0005_alter_aboutproject_color'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aboutproject',
            name='address',
            field=models.CharField(max_length=516),
        ),
    ]
