from rest_framework import serializers
from .models import Post, Comment

class CommentSerializer(serializers.ModelSerializer):
    respuestas = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ['id', 'autor', 'contenido', 'fecha_creacion', 'respuesta_a', 'respuestas', 'post']

    def get_respuestas(self, obj):
        # Recursivamente serializa las respuestas a este comentario
        if obj.respuestas.exists():
            return CommentSerializer(obj.respuestas.all(), many=True).data
        return []


class PostSerializer(serializers.ModelSerializer):
    comentarios = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'titulo', 'contenido', 'fecha_creacion', 'comentarios']