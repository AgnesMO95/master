# Backend

This folder contains the backend logic for the web application. It is developed in Python and uses Flask API to communicate with the frontend and requesting detections.

## Table of content

- [Repository Structure](#repository-structure)
  - [Detect](#detect)
  - [Yolov4darknet](#yolov4darknet)
  - [app.py](#app.py)
- [Virtual Environment](#virtual-environment)
  - [Installing required dependencies](#Installing-required-dependencies)
- [Run backend](#run-backend)
- [Modify model](#modify-model)

## Repository Structure

### Detect

This folder contains the necessary files for performing detections on multiple images. It loads the model from the yolov4darknet folder, tiles the images and perform inference, and creates a dictionary with the final outputs.

### Yolov4darknet

This folder contains the models architecture, the weigths and the label.

### app.py

This file contains the logic for the Flask API, which is used to communicate with the front-end and requesting detection from the main.py file in the detect folder.

## Virtual Environment

To install the backend it is suggested to create a virtual environment, to manage the dependencies in the project. Navigate into to backend folder of the project directory and create a virtual environment using pythons virutal environemnt venv (or virtual environment of preference), by the command line below:

windows:

```
python -3 -m -venv venv
```

mackOS/Linux

```
python3 -m venv venv
```

Next activate the the environment

If you use the command prompt use the command for windows:

```
source venv/Scripts/activate venv
```

macOS/Linux:

```
. venv/bin/activate
```

### Installing required dependencies

using pip

```
pip install -r requirements.txt
```

## Run backend

The file paths has to be updated accordingly to

windows:

```
python app.py
```

## Modify model

If changes to the model are done, or another yolov4 model is wanted to be utilize, one have to add the model to the yolov4darknet folder. Where the cfg file containing the model architecture need to be uploaded in the cfg folder, and the weigths need to be uploaded in the yolov4darknet folder. If the label is changes it has to be updated in the obj.names file. If the file names are not the same they need to be updated in the main.py file in the detect folder.
