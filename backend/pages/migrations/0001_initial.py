# Generated by Django 2.2.12 on 2020-04-03 21:56

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isbn', models.CharField(blank=True, max_length=120, null=True)),
                ('title', models.CharField(blank=True, max_length=120, null=True)),
                ('auteur', models.CharField(blank=True, max_length=120, null=True)),
                ('content', models.TextField(blank=True, max_length=120, null=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Type_Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_name', models.CharField(blank=True, max_length=120, null=True)),
                ('descrip', models.CharField(blank=True, max_length=120, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('etat', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(0), django.core.validators.MinValueValidator(3)])),
                ('avis', models.NullBooleanField()),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pages.Book')),
            ],
        ),
    ]
