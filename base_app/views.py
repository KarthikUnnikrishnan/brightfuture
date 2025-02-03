from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings
import joblib
import pandas as pd
from .recommender import CourseRecommender

# Create your views here.
def base_home(request, prediction=None):
    return render(request, 'base_app/home.html', {'prediction': prediction})

def predict_dropout(request):
    prediction = None
    predict_model = joblib.load('ml_models/dropout_prediction/dropout_model.joblib')
    
    if request.method == 'POST':
        first_internal = float(request.POST.get('1st-internal'))
        second_internal = float(request.POST.get('2nd-internal'))
        tuition_status = request.POST.get('tuition-input')
        attendance_status = request.POST.get('attendence-input')
        
        if (tuition_status == 'yes'):
            tuition_status = 1
        else:
            tuition_status = 0
        if (attendance_status == 'yes'):
            attendance_status = 1
        else:
            attendance_status =0
        
        # Check if the sum of grades is less than 2
        if (first_internal + second_internal) < 2:
            prediction = 0
        elif attendance_status == 0:
            prediction = 0
        else:
            # Making prediction
            prediction = predict_model.predict([[attendance_status,tuition_status,first_internal,second_internal]])

    return render(request, 'base_app/dropout.html', {'prediction': prediction})

def course_recom (request):
    recommendations = None
    
    # load the dataset
    courses_df = pd.read_csv('ml_models/course_recommendation/online_courses_data (Final).csv')
    recom_model = CourseRecommender(courses_df)

    if request.method == 'POST':
        field_of_interest = request.POST.get('field-of-interest')
        skills_input = request.POST.get('skills-input')
        skills = skills_input.split(',') if skills_input else []
        enrolled_courses_input = request.POST.get('current-course-input')
        enrolled_courses = enrolled_courses_input.split(',') if enrolled_courses_input else []

        recommendations = recom_model.recommend_courses(
            field_of_interest,
            skills,
            enrolled_courses if enrolled_courses else None
        )

        return render(request, 'base_app/course_recom.html', {'recommendations': recommendations.to_dict(orient='records')})

    return render(request, 'base_app/course_recom.html')

def send_email(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        phone = request.POST['phone']
        Message = request.POST['message']
        subject = f"Enquiry from BrightFuture - {name}"
        
        message = f"""
        Name: {name}
        Email: {email}
        Phone: {phone}

        Message:
        {Message}
        """
        
        # send email
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [settings.CONTACT_EMAIL],
            fail_silently=False,
        )
        
        return redirect('home')
    
    return redirect('home')
