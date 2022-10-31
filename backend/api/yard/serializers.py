from wsgiref import validate
from rest_framework import serializers
from yard.models import Article



class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'author', 'text', 'title']