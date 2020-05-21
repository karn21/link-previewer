from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from django.views.generic import View
from django.http import JsonResponse
from urllib.request import urlopen
from bs4 import BeautifulSoup
import json

index = never_cache(TemplateView.as_view(template_name="index.html"))


class PreviewView(View):
  def post(self,request):
    url = json.loads(request.body.decode('utf-8'))
    webpage = urlopen(url['url']).read()
    print(url['url'])
    dict = {
        'name':"Karan",
        'age':19
    }
    return JsonResponse(dict)

