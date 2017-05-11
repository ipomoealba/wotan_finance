# ============= down here need to hidden ==================
history_data = basic_pipeline.pipeline(get_data(initialize()))
final_data_stream = basic_pipeline.run_algorithm(
    algorithms, get_data(initialize()))
data_file = sys.argv[1]
photo_file = sys.argv[2]
tmp_uuid = sys.argv[3]
with open(data_file, 'w') as outfile:
    json.dump(final_data_stream, outfile, default=json_util.default)

import matplotlib.pyplot as plt
# from matplotlib import
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
