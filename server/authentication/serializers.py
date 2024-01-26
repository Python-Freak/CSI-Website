from djoser.serializers import UserCreateSerializer
from rest_framework import exceptions, serializers

class CustomUserCreateSerializer(UserCreateSerializer):
    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except Exception as e:
            err_string = ""
            for error in e.args:
                err_string += error['message']
                err_string += ', '
            error = {'messages': err_string[:-2] if len(e.args) > 0 else 'Unknown Error'}
            raise serializers.ValidationError(error)