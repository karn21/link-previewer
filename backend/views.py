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
    try:
      webpage = urlopen(url['url']).read()
    except:
      return JsonResponse({"error":"Check your url and try again."})
    soup = BeautifulSoup(webpage, "lxml")
    count = 0
    tags = {}
    for tag in soup.find_all("meta"):
      count += 1
      og_property = tag.get('property')
      og_name = tag.get('name')
      if og_property:
        tags[og_property] = tag.get('content')
        print(tag.get('property'))
      if og_name:
        tags[og_name] = tag.get('content')
        print(tag.get('name'))
    print(count, " tags")
    print(type(tags))
    return JsonResponse(tags)

