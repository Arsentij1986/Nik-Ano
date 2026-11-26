
# hello/forms.py
from django import forms

from .models import UserName


class NameForm(forms.ModelForm):
    class Meta:
        model = UserName
        fields = ['name']

    def clean_name(self):
        name = self.cleaned_data['name'].strip()
        if not name:
            raise forms.ValidationError('Имя не может быть пустым.')
        return name