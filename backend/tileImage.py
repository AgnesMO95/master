from empatches import EMPatches
import cv2
import matplotlib.pyplot as plt
from yolov4darknet.detect import runModel


def tileImage():
    # get image either RGB or Grayscale
    img = cv2.imread('./uploads/12330-6675-20361 - crop.png')
    # b, g, r = cv2.split(img)
    # img = cv2.merge([r, g, b])
    # load module
    emp = EMPatches()
    img_patches, indices = emp.extract_patches(img, patchsize=200, overlap=0.2)
    #print(img_patches)
    #print(indices) #dette kan jeg jobbe med, få ut prediction boxes i samme rekkefølge, også konvertere de til hele bildet ved hjelp av output in indecies 


    # displaying an image patch
    for image in img_patches: 
        result = runModel(image)
        print(result)
        cv2.imshow('image', image)
        cv2.waitKey(0)
    #     plt.figure()
    #     plt.imshow(image)
    #     plt.show()



    merged_img = emp.merge_patches(img_patches, indices)
    # cv2.imshow('image', merged_img)
    # cv2.waitKey(0)
    # display
    # plt.figure()
    # plt.imshow(merged_img)
    # plt.savefig('test-tile.png')
    # plt.show()

if __name__ == "__main__":
    tileImage()