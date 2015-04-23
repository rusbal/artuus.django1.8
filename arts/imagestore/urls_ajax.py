try:
    from django.conf.urls import patterns, url
except ImportError:
    from django.conf.urls.defaults import patterns, url


urlpatterns = patterns('imagestore.ajax',
    url(r'^thumbs/$', 'get_image_thumbs'),
    url(r'^img2owner/$', 'get_image_to_owner'),
)

