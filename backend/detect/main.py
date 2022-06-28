import numpy as np
import argparse
import time
import cv2
import os
from .tileImage import tileImage
from .detect import runModel

confthres=0.25
nmsthres=0.5
yolo_path=".\yolov4darknet"

def get_labels(labels_path):
    # load the COCO class labels our YOLO model was trained on
    #labelsPath = os.path.sep.join([yolo_path, "yolo_v3/coco.names"])
    #lpath=os.path.sep.join([yolo_path, labels_path])
    LABELS = open(labels_path).read().strip().split("\n")
    return LABELS

def get_weights(weights_path):
    # derive the paths to the YOLO weights and model configuration
    weightsPath = os.path.sep.join([yolo_path, weights_path])
    return weightsPath

def get_config(config_path):
    configPath = os.path.sep.join([yolo_path, config_path])
    return configPath

def load_model(configpath,weightspath):
    # load our YOLO object detector trained on COCO dataset (80 classes)
    print("[INFO] loading YOLO from disk...")
    net = cv2.dnn.readNetFromDarknet(configpath, weightspath)
    return net

def detect_image(img_patches, indices, nets, labels):
    outputs = {}
    results = {}
    results['detections'] = []
    # displaying an image patch

    i = 0
    for image in img_patches:
        result = runModel(image, nets, labels)
        outputs[i] = result.get('detections')
        if(outputs[i] != 'No object detected'):
            for item in outputs[i]:
                #print(item)
                x = indices[i][2] + item.get('x')
                y = indices[i][0] + item.get('y')
                detection={}
                detection['label'] = 'Osteoclast'
                detection['confidence'] = item.get('confidence')
                detection['x'] = x
                detection['y'] = y
                detection['w'] = item.get('w')
                detection['h'] = item.get('h')
                results['detections'].append(detection)
                #print(x, y)
            #print(indices[i][0])
        i += 1
        #print(outputs)
        #cv2.imshow('image', image)
        #cv2.waitKey(0)
    #     plt.figure()
    #     plt.imshow(image)
    #     plt.show()

    print(len(results['detections']))
    results['count'] = len(results['detections'])
    return results
    

def detect_images(files, nets, labels):
    results = {}
    for file in files:
            basepath = os.path.dirname(__file__)
            file_path = os.path.join(basepath, 'uploads', file.filename)
            file.save(file_path)
            print(file_path)
            start = time.time()
            #result = runModel(file_path)
            img_patches, indices  = tileImage(file_path)
            result = detect_image(img_patches, indices, nets, labels)
            end = time.time()
            print("[INFO] YOLO took a total of {:.6f} seconds".format(end - start))
            results[file.filename] = result
            #results.append(result)
    return results

def makeDetections(files):
    # load our input image and grab its spatial dimensions
    #print(img)
    #image = cv2.imread(img)
    #print(image)
    labelsPath="C:/Users/agnes/var-master/webapp/oc_counter/backend/yolov4darknet/obj.names"
    cfgpath="C:/Users/agnes/var-master/webapp/oc_counter/backend/yolov4darknet/cfg/yolov4_custom.cfg"
    wpath="C:/Users/agnes/var-master/webapp/oc_counter/backend/yolov4darknet/custom.weights"
    Lables=get_labels(labelsPath)

    nets=load_model(cfgpath,wpath)
    results = detect_images(files, nets, Lables)
    #res=get_predection(image,nets,Lables,Colors)
    #print(res.get('detections'))
    return results