from flask import Flask, render_template, request, jsonify
from keras.models import load_model
import cv2
import numpy as np
import base64
from PIL import Image
import io
import keras.backend.tensorflow_backend as tb

tb._SYMBOLIC_SCOPE.value = True

img_size = 100

app = Flask(__name__)

model = load_model('model/model-018.model')

label_dict = {0: 'Brain Tumor Negative', 1: 'Brain Tumor Positive'}


def preprocess(img):
    img = np.array(img)
    print(img.shape)
    # img= np.array(cv2.imread(img, cv2.IMREAD_GRAYSCALE, ))

    if img.ndim == 3:
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    else:
        gray = img

    gray = gray / 255
    resized = cv2.resize(gray, (img_size, img_size))
    # print("Resized shape ", resized.shape)
    # reshaped=resized.reshape((-1,img_size,img_size,1))
    reshaped = np.expand_dims(resized, 2)
    # print("reshaped shape expand dims ",reshaped.shape)
    reshaped = reshaped.reshape((-1, reshaped.shape[0], reshaped.shape[1], reshaped.shape[2]))
    print(reshaped.shape)
    return reshaped


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():
    print('HERE')
    message = request.get_json(force=True)
    encoded = message['image']
    decoded = base64.b64decode(encoded)
    dataBytesIO = io.BytesIO(decoded)
    dataBytesIO.seek(0)
    image = Image.open(dataBytesIO)

    test_image = preprocess(image)

    prediction = model.predict(test_image)
    result = np.argmax(prediction, axis=1)[0]
    accuracy = float(np.max(prediction, axis=1)[0])

    label = label_dict[result]

    print(prediction, result, accuracy)

    response = {'prediction': {'result': label, 'accuracy': accuracy}}

    return jsonify(response)


@app.route("/printing", methods=["POST"])
def printing(prediction=None, probability=None):
    print('me tika veda')
    print(prediction)
    # if request.method == 'POST':
    #     title = request.form['title']
    #     content = request.form['content']
    #
    #     if not title:
    #         flash('Title is required!')
    #     else:
    #         conn = get_db_connection()
    #         conn.execute('INSERT INTO get_report (prediction, probability) VALUES (?, ?)',
    #                      (prediction, probability))
    #         conn.commit()
    #         conn.close()
    #         return redirect(url_for('index'))

    return render_template("create.html")


app.run(debug=False, threaded=False)
