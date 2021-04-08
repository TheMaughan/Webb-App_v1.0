# CSE310 Web App Workshop - Example 1 - Solution

This example will explore the creation of simple Hello app using Django.  Notes for creating content in Django with REPL are given below.

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



