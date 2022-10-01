from django.contrib import admin
from django.urls import include, path
from . import views

urlpatterns = [
    path("check/", views.check),
    path("get_analytics/", views.analytics),
    path("get_constrained/", views.filtered)
]