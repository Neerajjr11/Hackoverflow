#!/usr/bin/env python
# coding: utf-8
import pandas as pd
import numpy as np


df = pd.read_csv("placement_data.csv")
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
    name = "has_nternship"
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





