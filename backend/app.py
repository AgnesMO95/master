from email.mime import base
from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route("/detect", methods=['POST'])
def detect():
    files =  request.files.getlist('files') #files or image
    #files = request.files['images']
    for file in files:
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(basepath, 'uploads', file.filename)
        file.save(file_path)

    return jsonify({"response": "files uploaded successfully"} )

if __name__ == "__main__":
    app.run(debug=True)