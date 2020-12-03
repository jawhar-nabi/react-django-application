from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.response import Response
from apiclient.discovery import build

def Search(request, item):
    api_key = "CREATE A KEY AND ADD IT HERE "
    resource = build("customsearch", 'v1', developerKey=api_key).cse()
    result = resource.list(q=item, cx='ADD THE KEY').execute()
    result['items'][0]
    len(result['items'])
    return  JsonResponse(result)