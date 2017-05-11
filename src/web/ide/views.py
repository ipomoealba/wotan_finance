# coding:utf-8
import uuid
import os
import glob
import subprocess
import logging
import json
# import shutil


from datetime import datetime

from django.contrib.auth.decorators import login_required
from django.shortcuts import render
# from django.db.models import Q
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse, Http404, response
from django.views.decorators.csrf import csrf_exempt
from ide.models import Code


logging.basicConfig(level=logging.DEBUG)


@login_required
def delete(request):
    if request.user.is_authenticated():
        signal = request.GET['id']
        Code.objects.filter(code_id=signal).delete()
        return HttpResponseRedirect('/algorithm/')
    else:
        return Http404


def pre_edit(request):
    if request.user.is_authenticated():
        codes = Code.objects.filter(user=request.user.id)
        return render(request, 'preEdit.html', {'codes': codes})
    else:
        codes = Code.objects.filter(user=2)
        return render(request, 'preEdit.html', {'codes': codes})


def editor(request):
    # make sure there is no temp codes.
    Code.objects.filter(user_id=1, title='hook').delete()

    if request.user.is_authenticated():
        if request.GET['c'] != 'new':
            code_id = request.GET['c']
            code = Code.objects.get(code_id=code_id)
            algorithm_template = code.code
            return render(request, 'editor.html', {"init": algorithm_template})
        else:
            algorithm_template_file_name = os.path.join(
                "init_algorithm_template/") + "fund_basic_template.py"
            algorithm_template = open(
                algorithm_template_file_name, 'rb').read()
            #user_id = request.user.id
            #code = request.POST.get('code', 'fuck')
            title = request.POST.get('title', 'hook')
            c = Code.objects.create(
                user_id=1, title=title, code=algorithm_template)
            request.session['code_id'] = c.code_id
            return render(request, 'editor.html', {"init": algorithm_template})

    else:
        algorithm_template_file_name = os.path.join(
            "init_algorithm_template/") + "fund_basic_template.py"
        algorithm_template = open(algorithm_template_file_name, 'rb').read()
        return render(request, 'editor.html', {"init": algorithm_template})


@csrf_exempt
def build(request):
    code = request.POST['code']
    filename = os.path.join("cache/scripts", str(uuid.uuid1())) + '.py'
    with open('init_algorithm_template/base_header.py', 'r') as head:
        cache_file = open(filename, 'w+')
        cache_file.write(head.read())
        cache_file.write(code)
    with open('init_algorithm_template/base_footer.py', 'r') as foot:
        cache_file.write(foot.read())
        cache_file.close()
    tmp_uuid = str(uuid.uuid1())
    data_file = os.path.join("cache/data", tmp_uuid) + '.json'
    photo_file = os.path.join("cache/img", tmp_uuid)
    process = subprocess.Popen(
        ['python3',  filename, data_file, photo_file, tmp_uuid], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    out, err = process.communicate()
    logging.debug(out.decode('utf-8'))
    logging.debug(err.decode('utf-8'))
    err = ''.join([e + "</br>" for e in str(err.decode('utf-8')).split('\n')])
    out = ''.join([o + "</br>" for o in str(out.decode('utf-8')).split('\n')])
    data = ''
    url = ''
    with open(os.path.join("cache/urls/") + tmp_uuid + '.txt','r') as url_file:
        url = url_file.read()
        url_file.close()
    # output_g = ''.join('')
    with open(data_file) as json_file:
        data = json.load(json_file)
    print(url)
    return_dict = {
        'output': u''.join(str(out)),
        'err': u''.join(str(err)),
        'data': data,
        'output_g': url
    }
    # return_dict = json.dumps(dict(return_dict))
    data_remove_files = glob.glob('cache/data/*.json')
    scripts_remove_files = glob.glob('cache/scripts/*.py')
    img_remove_files = glob.glob('cache/img/*.png')
    url_remove_files = glob.glob('cache/urls/*.txt')
    for d, s in zip(data_remove_files, scripts_remove_files):
        os.remove(d)
        os.remove(s)
    for img, u in zip(img_remove_files, url_remove_files):
        os.remove(img)
        os.remove(u)
    return JsonResponse(return_dict)


@login_required
def save_algorithm(request):
    if request.user.is_authenticated():
        if request.session.get('code_id'):
            user_id = request.user.id
            code_id = request.session.get('code_id')
            code = request.POST['code']
            title = request.POST['title']
            # print(title)
            Code.objects.filter(code_id=code_id).update(
                user_id=user_id, title=title, code=code)
            # print("code" + str(request.session['code_id']))
            return HttpResponse('')
    return HttpResponse('')
    # return
