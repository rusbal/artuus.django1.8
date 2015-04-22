#!/usr/bin/env python
# vim:fileencoding=utf-8
from django.core.urlresolvers import reverse, NoReverseMatch
from django.conf import settings

from .utils import get_model_string
from .models import image_applabel, image_classname, album_applabel, album_classname
from .models.album import Album

def imagestore_processor(request):
    template = getattr(settings, 'IMAGESTORE_TEMPLATE', False)
    ret = {
        'IMAGESTORE_SHOW_USER': getattr(settings, 'IMAGESTORE_SHOW_USER', True),
        'IMAGESTORE_SHOW_TAGS': getattr(settings, 'IMAGESTORE_SHOW_TAGS', True),
        'IMAGESTORE_MODEL_STRING': get_model_string('Image'),
        'IMAGESTORE_LOAD_CSS': getattr(settings, 'IMAGESTORE_LOAD_CSS', True),
        }
    try:
        ret['imagestore_index_url'] = reverse('imagestore:index')
    except NoReverseMatch: #Bastard django-cms from hell!!!!111
        pass
    if template:
        ret['IMAGESTORE_TEMPLATE'] = template
    ret['imagestore_perms'] = {
        'add_image': request.user.has_perm('%s.add_%s' % (image_applabel, image_classname)),
        'add_album': request.user.has_perm('%s.add_%s' % (album_applabel, album_classname)),
    }
    return ret

def albums(request):
    return {'albums': Album.objects.filter(is_public=True)}
  
