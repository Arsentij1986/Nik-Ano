# hello/views.py
from django.shortcuts import render, redirect

from .forms import NameForm
from .models import UserName


def index(request):
    """Главная страница: форма + приветствие последнего пользователя."""
    greeting = None
    if request.method == 'POST':
        form = NameForm(request.POST)
        if form.is_valid():
            name = form.save()          # сохраняем имя в БД
            greeting = name.name        # персональное приветствие
        # если форма невалидна — ошибки покажутся в шаблоне
    else:
        form = NameForm()

    last_name = UserName.objects.order_by('-id').values_list('name', flat=True).first()

    return render(request, 'hello/index.html', {
        'form': form,
        'greeting': greeting,
        'last_name': last_name,
    })