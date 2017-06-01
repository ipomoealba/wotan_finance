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
#!/bin/python3
# -*- encoding:utf-8 -*-
import scipy
import numpy
from wot.dataset import fund, schedule


def initialize():
    s = schedule("20120101")
    fd = fund(s)
    print(fd.get_data("柏瑞環球動態資產配置基金 A"))


def get_process():
    pass


def before_trading_start():
    pass


def pipeline():
    pass# ============= down here need to hidden ==================
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

print(history_data)
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
