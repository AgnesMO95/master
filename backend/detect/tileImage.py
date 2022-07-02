from empatches import EMPatches
import cv2
import matplotlib.pyplot as plt
#from yolov4darknet.detect import runModel


def tileImage(image):
    # get image either RGB or Grayscale
    img = cv2.imread(image)
    # b, g, r = cv2.split(img)
    # img = cv2.merge([r, g, b])
    # load module
    emp = EMPatches()
    img_patches, indices = emp.extract_patches(img, patchsize=416, overlap=0)
    return img_patches, indices
    #print(img_patches)
    #print(indices[0]) #dette kan jeg jobbe med, få ut prediction boxes i samme rekkefølge, også konvertere de til hele bildet ved hjelp av output in indecies 
    # outputs = {}
    # results = {}
    # results['detections'] = []
    # # displaying an image patch

    # i = 0
    # for image in img_patches:
    #     result = runModel(image)
    #     outputs[i] = result.get('detections')
    #     if(outputs[i] != 'No object detected'):
    #         for item in outputs[i]:
    #             #print(item)
    #             x = indices[i][2] + item.get('x')
    #             y = indices[i][0] + item.get('y')
    #             detection={}
    #             detection['label'] = 'Osteoclast'
    #             detection['confidence'] = item.get('confidence')
    #             detection['x'] = x
    #             detection['y'] = y
    #             detection['w'] = item.get('w')
    #             detection['h'] = item.get('h')
    #             results['detections'].append(detection)
    #             #print(x, y)
    #         #print(indices[i][0])
    #     i += 1
    #     #print(outputs)
    #     #cv2.imshow('image', image)
    #     #cv2.waitKey(0)
    # #     plt.figure()
    # #     plt.imshow(image)
    # #     plt.show()

    # print(len(results['detections']))
    # results['count'] = len(results['detections'])
    # return results


    # merged_img = emp.merge_patches(img_patches, indices)
    # cv2.imshow('image', merged_img)
    # cv2.waitKey(0)
    # display
    # plt.figure()
    # plt.imshow(merged_img)
    # plt.savefig('test-tile.png')
    # plt.show()

# if __name__ == "__main__":
#     tileImage("../public/12330-6675-20361.png")