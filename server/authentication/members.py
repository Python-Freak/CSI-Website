from django.db import models


class Member(models.Model):
    """A member of the club."""
    name = models.CharField(max_length=100, null=False, blank=False, editable=True, unique=False)
    roll_no = models.CharField(max_length=8, null=False, blank=False, editable=True, unique=True)
    csi_id = models.CharField(max_length=8, null=False, blank=False, editable=True, unique=True)
    expiry_date = models.DateField(null=False, blank = False, editable=True)
    is_board_member = models.BooleanField(default=False)
    
    def __str__(self) -> str:
        return self.csi_id
    