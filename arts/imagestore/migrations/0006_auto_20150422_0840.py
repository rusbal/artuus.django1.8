# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('imagestore', '0005_album_desc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='desc',
            field=models.TextField(verbose_name='Description'),
        ),
    ]
