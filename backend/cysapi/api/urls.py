from django.contrib import admin
from django.urls import include, path
from . import views

urlpatterns = [
    path("check/", views.check),
    path("get_college_analytics/", views.college_analytics),
    path("get_constrained/", views.filtered),
    path("get_colleges/", views.colleges),
    path("get_resume/", views.resume_score)
]