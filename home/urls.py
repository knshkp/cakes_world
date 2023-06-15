from django.urls import path
from . import views
app_name='home'
urlpatterns=[
    path('cake',views.cake,name='cake'),
    path('pastries',views.pastries,name='pastries'),
    path('signup',views.signup,name='signup'),
    path('order',views.order,name='order'),
    path('success',views.success,name='success'),
    path('signup',views.signup,name='signup'),
    path('login',views.logIn,name='login'),
    path('logout',views.logOut,name='logout'),
]