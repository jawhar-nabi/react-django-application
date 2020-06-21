from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.response import Response
from apiclient.discovery import build

def Search(request, item):
    api_key = "AIzaSyCGarE1-XPHofLo8WnVonXO8fwXaXo2RH8"
    resource = build("customsearch", 'v1', developerKey=api_key).cse()
    result = resource.list(q=item, cx='018403607070829198531:9pekevtl2jq').execute()
    result['items'][0]
    len(result['items'])
    return  JsonResponse(result)