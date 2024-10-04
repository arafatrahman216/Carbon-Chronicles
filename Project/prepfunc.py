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

def getprep():
    d = pd.read_csv('Carbon Emission.csv')
    X = d.drop('CarbonEmission',axis = 1)
    y = d['CarbonEmission']

    numericals = X.select_dtypes(include=['int64','float64']).columns.tolist()
    categorical = X.select_dtypes(include=['object']).columns.tolist()
    enc = OneHotEncoder(handle_unknown='ignore')

    num_transform = Pipeline(steps=[
    ('imputer',SimpleImputer(strategy='median')),
    ('scaler',StandardScaler())
    ])
    cat_transform = Pipeline(steps=[
    ('imputer',SimpleImputer(strategy='constant',fill_value='missing')),
    ('onehot',enc)
    ])

    preprocessor = ColumnTransformer(
    transformers = [('num',num_transform,numericals),('cat',cat_transform,categorical)]
    )
    return preprocessor