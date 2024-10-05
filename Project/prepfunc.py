import numpy as np
import pandas as pd
import matplotlib as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import QuantileTransformer
from sklearn.impute import SimpleImputer 
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.preprocessing import MultiLabelBinarizer

class MultiValueEncoder(BaseEstimator, TransformerMixin):
    def __init__(self, columns):
        self.columns = columns
        self.encoders = {col: MultiLabelBinarizer() for col in columns}

    def fit(self, X, y=None):
        if not isinstance(X, pd.DataFrame):
            X = pd.DataFrame(X, columns=self.columns)
        for col in self.columns:
            values = X[col].dropna().apply(lambda x: x.split(','))
            self.encoders[col].fit(values)
        return self

    def transform(self, X):
        if not isinstance(X, pd.DataFrame):
            X = pd.DataFrame(X, columns=self.columns)
        X_transformed = X.copy()
        for col in self.columns:
            values = X[col].dropna().apply(lambda x: x.split(','))
            encoded = self.encoders[col].transform(values)
            encoded_df = pd.DataFrame(encoded, columns=self.encoders[col].classes_, index=X.index)
            X_transformed = pd.concat([X_transformed.drop(col, axis=1), encoded_df], axis=1)
        return X_transformed

def getprep():
    d = pd.read_csv('Carbon Emission.csv')
    X = d.drop('CarbonEmission',axis = 1)
    y = d['CarbonEmission']

    numericals = ["Monthly Grocery Bill", "Vehicle Monthly Distance Km", "Waste Bag Weekly Count", "How Long TV PC Daily Hour", "How Many New Clothes Monthly", "How Long Internet Daily Hour"]
    categorical = ["Body Type", "Sex", "Diet", "How Often Shower", "Heating Energy Source", "Transport", "Vehicle Type", "Social Activity", "Energy efficiency","Frequency of Traveling by Air","Waste Bag Size"]
    enc = OneHotEncoder(handle_unknown='ignore')
    multifeatures = ["Recycling", "Cooking_With"]
    num_transform = Pipeline(steps=[
    ('imputer',SimpleImputer(strategy='median')),
    ('scaler',StandardScaler())
    ])
    cat_transform = Pipeline(steps=[
    ('imputer',SimpleImputer(strategy='constant',fill_value='missing')),
    ('onehot',enc)
    ])
    multi_transform = Pipeline([
        ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),
        ('multi_encoder',MultiValueEncoder(multifeatures))
    ])
    preprocessor = ColumnTransformer(
    transformers = [('num',num_transform,numericals),('cat',cat_transform,categorical),('multi',multi_transform,multifeatures)]
    )
    return preprocessor