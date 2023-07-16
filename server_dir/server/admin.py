from django.contrib import admin
from dishapp.server_dir.server.models import Recipes
# Register your models here.
class ResipesListAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'category')


admin.site.register(Recipes, ResipesListAdmin)