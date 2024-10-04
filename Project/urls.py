import json
import pickle
import pandas as sp
from . import prepfunc as pf
from django.contrib import admin
from django.urls import path,include
from . import views
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import tensorflow as tf
with open('fitted_preprocessor.pkl', 'rb') as f:
    preprocessor = pickle.load(f)
calc_model = tf.keras.models.load_model('carbon_emission.h5')
vt_model = tf.keras.models.load_model('virtual_time_travel.h5')

def calculate_co2(input_data):
    # dictionary ={}
    # dictionary["Body Type"] = input_data.get("bodyType")
    # dictionary["Sex"] = input_data.get("gender")
    # dictionary["Diet"] = input_data.get("diet")
    # dictionary["How Often Shower"] = input_data.get("showerFrequency")
    # dictionary["Heating Energy Source"] = input_data.get("heatingEnergySource")
    # dictionary["Transport"] = input_data.get("transport")
    # dictionary["Vehicle Type"] = input_data.get("vehicleType")
    # dictionary["Social Activity"] = input_data.get("socialActivity")
    # dictionary["Monthly Grocery Bill"] = input_data.get("monthlyGrocery")
    # dictionary["Frequency of Traveling by Air"] = input_data.get("travelFrequency")
    # dictionary["Vehicle Monthly Distance Km"] = input_data.get("monthlyDistance")
    # dictionary["Waste Bag Size"] = input_data.get("wasteBagSize")
    # dictionary["Waste Bag Weekly Count"] = input_data.get("wasteBagCount")
    # dictionary["How Long TV PC Daily Hour"] = input_data.get("pcTvUsage")
    # dictionary["How Many New Clothes Monthly"] = input_data.get("newClothesMonthly")
    # dictionary["How Long Internet Daily Hour"] = input_data.get("internetUsageDaily")
    # dictionary["Energy efficiency"] = input_data.get("energyEfficiency")
    # dictionary["Recycling"] = input_data.get("recycling")
    # dictionary["Cooking_With"] = input_data.get("cookingMaterials")
    # print(dictionary)
    data_df = sp.DataFrame([input_data],columns = [
    "Body Type",
    "Sex",
    "Diet",
    "How Often Shower",
    "Heating Energy Source",
    "Transport",
    "Vehicle Type",
    "Social Activity",
    "Monthly Grocery Bill",
    "Frequency of Traveling by Air",
    "Vehicle Monthly Distance Km",
    "Waste Bag Size",
    "Waste Bag Weekly Count",
    "How Long TV PC Daily Hour",
    "How Many New Clothes Monthly",
    "How Long Internet Daily Hour",
    "Energy efficiency",
    "Recycling",
    "Cooking_With"
    ])
    transformed_data = preprocessor.transform(data_df)
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
        print(type(json.loads(request.body)))
        print(json.loads(request.body)["bodyType"])
        print(calculate_co2(json.loads(request.body)))
        data = {
            'message': 'This is a POST request',
            'data': json.loads(request.body),
            'carbon_emission_result' : 1
        }
        return JsonResponse(data)
    return JsonResponse({'message': 'This is a haha request'})
    

urlpatterns += [
    path('get-data/', get_data, name='get_data'),
]