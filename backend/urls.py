from django.contrib import admin
from django.urls import path
from .views import index,PreviewView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('',index,name="index"),
    path('preview/',csrf_exempt(PreviewView.as_view()),name="preview"),
    path('admin/', admin.site.urls),
]
