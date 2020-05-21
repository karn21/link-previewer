from django.contrib import admin
from django.urls import path
from .views import index,test

urlpatterns = [
    path('',index,name="index"),
    path('test/',test,name="test"),
    path('admin/', admin.site.urls),
]
