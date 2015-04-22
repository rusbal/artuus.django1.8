try:
    from django.conf.urls import patterns, url
except ImportError:
    from django.conf.urls.defaults import patterns, url

from . import views


urlpatterns = patterns('',
    # url(r'^artist/', views.album_page, name='album_page'),
    url(r'^artist/(?P<slug>[\w-]+)/$', views.album_page, name='album_page'),
)
