from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Property
from .serializers import PropertySerializer

@api_view(['GET'])
def get_properties(request):
    properties = Property.objects.all()

    serializer = PropertySerializer(properties, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def get_property(request, pk):
    try:
        property_item = Property.objects.get(id=pk)
        
        serializer = PropertySerializer(property_item, many=False, context={'request': request})
        return Response(serializer.data)
    except Property.DoesNotExist:
        return Response({'error': 'Property not found'}, status=404)