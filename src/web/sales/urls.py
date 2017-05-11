from django.conf.urls import url
from sales.views import post_success, post_new_algorithm, sales_status, buying,\
    algorithm_info, product_list, response, post_algorithm
urlpatterns = [
    url(r'^buying$', buying),
    url(r'^$', product_list),
    url(r'^algorithm_info/$', algorithm_info),
    url(r'^sales_status$', sales_status),
    url(r'^post_new_algorithm$', post_new_algorithm),
    url(r'^post_algorithm', post_algorithm),
    url(r'^post_success$', post_success),
    url(r'^response', response),

]
