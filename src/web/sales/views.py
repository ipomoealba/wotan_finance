from django.shortcuts import render
from sales.models import Sales, ForumResponse, Bought
from ide.models import Code
from django.contrib.auth.models import User
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.contrib.auth.decorators import login_required

import datetime


def algorithm_info(request):
    if request.GET['algorithm_id']:
        algorithm_id = request.GET['algorithm_id']
        information = Sales.objects.get(code_id=algorithm_id)
        print(information)
        editor_id = information.user_id
        information.editor = User.objects.get(id=editor_id).username
        commends = ForumResponse.objects.filter(code_id=algorithm_id)
        for commend in commends:
            commend.name = User.objects.get(id=commend.user_id).username
    elif not request.GET['algorithm_id']:
        return HttpResponseRedirect('/sales/post_new_algorithm')
    return render(request, 'algorithm-info.html', {
        'algorithm_info': information,
        'commends': commends,
    })


@login_required
def response(request):
    if request.POST['ac_id']:
        message = request.POST['message']
        user_id = int(request.user.id)
        code_id = int(request.POST['ac_id'])
        print(user_id)
        print(code_id)
        ForumResponse.objects.create(
            code_id=code_id, user_id=user_id, contain=message)
        return HttpResponseRedirect('/sales/algorithm_info/?algorithm_id=' + str(code_id))
    elif not request.POST['ac_id']:
        return HttpResponseRedirect('/sales/post_new_algorithm')
    else:
        return Http404


def product_list(request):
    sales = Sales.objects.filter(store_shelves=1)
    for sale in sales:
        code_id = sale.code_id
        if sale.purchase_times == None:
            sale.purchase_times = 0
        sale.last_update = Code.objects.get(code_id=code_id).last_update
        sale.editor = [
            u.username for u in User.objects.filter(id=sale.user_id)][0]

    return render(request, 'product-list.html',
                  {'products': sales})


@login_required
def sales_status(request):
    if request.POST:
        sales_id = request.POST["aid"]
        product = Sales.objects.get(sales_id=sales_id)
        now = datetime.datetime.now()
        sales_id = product.sales_id

        if int(now.month) != 1 or int(now.month) != 2:
            product.last_month_status = Bought.objects.filter(buytime__range=[
                datetime.datetime(now.year, now.month - 2, 28), datetime.datetime(now.year, now.month - 1, 28)],
                bought_algorithm=sales_id)
        elif int(now, month) == 1:
            product.last_month_status = Bought.objects.filter(buytime__range=[
                datetime.datetime(now.year - 1, 11, 28), datetime.datetime(now.year - 1, 12, 28)],
                bought_algorithm=sales_id)
        else:
            product.last_month_status = Bought.objects.filter(buytime__range=[
                datetime.datetime(now.year - 1, 12, 28), datetime.datetime(now.year, 1, 28)],
                bought_algorithm=sales_id)
        product.this_month_times = len(Bought.objects.filter(buytime__range=[
            datetime.datetime(now.year, now.month, 1), datetime.datetime(now.year, now.month, 28)],
            bought_algorithm=sales_id))
        if product.purchase_times == None:
            product.purchase_times = 0
        product.salary = product.unit_price * product.purchase_times
        product.last_month_times = len(product.last_month_status)
        product.last_salary = product.last_month_times * product.unit_price
        product.times = len(Bought.objects.filter(bought_algorithm=sales_id))
        product.salary_percent = product.this_month_times * product.unit_price
        product.percents = (product.this_month_times -
                            product.last_month_times) / 100
        commends = ForumResponse.objects.filter(code_id=product.code_id)
        for commend in commends:
            commend.name = User.objects.get(id=commend.user_id).username
        # product.this_month_times = len()
        return render(request, 'sales_status.html', {'algorithm': product,
                                                     'commends': commends})
    else:
        return Http404


@login_required
def buying(request):
    if request.POST:
        product = Sales.objects.get(sales_id=request.POST['sales_id'])
        product.name = Code.objects.get(code_id=product.code_id).title
        product.deadline = datetime.datetime.now() + datetime.timedelta(days=30)
        return render(request, 'buying.html', {'algorithm': product})
    else:
        return Http404


@login_required
def post_new_algorithm(request):
    if request.POST:
        cid = request.POST['cid']
        return render(request, 'post-page.html', {'cid': cid})
    else:
        return Http404


@login_required
def post_algorithm(request):
    if request.POST:
        code_id = request.POST['cid']
        title = request.POST['alg-title']
        info = request.POST['alg-dscrp']
        um = request.POST['alg-usage']
        data_start = request.POST['data_start']
        data_end = request.POST['data_end']
        unit_price = request.POST['price']
        s = Sales.objects.create(code_id=code_id,
                                 title=title, user_id=request.user.id,
                                 user_manual=um, data_start=data_start,
                                 data_end=data_end, info=info,
                                 unit_price=unit_price,
                                 publish_date=datetime.datetime.now(),
                                 store_shelves=0
                                 )
        return render(request, 'post_sucess.html', {'product': s})


@login_required
def post_success(request):
    if request.POST:
        Sales.objects.filter(sales_id=request.POST['sid']).update(store_shelves=1)
        return HttpResponseRedirect('/user/')
    # @login_required
    # def post_sucess(request):
    #     return render(request, 'post_sucess.html')
