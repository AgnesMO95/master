from empatches import EMPatches
import cv2
import matplotlib.pyplot as plt

# get image either RGB or Grayscale
img = cv2.imread('./uploads/12330-6675-20361 - crop.png')
# b, g, r = cv2.split(img)
# img = cv2.merge([r, g, b])
# load module
emp = EMPatches()
img_patches, indices = emp.extract_patches(img, patchsize=100, overlap=0.2)
#print(img_patches)
#print(indices)


# displaying an image patch
for image in img_patches: 
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
