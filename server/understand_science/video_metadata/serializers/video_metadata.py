from rest_framework import serializers
from video_metadata.models import VideoMetadata


class VideoMetadataSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoMetadata
        fields = [
            "title",
            "description",
            "doctor_name",
            "tags",
            "video",
            "created_by",
            "created_date",
            "updated_date",
        ]
