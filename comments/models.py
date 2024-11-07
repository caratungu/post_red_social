from django.db import models

# Create your models here.
class Post(models.Model):
    titulo = models.CharField(max_length=255)
    contenido = models.TextField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo


class Comment(models.Model):
    post = models.ForeignKey(Post, related_name='comments', on_delete=models.CASCADE)
    autor = models.CharField(max_length=255)
    contenido = models.TextField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    respuesta_a = models.ForeignKey(
        'self',
        null=True,
        blank=True,
        related_name='respuestas',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'Comment de {self.autor} en {self.post}'