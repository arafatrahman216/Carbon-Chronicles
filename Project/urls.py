import json
import pickle
import os
import sys
import pandas as sp
import os
import sys
# from . import prepfunc as pf
from django.contrib import admin
from django.urls import path,include
from . import views
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import tensorflow as tf
modulepath = os.path.abspath(os.path.join(os.path.dirname(__file__), '.'))
print(modulepath)
if modulepath  not in sys.path:
    sys.path.append(modulepath )
with open('fitted_preprocessor.pkl', 'rb') as f:
    preprocessor = pickle.load(f)
calc_model = tf.keras.models.load_model('carbon_emission.h5')
vt_model = tf.keras.models.load_model('virtual_time_travel.h5')

def calculate_co2(input_data):
    input_data['recycling'] = ','.join(input_data['recycling'])
    input_data['cookingMaterials'] = ','.join(input_data['cookingMaterials'])
    data_df = sp.DataFrame([input_data], columns=[
    "bodyType",
    "gender",
    "diet",
    "showerFrequency",
    "heatingEnergySource",
    "transport",
    "vehicleType",
    "socialActivity",
    "monthlyGrocery",
    "travelFrequency",
    "monthlyDistance",
    "wasteBagSize",
    "wasteBagCount",
    "pcTvUsage",
    "newClothesMonthly",
    "internetUsageDaily",
    "energyEfficiency",
    "recycling",
    "cookingMaterials"
])

# Rename columns to match the expected format in the preprocessor
    data_df.rename(columns={
    "bodyType": "Body Type",
    "gender": "Sex",
    "diet": "Diet",
    "showerFrequency": "How Often Shower",
    "heatingEnergySource": "Heating Energy Source",
    "transport": "Transport",
    "vehicleType": "Vehicle Type",
    "socialActivity": "Social Activity",
    "monthlyGrocery": "Monthly Grocery Bill",
    "travelFrequency": "Frequency of Traveling by Air",
    "monthlyDistance": "Vehicle Monthly Distance Km",
    "wasteBagSize": "Waste Bag Size",
    "wasteBagCount": "Waste Bag Weekly Count",
    "pcTvUsage": "How Long TV PC Daily Hour",
    "newClothesMonthly": "How Many New Clothes Monthly",
    "internetUsageDaily": "How Long Internet Daily Hour",
    "energyEfficiency": "Energy efficiency",
    "recycling": "Recycling",
    "cookingMaterials": "Cooking_With"
    }, inplace=True)
    #print(input_data)
    transformed_data = preprocessor.transform(data_df)
    # transformed_data_dense = transformed_data.toarray()
    # print(transformed_data_dense)
    # print(transformed_data.shape)
    # print(calc_model.input_shape)
    # transformed_df = sp.DataFrame(transformed_data.toarray(), columns=preprocessor.get_feature_names_out())
    # print(transformed_df[['multi__Energy efficiency_Yes', 'multi__Recycling_Metal', 'multi__Cooking_With_Oven']])
    # print(transformed_df.columns)
    #sp.set_option('display.max_columns', None)
    #sp.set_option('display.max_rows', None) 
    #print(data_df)
    prediction = calc_model.predict(transformed_data)

    return prediction[0]

def calculate_vt(input_data):
    prediction = vt_model.predict(input_data) 
    return prediction



urlpatterns = [
    path('', views.home, name='home'),           # Home page
    path('/calculator',views.about),
]

@csrf_exempt
def get_data(request):
    if request.method == 'POST':
        #print(type(json.loads(request.body)))
        #print(json.loads(request.body)["bodyType"])
        #print(calculate_co2(json.loads(request.body)))
        data = {
            'message': 'This is a POST request',
            'data': json.loads(request.body),
            'carbon_emission_result' : str(calculate_co2(json.loads(request.body))[0])
        }
        return JsonResponse(data)
    return JsonResponse({'message': 'This is a haha request'})
    

urlpatterns += [
    path('get-data/', get_data, name='get_data'),
]