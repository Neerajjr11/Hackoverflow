
import pandas as pd
import numpy as np
df = pd.read_csv("dataset1.csv")
minimum = float("inf")
col_name = ""
policy_name = ""

if df.workex.cov(df.status) < minimum:
    minimum = df.workex.cov(df.status)
    col_name = "workex"
    policy_name = "The University should mandate a 3 month internship in the students 2nd year of college for more hands on experience"
elif df.etest_p.cov(df.status) < minimum:
    minimum = df.etest_p.cov(df.status)
    col_name = "etest_p"
    policy_name = "The University should implement courses catered towards Training Skillsets"
else:
    minimum = df.degree_p.cov(df.status)
    col_name = "degree_p"
    policy_name = "The University should provide counselling session regarding placements to bring awareness about the impact of CGPA in their career"
    

unemployement = df['status'] == 0

unemployement_rate = unemployement.mean().round(4) * 100
print(col_name)
print(policy_name)
print(unemployement_rate)




