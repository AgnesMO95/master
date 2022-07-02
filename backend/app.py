from unittest import result
from flask import Flask, request, jsonify
import os
from detect.main import makeDetections
#from tileImage import tileImage
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)


@app.route('/detect', methods=['POST'])
def detect():
    if request.method == 'POST':
        files =  request.files.getlist('files') #files or image
        # results = {}
        # for file in files:
        #     basepath = os.path.dirname(__file__)
        #     file_path = os.path.join(basepath, 'uploads', file.filename)
        #     file.save(file_path)
        #     print(file_path)
        #     start = time.time()
        #     #result = runModel(file_path)
        #     result = tileImage(file_path)
        #     end = time.time()
        #     print("[INFO] YOLO took a total of {:.6f} seconds".format(end - start))
        #     results[file.filename] = result
        #     #results.append(result)
        results = makeDetections(files)
        return jsonify(results)
    return None

if __name__ == "__main__":
    app.run(debug=True)