from flask import Flask, request, jsonify
import os
from yolov4darknet.detect import runModel

app = Flask(__name__)

@app.route('/detect', methods=['POST'])
def detect():
    if request.method == 'POST':
        files =  request.files.getlist('files') #files or image
        #files = request.files['images']
        results = []
        for file in files:
            basepath = os.path.dirname(__file__)
            file_path = os.path.join(basepath, 'uploads', file.filename)
            file.save(file_path)
            print(file_path)
            result = runModel(file_path)
            results.append(result)

        return jsonify(results )
    return None

if __name__ == "__main__":
    app.run(debug=True)