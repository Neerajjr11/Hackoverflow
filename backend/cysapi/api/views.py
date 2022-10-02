from email import policy
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
import pymongo
import numpy as np
import pandas as pd

import PyPDF2
import os
import collections
from os import listdir
from os.path import isfile, join
from io import StringIO
from collections import Counter
import en_core_web_sm
nlp = en_core_web_sm.load()
from spacy.matcher import PhraseMatcher
from gensim.models import Word2Vec

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
    policy = policy_predictor(df)
    return JsonResponse({
        "status": 200,
        "data": data,
        "statistics": statistics,
        "college_details":college,
        "yearly": yearly,
        "board": board,
        "policy": policy
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


def policy_predictor(df):
    minimum = float("inf")
    name = ""
    policy_name = ""

    placed_cols=["placed"]
    for cols in placed_cols:
            df[cols] = df[cols].map({
                'Yes' : 1, 
                'No'  : 0
            })

    internship_cols=["has_internship"]
    for cols in internship_cols:
            df[cols] = df[cols].map({
                'Yes' : 1, 
                'No'  : 0
            })



    if df.has_internship.cov(df.placed) < minimum:
        minimum = df.has_internship.cov(df.placed)
        name = "has_internship"
        policy_name = "The University should mandate a 3 month internship in the students 2nd year of college for more hands on experience"
    elif df.backlogs.cov(df.placed) < minimum:
        minimum = df.backlogs.cov(df.placed)
        name = "backlogs"
        policy_name = "The University should provide counselling session regarding placements to bring awareness about the impact of backlogs in their career"
    elif df.sat.cov(df.placed) < minimum:
        minimum = df.sat.cov(df.placed)
        name = "sat"
        policy_name = "The University should implement courses catered towards SAT Scores"
    else:
        minimum = df.cgpa.cov(df.placed)
        name = "cgpa"
        policy_name = "The University should provide counselling session regarding placements to bring awareness about the impact of CGPA in their career"
        

    unemployement = df['placed'] == 0

    unemployement_rate = unemployement.mean().round(4) * 100
    return {
        "name": name,
        "policy_name": policy_name,
        "unemployment_rate": unemployement_rate
    }


def resume_score(request):
    import collections
    import pickle
    def create_bigram(words):
        common_terms = ["of", "with", "without", "and", "or", "the", "a"]
        x=words.split()
    # Create the relevant phrases from the list of sentences:
        phrases = Phrases(x, common_terms=common_terms)
    # The Phraser object is used from now on to transform sentences
        bigram = Phraser(phrases)
    # Applying the Phraser to transform our sentences is simply
        all_sentences = list(bigram[x])
    def pdfextract(file):
        pdf_file = open(file, 'rb')
        read_pdf = PyPDF2.PdfFileReader(pdf_file)
        number_of_pages = read_pdf.getNumPages()
        c = collections.Counter(range(number_of_pages))
        for i in c:
            #page
            page = read_pdf.getPage(i)
            page_content = page.extractText()
        return (page_content.encode('utf-8'))
    model=Word2Vec.load("final.model")
    text = str(pdfextract("resume-aug2022.pdf"))
    text = text.replace("\\n", "")
    text = text.lower()
    stats = [nlp(text[0]) for text in model.wv.most_similar("statistics")]
    NLP = [nlp(text[0]) for text in model.wv.most_similar("language")]
    # ML = [nlp(text[0]) for text in model.wv.most_similar("machine_learning")]
    DL = [nlp(text[0]) for text in model.wv.most_similar("deep")]
    #R = [nlp(text) for text in keyword_dictionary['R Language'].dropna(axis = 0)]
    python = [nlp(text[0]) for text in model.wv.most_similar("python")]
    Data_Engineering = [nlp(text[0]) for text in model.wv.most_similar("data")]
    
    matcher = PhraseMatcher(nlp.vocab)
    matcher.add('Stats', None, *stats)
    matcher.add('NLP', None, *NLP)
    # matcher.add('ML', None, *ML)
    matcher.add('DL', None, *DL)
    matcher.add('Python', None, *python)
    matcher.add('DE', None, *Data_Engineering)
    doc = nlp(text)
    d = []  
    matches = matcher(doc)
    for match_id, start, end in matches:
        rule_id = nlp.vocab.strings[match_id]  # get the unicode I
        span = doc[start : end]               # get the matched slice of the doc
        d.append((rule_id, span.text))      
    # keywords = "\n".join(f'{i[0]} {i[1]} ({j})' for i,j in Counter(d).items())
    keywords = Counter(d)
    keyword = {}
    for key,value in Counter(d).items():
        k =""
        for i in key:
            k+=i+" "
        keyword[k] = value
    print("KEYWORDS")
    return JsonResponse(keyword)