# CSE310 Web App Workshop - Example 2 - Solution

This example will explore the creation of a more complex web app to track inventory.  This example will use the built-in database support in Django.  Note that REPL will not share the SQL database (db.sqlite3) between all users of this REPL.  The items you add to the database will only be seen by you.  If this was deployed using a hosting tool like Heroku, then the database would be shared.

## Create Project

To create a new project: `django-admin startproject site_name`

Note: This was done for us automaticlaly in repl.

## Run Project

To run project: `python manage.py runserver 0.0.0.0:8000`

Note: This is done when you press Run in repl.

## Create App(s)

1. Run: `python manage.py startapp app_name`

2. Add the App you created to `INSTALLED_APPS` in `site_name/settings.py`

```python
INSTALLED_APPS = [
    'app_name.apps.AppNameConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

3. Modify (or create if it does not exit) `app_name/urls.py` to link the index URL to the `index` function from the `views.py`

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```

4. Modify the `site_name/urls.py` to point to the `urls.py` in your app.

```python
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('app_name/', include('app_name.urls')),
    path('admin/', admin.site.urls),
]
```

5. Modify `app_name/views.py` to include an `index` function.  This function will run when the app is loaded on the web browser.

```python
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world!")
```

6. Create the folder in `app_name/templates/app_name/` to put all your html template files

7. To create a database, add classes to the `app_name/models.py` and then run the following two commands (re-run these commands after any future changes): 
    * `python manage.py makemigrations` which will analyze change to your `models.py`
    * `python manage.py migrate` which will applly the changes to the database

```python
from django.db import models

class TableName(models.Model):
    field1 = models.CharField(max_length=10)
    field2 = models.CharField(max_length=100)
    field3 = models.FloatField()
```

