# -*- encoding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.db import models
from ide.models import Code
# Create your models here.


class Sales(models.Model):
    sales_id = models.AutoField(primary_key=True)
    code = models.ForeignKey(Code, models.DO_NOTHING, unique=True)
    title = models.CharField(max_length=45)
    user = models.ForeignKey(User, models.DO_NOTHING)
    unit_price = models.IntegerField(blank=True, null=True)
    purchase_times = models.IntegerField(blank=True, null=True)
    info = models.CharField(max_length=1000, blank=True, null=True)
    user_manual = models.CharField(max_length=1000, blank=True, null=True)
    publish_date = models.DateField(blank=True, null=True)
    last_update = models.DateTimeField(blank=True, null=True)
    data_start = models.CharField(max_length=45, blank=True, null=True)
    data_end = models.CharField(max_length=45, blank=True, null=True)
    store_shelves = models.IntegerField()

    def __str__(self):
        return str(self.sales_id)

    class Meta:
        managed = False
        db_table = 'sales'


class Bought(models.Model):
    bought_id = models.AutoField(primary_key=True)
    seller = models.ForeignKey(
        User, models.DO_NOTHING, db_column='seller', related_name='seller')
    buyer = models.ForeignKey(User, models.DO_NOTHING,
                              db_column='buyer', related_name='buyer')
    buytime = models.DateTimeField()
    endtime = models.DateTimeField(blank=True, null=True)
    bought_algorithm = models.ForeignKey(
        'Sales', models.DO_NOTHING, db_column='bought_algorithm', blank=True,
        null=True)

    def __str__(self):
        return str(self.bought_id)

    class Meta:
        managed = False
        db_table = 'bought'


class ForumResponse(models.Model):
    code = models.ForeignKey(Code, models.CASCADE)
    user = models.ForeignKey(User, models.CASCADE)
    contain = models.CharField(max_length=100, blank=True, null=True)
    init_time = models.CharField(max_length=45)
    response_id = models.AutoField(primary_key=True)

    def __str__(self):
        return str(self.code)

    class Meta:
        managed = False
        db_table = 'forum_response'
