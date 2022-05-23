# Master thesis

## Table of content

- [Repository Structure](#repository-structure)
  - [Images](#images)
  - [Sample Files](#sample-files)
  - [Shimmer Scripts](#shimmer-scripts)
  - [src](#src)
- [Installation](#installation)
  - [Clone Repository](#clone-repository)
  - [Conda](#conda)
  - [PIP](#pip)
  - [LabRecorder](#labrecorder)
- [Usage](#usage)
  - [Linux](#linux)
  - [Windows](#windows)
  - [Run Experiment](#run-experiment)

## Repository Structure

### Images

### Clone Repository

In terminal of preference, go to directory you want the repository to be added. To clone the repository run the command:

```
git clone https://github.com/catthiba/project-thesis.git
```

Direct into the folder project-thesis, and then to the folder src.

## Virtual Environment

To install the project it is suggested to create a virtual environment, to manage the dependencies in the project. Navigate into to backend folder of the project directory and create a virtual environment using pythons virutal environemnt venv (or virtual environment of preference), by the command line below:

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
source venv/Scrips/activate venv
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

### Start backend server/Run backend (development server)

windows:

```
python app.py
```
