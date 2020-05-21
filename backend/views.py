from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from django.http import JsonResponse

index = never_cache(TemplateView.as_view(template_name="index.html"))

def test(request):
    
    dict = {
        'name':"Karan",
        'age':19
    }
    return JsonResponse(dict)
