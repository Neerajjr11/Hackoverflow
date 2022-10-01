from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
import pymongo
import numpy as np
import pandas as pd

# Create your views here.
def check(request):
    return HttpResponse("Running...")

def get_connection():
    client = pymongo.MongoClient("mongodb+srv://gpstracking:gpstracking@cluster0.m7tqe.mongodb.net/?retryWrites=true&w=majority")
    try:
        print(client.server_info())
    except:
        print("Unable to connect to server")
    return client

def get_constrained_data(request):
    pass

def college_analytics(request):
    client = get_connection()
    db = client['placeindia']
    query ={}
    statistics = {}
    yearly = {}
    for i,j in request.GET.items():
        query[i]=int(j)
    data = []
    for record in db['placements'].find(query, {'_id':False}):
        data.append(record)
    college=db['colleges'].find_one({"college_id": query['college']}, {'_id': False})
    df = pd.DataFrame(data)
    avg_cgpa=np.mean(df['cgpa'])
    avg_sat=np.mean(df['sat'])
    placement_ratio=np.count_nonzero(df['placed'].map({"Yes": 1, "No": 0}))/ len(data)
    statistics['cgpa']=avg_cgpa
    statistics['sat']=avg_sat
    statistics['ranking']=request.GET['college']
    statistics['placement_ratio']=placement_ratio
    board ={}
    board_data = df.groupby("hsc").mean()
    board['sscp'] = list(board_data['sscp'])
    board['hscp'] = list(board_data['hscp'])
    board['cgpa'] = list(board_data['cgpa'])
    board['sat'] = list(board_data['sat'])
    board['package'] = list(board_data['package'])
    yearly['sscp'] = list(df.groupby("year_of_placement").mean()["sscp"])
    yearly['hscp'] = list(df.groupby("year_of_placement").mean()["hscp"])
    yearly['cgpa'] = list(df.groupby("year_of_placement").mean()["cgpa"])
    yearly['sat'] = list(df.groupby("year_of_placement").mean()["sat"])
    yearly['package'] = list(df.groupby("year_of_placement").mean()["package"])
    return JsonResponse({
        "status": 200,
        "data": data,
        "statistics": statistics,
        "college_details":college,
        "yearly": yearly,
        "board": board
    }, safe=False)

def filtered(request):
    pass

def colleges(request):
    client = get_connection()
    db = client['placeindia']
    data = []
    for record in db['colleges'].find({}, {"_id": False}):
        data.append(record)
    return JsonResponse({
        "status": 200,
        "data": data
    })

