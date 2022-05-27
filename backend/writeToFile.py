import json
results = [
{'label': 'Osteoclast', 'confidence': 0.5676062107086182, 'x': 1089, 'y': 2835, 'w': 97, 'h': 79}, 
{'label': 'Osteoclast', 'confidence': 0.3166319727897644, 'x': 1106, 'y': 4177, 'w': 108, 'h': 109}, 
{'label': 'Osteoclast', 'confidence': 0.5859971642494202, 'x': 1401, 'y': 3159, 'w': 105, 'h': 103}, 
{'label': 'Osteoclast', 'confidence': 0.44125014543533325, 'x': 1398, 'y': 3459, 'w': 102, 'h': 102}, 
{'label': 'Osteoclast', 'confidence': 0.3947586715221405, 'x': 1370, 'y': 5477, 'w': 98, 'h': 95}, 
{'label': 'Osteoclast', 'confidence': 0.30254414677619934, 'x': 1404, 'y': 5697, 'w': 109, 'h': 102}, 
{'label': 'Osteoclast', 'confidence': 0.31677988171577454, 'x': 1275, 'y': 6655, 'w': 109, 'h': 53}, 
{'label': 'Osteoclast', 'confidence': 0.6789801716804504, 'x': 1664, 'y': 2658, 'w': 100, 'h': 99}, 
{'label': 'Osteoclast', 'confidence': 0.5529576539993286, 'x': 1880, 'y': 2726, 'w': 105, 'h': 98}, 
{'label': 'Osteoclast', 'confidence': 0.2903185188770294, 'x': 1663, 'y': 2987, 'w': 83, 'h': 93}, 
{'label': 'Osteoclast', 'confidence': 0.3646449148654938, 'x': 2028, 'y': 3568, 'w': 52, 'h': 107}, ]

def writeToFile(fileName, detections): 
    with open("{}.txt".format(fileName), "w") as fo:
        fo.write('Num Osteoclasts: {} \n'.format(len(detections)))
        for detection in detections:
            fo.write('{} \n'.format(detection))

writeToFile('test', results)