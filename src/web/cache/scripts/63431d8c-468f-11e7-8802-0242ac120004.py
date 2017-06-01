# -*- coding:utf8 -*-
import sys
import os
import uuid
from bson import json_util
import json
wot_parent = '../../wot/'
tools_parent = '../../wot/tools'
SCRIPT_DIR = os.path.dirname(os.path.realpath(
    os.path.join(os.getcwd(), os.path.expanduser(__file__))))
sys.path.append(os.path.normpath(os.path.join(SCRIPT_DIR, wot_parent)))
sys.path.append(os.path.normpath(os.path.join(SCRIPT_DIR, tools_parent)))
# print(sys.)
# sys.path.append('../../wot/tools')
# sys.path.append('/home/ipomoealba/Dropbox/Code/wotan2/wotan/wot')
import dataset
# import image_uploader
from image_uploader import uploader
# ============= up here need to hidden ==================
import numpy as np

from dataset.fund import fund
from dataset.pipeline import basic_pipeline
from dataset.schedule import Schedule


def initialize():
    """time range

    schedule_time 為設定資料流開始與結束時間
    data 為設定資料集

    """
    schedule_time = Schedule("20070101")

    return schedule_time


def get_data(schedule):
    """set up dataset

    設定所需的資料集，
    以基金為例，基本型態有兩種：
    1. 每日價格
    2. 每日長跌幅

    """
    data = fund.fundDataset(schedule)
    daily_price = data.get_data("瑞聯UBAM全球新興市場債券基金美元 AD", "daily_price")
    # fl = f.get_data("瑞聯UBAM全球新興市場債券基金美元 AD", "daily_fluctuation
    return daily_price


def algorithms(x):
    """write algorithms here

    在這裡寫下您的演算法，
    並將值設定成result

    """
    result = float(x)
    return result
# ============= down here need to hidden ==================
history_data = basic_pipeline.pipeline(get_data(initialize()))
final_data_stream = basic_pipeline.run_algorithm(
    algorithms, get_data(initialize()))
data_file = sys.argv[1]
photo_file = sys.argv[2]
tmp_uuid = sys.argv[3]
with open(data_file, 'w') as outfile:
    json.dump(final_data_stream, outfile, default=json_util.default)

import matplotlib 
matplotlib.use("Agg")
import matplotlib.pyplot as plt
#import matplotlib

# from matplotlib import
from operator import itemgetter
history_data = sorted(history_data, key=itemgetter("date")) 
final_data_stream = sorted(final_data_stream, key=itemgetter("date"))
x_h_data = [dict(d)['date'] for d in history_data]
y_h_data = [dict(d)['result'] for d in history_data]
x_final_data = [dict(d)['date'] for d in final_data_stream]
y_final_data = [dict(d)['result'] for d in final_data_stream]
plt.xlabel('time')
plt.ylabel('price')

plt.plot(x_h_data, y_h_data, '-', label='history data')
plt.plot(x_final_data, y_final_data, label='trained data')
plt.legend(loc='upper right')
# plt.figure(num=None, figsize=(8, 6), dpi=80, facecolor='w')
plt.savefig(photo_file)
# plt.show()
img_url = uploader(photo_file, tmp_uuid)
# with open()
