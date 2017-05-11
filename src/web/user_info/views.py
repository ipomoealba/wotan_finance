# -*- encoding: utf-8 -*-
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from sales.models import Bought, Sales
from ide.models import Code

# Create your views here.


def login(request):
    pass


@login_required
def userpage_list(request):
    if request.user.is_authenticated():
        print("user_id:" + str(request.user.id))
        username = request.user.username
        bought = Bought.objects.filter(buyer=request.user.id)
        for b in bought:
            algorithm_id = int(str(b.bought_algorithm))
            b.algorithm_name = [
                c.title for c in Code.objects.filter(code_id=algorithm_id)][0]
            b.algorithm_price, b.algorithm_info = [
                (s.unit_price, s.info) for s in Sales.objects.filter(code_id=algorithm_id)][0]
        sales = Sales.objects.filter(user_id=request.user.id)
        for s in sales:
            algorithm_id = int(str(s.code_id))
            s.title, s.last_update =  [
                (c.title, c.last_update) for c in Code.objects.filter(code_id=algorithm_id)][0]
    return render(request, 'userpage_list.html', {'username': username,
                                                  'bought_list': bought,
                                                  'sales_list': sales})
