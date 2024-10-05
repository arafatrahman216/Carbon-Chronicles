# myapp/views.py

import requests
import pandas as pd
from django.http import JsonResponse
from django.http import HttpResponse
from django.shortcuts import render
import csv


def home(request):
    return HttpResponse("<h1>Welcome to My Django App!</h1>")

def about(request):
    return render(request, 'about.html')  # Render an HTML template for the about page

# views.py


def fetch_co2_data(request):
    # NOAA API URL
    api_url = 'https://gml.noaa.gov/aftp/data/trace_gases/co2/flask/surface/txt/co2_asc_surface-flask_1_ccgg_month.txt'

    try:
        # Fetch the data
        response = requests.get(api_url)
        response.raise_for_status()
        raw_data = response.text

        # Split the data by lines and skip headers
        lines = raw_data.splitlines()[53:]  # Assuming headers end at line 53

        # Load the data into a pandas DataFrame
        data = pd.read_csv(pd.io.common.StringIO("\n".join(lines)), delim_whitespace=True, names=["Site", "Year", "Month", "Value"])

        # Convert DataFrame to JSON format
        json_data = data.to_dict(orient='records')

        return JsonResponse({'status': 'success', 'data': json_data}, status=200)

    except requests.exceptions.RequestException as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=500)


def fetch_ch4_data(request) :
    # NOAA API URL
    api_url = 'https://gml.noaa.gov/aftp/data/trace_gases/ch4/flask/surface/txt/ch4_asc_surface-flask_1_ccgg_month.txt'

    try:
        # Fetch the data
        response = requests.get(api_url)
        response.raise_for_status()
        raw_data = response.text

        # Split the data by lines and skip headers
        lines = raw_data.splitlines()[55:]  # Assuming headers end at line 55

        # Load the data into a pandas DataFrame
        data = pd.read_csv(pd.io.common.StringIO("\n".join(lines)), delim_whitespace=True, names=["Site", "Year", "Month", "Value"])

        # Convert DataFrame to JSON format
        json_data = data.to_dict(orient='records')

        return JsonResponse({'status': 'success', 'data': json_data}, status=200)

    except requests.exceptions.RequestException as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=500)
    
def load_csv_data(file_path):
    data = []
    with open(file_path, mode='r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            data.append(row)
    return data

def filter_emissions_data(request):
    # Load CSV data
    file_path = 'emissions.csv'
    data = load_csv_data(file_path)

    # Convert to list of dicts with necessary fields converted to correct types
    formatted_data = []
    for row in data:
        formatted_data.append({
            'year': int(row['year']),
            'state': row['state-name'],
            'sector': row['sector-name'],
            'fuel': row['fuel-name'],
            'value': float(row['value'])
        })

    # Filter 1: Average carbon emission by sector
    sector_data = {}
    for row in formatted_data:
        sector = row['sector']
        if sector not in sector_data:
            sector_data[sector] = []
        sector_data[sector].append(row['value'])

    sector_avg = {sector: sum(values) / len(values) for sector, values in sector_data.items()}

    # Filter 2: Fuel contribution to carbon emissions
    fuel_data = {}
    for row in formatted_data:
        fuel = row['fuel']
        if fuel not in fuel_data:
            fuel_data[fuel] = []
        fuel_data[fuel].append(row['value'])

    fuel_avg = {fuel: sum(values) / len(values) for fuel, values in fuel_data.items()}

    # Filter 3: Yearly average carbon emissions
    avg_year_data = {}
    year_data=[]
    for row in formatted_data:
        year = row['year']
        if year not in avg_year_data:
            avg_year_data[year] = []
        avg_year_data[year].append(row['value'])

    year_avg = {year: sum(values) / len(values) for year, values in avg_year_data.items()}
    for year, values in year_avg.items():
        year_data.append({'Year': year
                            ,'Value': values})


    # Prepare response data
    response_data = {
        'sector_avg': sector_avg,
        'fuel_avg': fuel_avg,
        'year_avg': year_data,
    }

    return JsonResponse(response_data)