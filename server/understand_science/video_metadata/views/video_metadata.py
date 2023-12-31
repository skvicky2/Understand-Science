from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView

from rest_framework.response import Response
from rest_framework import status

from video_metadata.models import VideoMetadata
from video_metadata.serializers import VideoMetadataSerializer


class VideoMetadataView(APIView):
    def get(self, request, *args, **kwargs):
        """
        List all the videos
        """
        videos = VideoMetadata.objects.all()
        serializer = VideoMetadataSerializer(videos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
