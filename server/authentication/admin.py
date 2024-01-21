from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
from .members import Member

class UserAdminCustom(UserAdmin):
    list_display = ('custom_id', 'csi_id', 'email', 'full_name', 'expiry_date', 'roll_no')
    search_fields = ('csi_id', 'email', 'expiry_date')
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()
    ordering = ()
    
class MemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'csi_id', 'roll_no', 'is_board_member')
    search_fields = ('csi_id', 'roll_no', 'name', 'expiry_date')
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()
    ordering = ()

admin.site.register(User, UserAdminCustom)
admin.site.register(Member, MemberAdmin)
