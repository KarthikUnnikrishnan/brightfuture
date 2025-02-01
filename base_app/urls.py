from django.urls import path
from . import views

urlpatterns = [
    path('', views.base_home, name='base_home'),
    path('dropout-prediction/', views.predict_dropout, name='predict_dropout'),
    path('course-recommendation', views.course_recom, name='course_recom'),
    path('send-email/', views.send_email, name='send_email'),
]
