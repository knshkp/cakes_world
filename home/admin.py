from django.contrib import admin
from .models import Cake,Pastrie
class CakeAdmin(admin.ModelAdmin):
    list_display=('name' , 'priceS','priceM','priceL')
class PastriesAdmin(admin.ModelAdmin):
    list_display=('name' , 'priceS','priceM','priceL')
admin.site.register(Cake,CakeAdmin)
# Register your models here.
admin.site.register(Pastrie,PastriesAdmin)