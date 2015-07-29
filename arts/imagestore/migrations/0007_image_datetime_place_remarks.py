# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('imagestore', '0006_auto_20150422_0840'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='image_datetime',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
        migrations.AddField(
            model_name='image',
            name='image_place',
            field=models.CharField(max_length=100, default=None),
        ),
        migrations.AddField(
            model_name='image',
            name='image_remarks',
            field=models.CharField(max_length=100, default=None),
        ),
    ]
