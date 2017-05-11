"""wotan URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include, handler400
from django.contrib import admin
from entrypoint.views import index, contact_us, register, send_feedback
handler400 = 'entrypoint.views.page_not_found'
urlpatterns = [
    url(r'^grappelli/', include('grappelli.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^$', index),
    url(r'^contact_us/$', contact_us),
    url(r'^register/$', register),
    url(r'^send_feedback/$', send_feedback),
    url(r'^algorithm/', include('ide.urls')),
    url(r'^user/', include('user_info.urls')),
    url(r'^sales/', include('sales.urls')),
]
