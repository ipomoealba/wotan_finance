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
