# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('imagestore', '0004_album_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='album',
            name='desc',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
