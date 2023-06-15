from django.shortcuts import render,redirect
from django.http import HttpResponse,JsonResponse
from .models import Cake,Pastrie
from .forms import NewUserForm
from django.contrib.auth.forms import UserCreationForm
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
def index(request):
    request.session.set_expiry(0)
    ctx={'active_link':'index'}
    return render(request,'home/index.html',ctx)
def cake(request):
    request.session.set_expiry(0)
    cakes=Cake.objects.all()
    ctx={'cakes':cakes,'active_link':'Cake'}
    return render(request,'home/cake.html',ctx)
def pastries(request):
    request.session.set_expiry(0)
    pastries=Pastrie.objects.all()
    ctx={'pastries':pastries,'active_link':'Pastrie'}
    return render(request,'home/pastries.html',ctx)
def signup(request):
    request.session.set_expiry(0)
    ctx={}
    if request.POST:
        form=NewUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
        else:
            ctx['form']=form
    else:
        form=NewUserForm()
        ctx['form']=form
    return render(request,'home/signup.html',ctx) 

@csrf_exempt
def order(request):
    request.session.set_expiry(0)
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        request.session['note'] = request.POST.get('note')
        request.session['orders'] = request.POST.get('orders')
        print(request.session['note'])
        order=request.POST.get('orders')
        print(order)
        return JsonResponse({'message': 'Data received successfully'})
    ctx = {'active_link': 'order'}
    return render(request, 'home/order.html', ctx)
def success(request):
    # order=request.session['order']
    # ctx={'order':order}
    return render(request,'home/success.html')
def signup(request):
    ctx={}
    if request.POST:
        form=NewUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
        else:
            ctx['form']=form
    else:
        form=NewUserForm()
        ctx['form']=form
    return render(request,'home/signup.html',ctx)
def logIn(request):
    if request.POST:
        username=request.POST.get('username')
        pwd=request.POST.get('password')
        user=authenticate(request,username=username,password=pwd)
        if user is not None:
            login(request,user)
            return redirect('index')
        else:
            messages.info(request,'username and/or password are incorrect')
    ctx={'active_link':'login'}
    return render(request,'home/login.html',ctx)
def logOut(request):
    logout(request)
    return redirect('index')