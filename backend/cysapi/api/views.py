from django.http import HttpResponse
from django.shortcuts import render
import pymongo

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

def analytics(request):
    pass

def filtered(request):
    pass

