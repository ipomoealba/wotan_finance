
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
