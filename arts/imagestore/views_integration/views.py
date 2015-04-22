from django.http import Http404
from django.shortcuts import render_to_response
from django.template import RequestContext

from imagestore.models.album import Album


def featured_page(request):
    try:
        featured_images = Album.objects.get(is_featured=True).images.all().order_by('albumimage')
    except Album.DoesNotExist:
        raise Http404("No featured page")

    return render_to_response('featured.html', {'featured_images': featured_images}, context_instance=RequestContext(request))

def album_page(request, slug):
    album = Album.objects.filter(slug=slug)
    if len(album) == 0:
        raise Http404("Page not found: %s" % slug)

    album_images = album[0].images.all().order_by('albumimage')
    # desc = album[0].desc

    return render_to_response('galleria.html',
                              # {'album_images': album_images, 'album_desc': desc},
                              {'album_images': album_images, 'album': album[0]},
                              context_instance=RequestContext(request))
