from empatches import EMPatches
import cv2
import matplotlib.pyplot as plt
#from yolov4darknet.detect import runModel


def tileImage(image):
    # get image either RGB or Grayscale
    img = cv2.imread(image)

    # load module
    emp = EMPatches()
    img_patches, indices = emp.extract_patches(img, patchsize=416, overlap=0)
    return img_patches, indices
