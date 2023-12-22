from django.urls import path

from video_metadata.views.video_metadata import VideoMetadataView

urlpatterns = [
    path("", VideoMetadataView.as_view()),
]
