import json , pickle
import numpy as np
# from json import jsonify

__engine_location = None
__fuel_type = None
__Odometer = None
__Speedometer = None
__Seats_Material = None
__Audiosystem = None
__data_columns = None
__model = None


def estimated_price(engine_location , odometer , speedometer , seats_material , audiosystem , fuel_type , Fuel_Tank_Capacity ,Height , Length ,Width ,City_Mileage ,Gears,Seating_Capacity ,Number_of_Airbags) : 
    
    engine_index = __data_columns.index(engine_location.lower())
    fuel_index = __data_columns.index(fuel_type.lower())
    odometer_index = __data_columns.index(odometer.lower())
    speedometer_index = __data_columns.index(speedometer.lower())
    seats_index = __data_columns.index(seats_material.lower())
    audiosystem_index = __data_columns.index(audiosystem.lower())

    x = np.zeros(len(__data_columns))
    x[0] = Fuel_Tank_Capacity
    x[1] = Height
    x[2] = Length
    x[3] = Width
    x[4] = City_Mileage
    x[5] = Gears
    x[6] = Seating_Capacity
    x[7] = Number_of_Airbags
    
    if engine_index >= 0:
        x[engine_index] = 1
    if fuel_index >= 0:
        x[fuel_index] = 1
    if odometer_index >= 0:
        x[odometer_index] = 1
    if speedometer_index >= 0:
        x[speedometer_index] = 1
    if seats_index >= 0:
        x[seats_index] = 1
    if audiosystem_index >= 0:
        x[audiosystem_index] = 1

    return __model.predict([x])[0]



def engine_location_util():
    return __engine_location

def fuel_type_util():
    return __fuel_type

def odometer_util():
    return __Odometer

def speedometer_util():
    return __Speedometer

def Seats_material_util():
    return __Seats_Material

def audiosystem_util():
    return __Audiosystem

def load_saved_artifacts() : 
    print("loading saved artifacts")
    global __engine_location
    global __data_columns
    global __fuel_type
    global __Odometer
    global __Speedometer
    global __Seats_Material
    global __Audiosystem
    global __data_columns
    global __model

    with open("artifacts/columns.json" , 'r') as f:
        __data_columns = json.load(f)['data_columns']
        __engine_location = __data_columns[8:14]
        __fuel_type = __data_columns[16:21]
        __Odometer = __data_columns[22:24]
        __Speedometer = __data_columns[25:28]
        __Seats_Material = __data_columns[29:32]
        __Audiosystem = __data_columns[33:40]

    global __model

    with open("artifacts/model.pickle" , 'rb') as f:
        __model = pickle.load(f)

if __name__ == '__main__' :
    load_saved_artifacts()
    # print(engine_location_util())
    # print(fuel_type_util())
    # print(odometer_util())
    # print(speedometer_util())
    # print(Seats_material_util())
    # print(audiosystem_util())
    # print(estimated_price("Rear, Transverse", "Digital" , "Analog" , "Fabric" , "CD Player with USB & Aux-in" , "Petrol" , 24 , 1652 , 3164 , 1750 , 23.6 , 4 , 4 , 0))
