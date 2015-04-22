# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('imagestore', '0002_remove_album_is_featured'),
    ]

    operations = [
        migrations.AddField(
            model_name='album',
            name='is_featured',
            field=models.BooleanField(default=False, verbose_name='Is featured'),
        ),
    ]
