from django.shortcuts import render
from entrypoint.models import FeedbackRaw


def index(request):
    return render(request, 'index.html')


def contact_us(request):
    print(request.META.items())
    return render(request, 'contact_us.html')


def send_feedback(request):
    name = request.POST['user_name']
    email = request.POST['email']
    feedback = request.POST['message']
    f = FeedbackRaw.objects.create(name=name, email=email, contain=feedback)
    print(f)
    return render(request, 'contact_us.html')


def register(request):
    return render(request, 'register.html')


def page_not_found(request):
    return render(request, '404.html')
