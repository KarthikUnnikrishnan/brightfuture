from django.shortcuts import render
from django.http import JsonResponse
import joblib

# Create your views here.
def home(request, prediction=None):
    return render(request, 'base_app/home.html', {'prediction': prediction})

def predict_dropout(request):
    prediction = None
    if request.method == 'POST':
        first_internal = request.POST.get('1st-internal')
        second_internal = request.POST.get('2nd-internal')
        tuition_status = request.POST.get('tuition-input')
        attendance_status = request.POST.get('attendence-input')

        # Data Preparation
        input_data = [[first_internal, second_internal, tuition_status, attendance_status]]

        # Making prediction
        model = joblib.load('ml_models/dropout_prediction/dropout-model.joblib')
        prediction = model.predict(input_data)

        # Render home.html with prediction result
        return render(request, 'base_app/home.html', {'prediction': prediction[0]})
