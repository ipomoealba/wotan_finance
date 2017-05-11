from django.contrib import auth
from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from entrypoint.models import Feedback
from django.contrib.auth.models import User


def index(request):
    return render(request, 'index.html')



def contact_us(request):
    return render(request, 'contact_us.html')


def term(request):
    return render(request, 'terms.html')


def send_feedback(request):
    name = request.POST['user_name']
    email = request.POST['email']
    feedback = request.POST['message']
    f = Feedback.objects.create(name=name, email=email, contain=feedback)
    print(f)
    return render(request, 'contact_us.html')


def register(request):
    if request.method == 'POST':
        new_user = User.objects.create(username=request.POST['username'],
                                       password=request.POST['password'],
                                       email=request.POST['email'])
        return JsonResponse({'signal': 'sucess'})
    return HttpResponseRedirect('/')


def page_not_found(request):
    return render(request, '404.html')
