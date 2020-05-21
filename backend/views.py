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
    soup = BeautifulSoup(webpage, "lxml")
    for tag in soup.find_all("meta"):
      if tag.get('property'):
        print(tag.get('property'))
      if tag.get('name'):
        print(tag.get('name'))
      
    title = soup.find("meta", property="og:title")
    print(title)
    dict = {
        'name':"Karan",
        'age':19
    }
    return JsonResponse(dict)

