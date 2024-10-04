import tensorflow as tf

calc_model = tf.keras.models.load_model('carbon_emission.h5')
vt_model = tf.keras.models.load_model('virtual_time_travel.h5')

def calculate_co2(input_data):
    prediction = calc_model.predict(input_data) 
    return prediction 

def calculate_vt(input_data):
    prediction = vt_model.predict(input_data) 
    return prediction

