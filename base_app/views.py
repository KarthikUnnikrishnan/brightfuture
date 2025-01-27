from django.shortcuts import render
import joblib

# Create your views here.
def home(request, prediction=None):
    return render(request, 'base_app/home.html', {'prediction': prediction})

def predict_dropout(request):
    prediction = None
    model = joblib.load('ml_models/dropout_prediction/dropout_model.joblib')
    
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
        

        # Check if the sum of grades is less than 3
        if (first_internal + second_internal) < 3:
            prediction = 0
        else:
            # Making prediction
            prediction = model.predict([[attendance_status,tuition_status,first_internal,second_internal]])

    return render(request, 'base_app/dropout.html', {'prediction': prediction})
