# -*- encoding:utf8 -*-
import sys
import os
import uuid
from bson import json_util
import json
sys.path.append('/Users/chenhuawei/Dropbox/Code/wotan/dev/src/wot')
sys.path.append('/Users/chenhuawei/Dropbox/Code/wotan/dev/src/wot/tools')
# print(sys.)
# sys.path.append('../../wot/tools')
# sys.path.append('/home/ipomoealba/Dropbox/Code/wotan2/wotan/wot')
import dataset
# import image_uploader
from image_uploader import uploader
print(sys.argv)
# ============= up here need to hidden ==================
import numpy as np

# from dataset import fund, schedule
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
    # fl = f.get_data("瑞聯UBAM全球新興市場債券基金美元 AD", "daily_fluctuation")
    return daily_price


def algorithms(x):
    """write algorithms here

    在這裡寫下您的演算法，
    並將值設定成result

    """
    result = float(x)
    return result

# print("success")
# ============= down here need to hidden ==================
history_data = basic_pipeline.pipeline(get_data(initialize()))
final_data_stream = basic_pipeline.run_algorithm(
    algorithms, get_data(initialize()))
data_file = sys.argv[1]
photo_file = sys.argv[2]
tmp_uuid = sys.argv[3]
with open(data_file, 'w') as outfile:
    json.dump(final_data_stream, outfile, default=json_util.default)
print(type(final_data_stream))
print(len(final_data_stream))
print(final_data_stream[0])

import matplotlib.pyplot as plt
x_h_data = [dict(d)['date'] for d in history_data]
y_h_data = [dict(d)['result'] for d in history_data]
x_final_data = [dict(d)['date'] for d in final_data_stream]
y_final_data = [dict(d)['result'] for d in final_data_stream]
plt.xlabel('time')
plt.ylabel('price')
plt.plot(x_h_data, y_h_data, '-', label='history data')
plt.plot(x_final_data, y_final_data, label='trained data')
plt.legend(loc='upper right')
plt.savefig(photo_file)
# plt.show()
img_url = uploader(photo_file, tmp_uuid)
print(img_url['link'])
# with open()
