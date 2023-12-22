from video_metadata.models import VideoMetadata
from django.contrib import admin


@admin.register(VideoMetadata)
class VideoMetadataAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "description",
        "doctor_name",
        "tags",
        "created_by",
        "created_date",
        "updated_date",
    )

    exclude = (
        "created_by",
        "created_date",
    )

    def save_model(self, request, obj, form, change):
        obj.created_by = request.user
        super().save_model(request, obj, form, change)
