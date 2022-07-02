import numpy as np
import argparse
import time
import cv2
import os

confthres=0.25
nmsthres=0.5


def get_colors(LABELS):
    # initialize a list of colors to represent each possible class label
    np.random.seed(42)
    COLORS = np.array([[0, 255, 0]], dtype="uint8")#np.random.randint(0, 255, size=(len(LABELS), 3),dtype="uint8")
    return COLORS


def get_predection(image,net,LABELS,COLORS):
    (H, W) = image.shape[:2]

    # determine only the *output* layer names that we need from YOLO
    ln = net.getLayerNames()
    ln = [ln[i - 1] for i in net.getUnconnectedOutLayers()]

    # construct a blob from the input image and then perform a forward
    # pass of the YOLO object detector, giving us our bounding boxes and
    # associated probabilities
    blob = cv2.dnn.blobFromImage(image, 1 / 255.0, (416, 416),
                                 swapRB=True, crop=False)
    net.setInput(blob)
    start = time.time()
    layerOutputs = net.forward(ln)
    #print(layerOutputs)
    end = time.time()

    # show timing information on YOLO
    print("[INFO] YOLO took {:.6f} seconds".format(end - start))

    # initialize our lists of detected bounding boxes, confidences, and
    # class IDs, respectively
    boxes = []
    confidences = []
    classIDs = []

    # loop over each of the layer outputs
    for output in layerOutputs:
        # loop over each of the detectionnets
        for detection in output:
            # extract the class ID and confidence (i.e., probability) of
            # the current object detection
            scores = detection[5:]
            # print(scores)
            classID = np.argmax(scores)
            # print(classID)
            confidence = scores[classID]

            # filter out weak predictions by ensuring the detected
            # probability is greater than the minimum probability
            if confidence > confthres:
                # scale the bounding box coordinates back relative to the
                # size of the image, keeping in mind that YOLO actually
                # returns the center (x, y)-coordinates of the bounding
                # box followed by the boxes' width and height
                box = detection[0:4] * np.array([W, H, W, H])
                (centerX, centerY, width, height) = box.astype("int")

                # use the center (x, y)-coordinates to derive the top and
                # and left corner of the bounding box
                x = int(centerX - (width / 2))
                y = int(centerY - (height / 2))

                # update our list of bounding box coordinates, confidences,
                # and class IDs
                boxes.append([x, y, int(width), int(height)])
                confidences.append(float(confidence))
                classIDs.append(classID)

    # apply non-maxima suppression to suppress weak, overlapping bounding
    # boxes
    idxs = cv2.dnn.NMSBoxes(boxes, confidences, confthres,
                            nmsthres)

    #empty dictionary
    outputs={}
    # ensure at least one detection exists
    if len(idxs) > 0:
        #create key for the dictionary 
        outputs['detections'] = []

        # loop over the indexes we are keeping
        for i in idxs.flatten():

            detection={}
            detection['label'] = LABELS[classIDs[i]]
            detection['confidence'] = confidences[i]
            detection['x'] = boxes[i][0]
            detection['y'] = boxes[i][1]
            detection['w'] = boxes[i][2]
            detection['h'] = boxes[i][3]
            outputs['detections'].append(detection)
            
    else:
        outputs['detections'] = 'No object detected'    
    return outputs #image

def runModel(image, nets, lables):

    Colors=get_colors(lables)
    res=get_predection(image,nets,lables,Colors)
    print(res.get('detections'))
    return res
