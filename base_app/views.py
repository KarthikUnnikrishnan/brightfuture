from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'base_app\home.html')

def dropout_prediction(request):
    return render(request, 'base_app/dropout_form.html')