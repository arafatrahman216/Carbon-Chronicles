import os
import pickle
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
import numpy as np
import pandas as pd
import matplotlib as plt
import tensorflow as tf
from tensorflow import keras
from sklearn.model_selection import train_test_split
import prepfunc

d = pd.read_csv('Carbon Emission.csv')
X = d.drop('CarbonEmission',axis = 1)
y = d['CarbonEmission']
X_train,X_test,y_train,y_test = train_test_split(X,y,test_size = 0.2,random_state = 42)

preprocessor = prepfunc.getprep()
preprocessor.fit(X_train)
with open('fitted_preprocessor.pkl', 'wb') as f:
    pickle.dump(preprocessor, f)
X_train = preprocessor.transform(X_train)
X_test = preprocessor.transform(X_test)

model = keras.models.Sequential([
    keras.layers.Dense(100,activation = 'relu',input_shape = (X_train.shape[1],)),
    keras.layers.Dense(100,activation = 'relu'),
    keras.layers.Dense(1)
])
model.compile(loss = 'mean_squared_error',optimizer = 'adam',metrics=['mean_absolute_error'])
model.fit(X_train,y_train,epochs = 100,batch_size = 32)
model.evaluate(X_test,y_test)

model.save('carbon_emission.h5')