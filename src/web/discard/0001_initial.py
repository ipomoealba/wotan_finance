# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-20 12:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bought',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('buytime', models.DateTimeField()),
                ('endtime', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'bought',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='ForumResponse',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contain', models.CharField(blank=True, max_length=100, null=True)),
                ('init_time', models.CharField(max_length=45)),
            ],
            options={
                'db_table': 'forum_response',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Sales',
            fields=[
                ('sales_id', models.IntegerField(primary_key=True, serialize=False)),
                ('unit_price', models.IntegerField(blank=True, null=True)),
                ('purchase_times', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'sales',
                'managed': False,
            },
        ),
    ]
