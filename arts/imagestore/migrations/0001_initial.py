# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import sorl.thumbnail.fields
import imagestore.utils
import django.db.models.deletion
import tagging.fields
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, serialize=False, primary_key=True)),
                ('name', models.CharField(max_length=100, verbose_name='Name')),
                ('created', models.DateTimeField(verbose_name='Created', auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Updated')),
                ('is_public', models.BooleanField(default=True, verbose_name='Is public')),
                ('is_featured', models.BooleanField(default=False, verbose_name='Is featured')),
                ('order', models.IntegerField(default=0, verbose_name='Order')),
            ],
            options={
                'ordering': ('order', 'created', 'name'),
                'abstract': False,
                'permissions': (('moderate_albums', 'View, update and delete any album'),),
                'verbose_name': 'Album',
                'verbose_name_plural': 'Albums',
            },
        ),
        migrations.CreateModel(
            name='AlbumImage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, serialize=False, primary_key=True)),
                ('order', models.IntegerField(default=0, verbose_name='Order')),
                ('album', models.ForeignKey(to='imagestore.Album')),
            ],
            options={
                'ordering': ('order',),
                'db_table': 'imagestore_album_images',
            },
        ),
        migrations.CreateModel(
            name='AlbumUpload',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, serialize=False, primary_key=True)),
                ('zip_file', models.FileField(verbose_name='images file (.zip)', help_text='Select a .zip file of images to upload into a new Gallery.', upload_to='temp/')),
                ('new_album_name', models.CharField(max_length=255, blank=True, verbose_name='New album name', help_text='Images will be upload to this album')),
                ('tags', models.CharField(max_length=255, blank=True, verbose_name='tags')),
                ('album', models.ForeignKey(to='imagestore.Album', blank=True, help_text='Select an album to add these images to. leave this empty to create a new album from the supplied title.', null=True)),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL, blank=True, help_text='Select user only if entering a new album name', verbose_name='owner', null=True)),
            ],
            options={
                'verbose_name': 'Image ZIP to album',
                'verbose_name_plural': 'Image ZIP to album',
            },
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, serialize=False, primary_key=True)),
                ('title', models.CharField(max_length=100, verbose_name='Title')),
                ('description', models.TextField(blank=True, verbose_name='Description', null=True)),
                ('tags', tagging.fields.TagField(max_length=255, blank=True, verbose_name='Tags')),
                ('image', sorl.thumbnail.fields.ImageField(verbose_name='File', upload_to=imagestore.utils.get_file_path)),
                ('created', models.DateTimeField(verbose_name='Created', null=True, auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Updated', null=True)),
                ('albums', models.ManyToManyField(to='imagestore.Album', related_name='images', verbose_name='Album', through='imagestore.AlbumImage')),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL, blank=True, related_name='images', verbose_name='Owner', null=True)),
            ],
            options={
                'ordering': ('title', 'id'),
                'abstract': False,
                'verbose_name': 'Image',
                'verbose_name_plural': 'Images',
                'permissions': (('moderate_images', 'View, update and delete any image'),),
            },
        ),
        migrations.AddField(
            model_name='albumimage',
            name='image',
            field=models.ForeignKey(to='imagestore.Image'),
        ),
        migrations.AddField(
            model_name='album',
            name='head',
            field=models.ForeignKey(to='imagestore.Image', blank=True, related_name='head_of', null=True, on_delete=django.db.models.deletion.SET_NULL),
        ),
        migrations.AddField(
            model_name='album',
            name='user',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='albums', verbose_name='Owner'),
        ),
        migrations.AlterUniqueTogether(
            name='albumimage',
            unique_together=set([('album', 'image')]),
        ),
        migrations.AlterUniqueTogether(
            name='album',
            unique_together=set([('user', 'name')]),
        ),
    ]
