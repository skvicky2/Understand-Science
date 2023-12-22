from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class VideoMetadata(models.Model):
    """
    Stores Video Metadata
    """

    title = models.CharField(
        max_length=255,
        blank=False,
        null=False,
    )

    description = models.TextField(blank=False, null=False, verbose_name="Description")

    doctor_name = models.CharField(
        max_length=255, blank=False, null=False, verbose_name="Doctor Name"
    )

    tags = models.CharField(
        max_length=255,
        blank=False,
        null=False,
    )

    video = models.FileField(upload_to="uploads/%Y/%m/%d/")

    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_date = models.DateTimeField(default=timezone.now)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.title)

    class Meta:
        verbose_name_plural = "Manage Video Metadata"
        verbose_name = "Video Metadata"
