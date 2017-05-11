from django.db import models
# Create your models here.
from django.contrib.auth.models import User


class Code(models.Model):
    code_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, models.DO_NOTHING)
    title = models.CharField(max_length=50)
    code = models.TextField()
    last_save_code = models.TextField(blank=True, null=True)
    last_update = models.DateTimeField()
    init_time = models.DateTimeField()
    notes = models.CharField(max_length=50)

    def __str__(self):
        return self.title

    class Meta:
        managed = True
        db_table = 'code'
