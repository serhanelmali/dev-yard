from django.db import models
from django.utils import timezone



class Article(models.Model):
    author  = models.TextField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at =  models.DateTimeField(default=timezone.now)
    text = models.TextField()
    title= models.TextField()

    class Meta:
        ordering = ['created_at']
