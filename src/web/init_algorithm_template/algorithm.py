#!/bin/python3
# -*- encoding:utf-8 -*-
# import sys
# sys.path.append('../../')
import scipy
import numpy
import sys

sys.path.append('/Users/chenhuawei/Dropbox/Code/wotan2/wotan/wot')
from wot.dataset import fund, schedule


def initialize():
    s = schedule("20120101")
    fd = fund(s)
    print(str(fd.get_data("柏瑞環球動態資產配置基金 A")))


def get_process():
    pass


def before_trading_start():
    pass


def pipeline():
    pass
